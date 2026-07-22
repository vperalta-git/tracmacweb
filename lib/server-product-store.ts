import { mkdir, unlink, writeFile } from "node:fs/promises"
import path from "node:path"
import { ObjectId } from "mongodb"
import { getBrandByName, getCanonicalBrandName, normalizeBrand } from "@/lib/brand-data"
import { getMongoDb } from "@/lib/mongodb"
import { demoProducts, isProductCategory, type CatalogProduct } from "@/lib/product-data"

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "products")
const MAX_IMAGE_BYTES = 5 * 1024 * 1024
const PRODUCTS_COLLECTION = "products"
const allowedImageTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/gif", "gif"],
])

type StoredProduct = Omit<CatalogProduct, "_id" | "isDemo">
type NormalizableProduct = Omit<Partial<CatalogProduct>, "_id"> & { _id?: ObjectId | string }

function cleanText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : ""
}

function cleanBrand(value: string) {
  return value.replace(/\s+/g, " ").trim()
}

function normalizeProduct(product: NormalizableProduct | null): CatalogProduct | null {
  if (!product) {
    return null
  }

  const legacyProduct = product as Partial<CatalogProduct> & {
    image?: string
    images?: string[]
    specs?: string
  }
  const spec = product.spec ?? legacyProduct.specs
  const imageUrl = product.imageUrl ?? legacyProduct.image ?? legacyProduct.images?.[0]

  if (!product.id || !product.name || !product.category || !product.description || !spec) {
    return null
  }

  if (!isProductCategory(product.category)) {
    return null
  }

  return {
    _id: product._id?.toString(),
    id: product.id,
    name: product.name,
    category: product.category,
    brand: getCanonicalBrandName(cleanBrand(product.brand ?? "")) || "Unbranded",
    description: product.description,
    spec,
    badge: product.badge || undefined,
    imageUrl: imageUrl || undefined,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    isDemo: product.isDemo,
  }
}

async function productsCollection() {
  const db = await getMongoDb()
  const collection = db.collection<StoredProduct>(PRODUCTS_COLLECTION)

  await collection.createIndex({ id: 1 }, { unique: true })
  await collection.createIndex({ createdAt: -1 })

  return collection
}

export async function getProducts() {
  try {
    const collection = await productsCollection()
    const storedProducts = (await collection.find({}).sort({ createdAt: -1 }).toArray())
      .map((item) => normalizeProduct(item))
      .filter((item): item is CatalogProduct => Boolean(item))
    const storedIds = new Set(storedProducts.map((product) => product.id))

    return [...storedProducts, ...demoProducts.filter((product) => !storedIds.has(product.id))]
  } catch (error) {
    if (error instanceof Error && error.message.includes("MONGODB_URI")) {
      return demoProducts
    }

    throw error
  }
}

function readProductPayload(formData: FormData) {
  const name = cleanText(formData.get("name"))
  const category = cleanText(formData.get("category"))
  const selectedBrand = cleanBrand(cleanText(formData.get("brand")))
  const customBrand = cleanBrand(cleanText(formData.get("customBrand")))
  const isCustomBrand = selectedBrand === "Other"
  const brand = isCustomBrand ? customBrand : getCanonicalBrandName(selectedBrand)
  const description = cleanText(formData.get("description"))
  const spec = cleanText(formData.get("spec")) || cleanText(formData.get("specs"))
  const badge = cleanText(formData.get("badge"))

  if (!name || !category || !brand || !description || !spec) {
    throw new Error("Name, brand, category, description, and specs are required.")
  }

  if (!isProductCategory(category)) {
    throw new Error("Please choose a valid product category.")
  }

  if (!isCustomBrand && !getBrandByName(selectedBrand)) {
    throw new Error("Please choose a supported brand.")
  }

  if (isCustomBrand && !customBrand) {
    throw new Error("Please enter a custom brand name.")
  }

  if (isCustomBrand && getBrandByName(customBrand)) {
    throw new Error(`“${getCanonicalBrandName(customBrand)}” already exists. Choose it from the brand list.`)
  }

  return {
    name,
    category,
    brand: isCustomBrand ? brand : getCanonicalBrandName(brand),
    description,
    spec,
    badge: badge || undefined,
    isCustomBrand,
  }
}

async function ensureCustomBrandIsUnique(brand: string, excludedId?: string) {
  const collection = await productsCollection()
  const existingBrands = await collection.find(excludedId ? { id: { $ne: excludedId } } : {}, { projection: { brand: 1 } }).toArray()

  if (existingBrands.some((product) => normalizeBrand(product.brand ?? "") === normalizeBrand(brand))) {
    throw new Error(`“${brand}” already exists. Use the existing capitalization.`)
  }
}

async function saveProductImage(file: File) {
  if (!file.size) {
    return undefined
  }

  const extension = allowedImageTypes.get(file.type)

  if (!extension) {
    throw new Error("Please upload a JPG, PNG, WEBP, or GIF image.")
  }

  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error("Product images must be 5MB or smaller.")
  }

  const filename = `${Date.now()}-${crypto.randomUUID()}.${extension}`
  const filepath = path.join(UPLOAD_DIR, filename)
  const buffer = Buffer.from(await file.arrayBuffer())

  try {
    await mkdir(UPLOAD_DIR, { recursive: true })
    await writeFile(filepath, buffer)

    return `/uploads/products/${filename}`
  } catch {
    return `data:${file.type};base64,${buffer.toString("base64")}`
  }
}

async function deleteUploadedImage(imageUrl?: string) {
  if (!imageUrl?.startsWith("/uploads/products/")) {
    return
  }

  try {
    await unlink(path.join(process.cwd(), "public", imageUrl))
  } catch {
    // Missing files should not block product updates or deletes.
  }
}

export async function addProduct(formData: FormData) {
  const { isCustomBrand, ...payload } = readProductPayload(formData)
  if (isCustomBrand) {
    await ensureCustomBrandIsUnique(payload.brand)
  }
  const image = formData.get("image")
  const imageUrl = image instanceof File ? await saveProductImage(image) : undefined
  const product: CatalogProduct = {
    id: crypto.randomUUID(),
    ...payload,
    imageUrl,
    createdAt: new Date().toISOString(),
  }
  const collection = await productsCollection()

  const { _id: _databaseId, ...storedProduct } = product
  await collection.insertOne(storedProduct)

  return product
}

function productFilter(id: string, databaseId?: string) {
  if (databaseId && ObjectId.isValid(databaseId)) {
    return { _id: new ObjectId(databaseId) }
  }

  return { id }
}

export async function updateProduct(id: string, formData: FormData, databaseId?: string) {
  if (!id && !databaseId) {
    throw new Error("Product ID is required.")
  }

  if (id.startsWith("demo-")) {
    throw new Error("Demo products cannot be edited. Add a new product to replace it.")
  }

  const { isCustomBrand, ...payload } = readProductPayload(formData)
  if (isCustomBrand) {
    await ensureCustomBrandIsUnique(payload.brand, id)
  }
  const image = formData.get("image")
  const collection = await productsCollection()
  const filter = productFilter(id, databaseId)
  const existingProduct = normalizeProduct(await collection.findOne(filter))

  if (!existingProduct) {
    throw new Error("Product not found.")
  }

  const imageUrl = image instanceof File ? await saveProductImage(image) : undefined
  const product: CatalogProduct = {
    ...existingProduct,
    ...payload,
    imageUrl: imageUrl ?? existingProduct.imageUrl,
    updatedAt: new Date().toISOString(),
  }

  const { _id: _databaseId, ...productUpdate } = product
  await collection.updateOne(filter, { $set: productUpdate })

  if (imageUrl && imageUrl !== existingProduct.imageUrl) {
    await deleteUploadedImage(existingProduct.imageUrl)
  }

  return product
}

export async function deleteProduct(id: string, databaseId?: string) {
  if (!id && !databaseId) {
    throw new Error("Product ID is required.")
  }

  if (id.startsWith("demo-")) {
    throw new Error("Demo products cannot be deleted.")
  }

  const collection = await productsCollection()
  const filter = productFilter(id, databaseId)
  const productToDelete = normalizeProduct(await collection.findOne(filter))

  if (!productToDelete) {
    throw new Error("Product not found.")
  }

  await collection.deleteOne(filter)
  await deleteUploadedImage(productToDelete.imageUrl)
}
