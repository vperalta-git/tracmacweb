import asiastarJs6762gImage from "@/assets/asiastar/JS6762G.png"
import asiastarYbl6111hImage from "@/assets/asiastar/YBL6111H.png"
import asiastarYbl6119hImage from "@/assets/asiastar/ASIASTAR Bus YBL6119H 44+1+1 with CR.png"
import asiastarWp10336GeneralImage from "@/assets/asiastar/YBL6121H .png"
import asiastarYbl6121hImage from "@/assets/asiastar/YBL6121H.png"
import asiastarYbl6125hSingleImage from "@/assets/asiastar/YBL6125H .png"
import asiastarYbl6125hImage from "@/assets/asiastar/YBL6125H.png"
import asiastarYbl6829hImage from "@/assets/asiastar/YBL6829H .png"
import asiastarYbl6909hImage from "@/assets/asiastar/YBL6909H.png"
import cimcMixer16mImage from "@/assets/cimc-rjst-trailer/16m³ Mixer Trailer.png"
import cimcAsphalt35klImage from "@/assets/cimc-rjst-trailer/35KL Asphalt Tank Trailer.png"
import cimcFlatbed40ftImage from "@/assets/cimc-rjst-trailer/40FT Flat-bed Trailer.png"
import cimcAluminumFuel40klImage from "@/assets/cimc-rjst-trailer/40KL Aluminum Fuel Tank Trailer.png"
import cimcSteelFuel40klImage from "@/assets/cimc-rjst-trailer/40KL Steel Fuel Tank Trailer.png"
import cimcSteelFuel50klImage from "@/assets/cimc-rjst-trailer/50KL Steel Fuel Tank Trailer.png"
import forlandFootersCumminsImage from "@/assets/forland/14FOOTER COMMINS & 17FOOTER COMMINS Specification.png"
import forlandCargoBoom32tImage from "@/assets/forland/3.2T Cargo Boom Truck .png"
import forlandAerial46ftImage from "@/assets/forland/46FT Aerial Work Truck Specification.png"
import forlandCargoDoubleCabinImage from "@/assets/forland/Cargo Truck Double Cabin .png"
import forlandDump3cbmImage from "@/assets/forland/Dump Truck 3CBM.png"
import forlandDumpHeavyImage from "@/assets/forland/DumpTruck Specification.png"
import forlandIsuzuTech4tDumpImage from "@/assets/forland/ISUZU TECHNOLOGY 4J28TC 4 Ton Dump Truck.png"
import sinotruckEu2NxImage from "@/assets/sinotruck/1.png"
import sinotruckEu5NxImage from "@/assets/sinotruck/2.png"
import shacmanSx3255mt384Image from "@/assets/shacman/SX3255MT384.png"
import shacmanSx3315gv406Image from "@/assets/shacman/Sx3315GV406.png"
import shacmanSx32556t384Image from "@/assets/shacman/SX32556T384.png"
import shacmanSx42554v324Image from "@/assets/shacman/SX42554V324.png"
import lonkingCdm856Image from "@/assets/lonking/cdm856.png"
import lonkingForkliftImage from "@/assets/lonking/Forklift.png"

export type ProductCategoryName =
  | "Light-Duty Trucks"
  | "Medium-Duty Trucks"
  | "Heavy-Duty Trucks"
  | "Bus"
  | "Dropside"
  | "Aluminum Van"
  | "Refrigerated Van"
  | "Cargo Truck"
  | "Dump Truck"
  | "Tractor Head"
  | "Trailer"
  | "Special Purpose"

export type ProductSiteSlug = "tracmac" | "strongbuilt"

export type ProductCategory = {
  name: ProductCategoryName
  description: string
}

export type CatalogProduct = {
  id: string
  name: string
  category: ProductCategoryName
  site?: ProductSiteSlug
  brand: string
  description: string
  spec: string
  badge?: string
  imageUrl?: string
  createdAt?: string
  updatedAt?: string
  isDemo?: boolean
}

export const productCategories: ProductCategory[] = [
  {
    name: "Light-Duty Trucks",
    description: "Compact commercial trucks for city delivery, service teams, and small business logistics.",
  },
  {
    name: "Medium-Duty Trucks",
    description: "Reliable work trucks for distribution, fleet operations, and mixed cargo routes.",
  },
  {
    name: "Heavy-Duty Trucks",
    description: "High-capacity trucks built for demanding cargo, construction, and regional hauling.",
  },
  {
    name: "Bus",
    description: "Passenger bus units for fleet operators, staff transport, public routes, and private service.",
  },
  {
    name: "Dropside",
    description: "Open cargo bodies for easy side loading, construction supplies, and general hauling.",
  },
  {
    name: "Aluminum Van",
    description: "Enclosed cargo vans for dry goods, retail distribution, and secure transport.",
  },
  {
    name: "Refrigerated Van",
    description: "Temperature-controlled truck bodies for food, pharma, and cold-chain deliveries.",
  },
  {
    name: "Cargo Truck",
    description: "Open cargo and double-cabin cargo trucks for delivery, utility, and field operations.",
  },
  {
    name: "Dump Truck",
    description: "Tipper bodies for aggregates, construction sites, and heavy material movement.",
  },
  {
    name: "Tractor Head",
    description: "Prime movers for trailer operations and long-haul commercial transport.",
  },
  {
    name: "Trailer",
    description: "Semi-trailers, tank trailers, flatbeds, and mixer trailers for heavy transport operations.",
  },
  {
    name: "Special Purpose",
    description: "Custom truck builds for service, utility, rescue, and industry-specific applications.",
  },
]

export const demoProducts: CatalogProduct[] = [
  {
    id: "demo-light-duty-truck",
    name: "ISUZU 10ft Dropside",
    category: "Dropside",
    brand: "ISUZU",
    description: "A dependable city-ready truck for daily cargo delivery, hardware supply, and business logistics.",
    spec: "10ft dropside body, diesel engine, manual transmission",
    badge: "Ready Unit",
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-aluminum-van",
    name: "SHACMAN Aluminum Van",
    category: "Aluminum Van",
    brand: "SHACMAN",
    description: "Secure enclosed cargo truck for dry goods, retail delivery, and route-based distribution.",
    spec: "14ft aluminum van body, rear swing doors, fleet-ready configuration",
    badge: "Fleet Pick",
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-reefer",
    name: "WEICHAI Refrigerated Van",
    category: "Refrigerated Van",
    brand: "WEICHAI",
    description: "Cold-chain truck for food service, groceries, flowers, pharma, and temperature-sensitive cargo.",
    spec: "Insulated reefer body, dual rear doors, chiller-ready build",
    badge: "Cold Chain",
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-dump-truck",
    name: "Sinotruck Dump Truck",
    category: "Dump Truck",
    brand: "Sinotruck",
    description: "Practical dump truck configuration for construction materials, aggregates, and site hauling.",
    spec: "Hydraulic tipper body, reinforced chassis, heavy-duty rear axle",
    badge: "Worksite",
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-sinotruck-eu2-nx-6x4-430hp",
    name: "Sinotruck EU2 NX 6x4 430HP Tractor Head",
    category: "Tractor Head",
    brand: "Sinotruck",
    description: "Low-roof 6x4 tractor head built for heavy-duty port, logistics, and long-haul operations.",
    spec: "Model: EU2 NX 6x4; Engine: 430HP; Max torque: 1900 N-m; Transmission: 12 forward / 2 reverse; Braking system: ABS; Fuel tank: 600L; Emission standard: Euro 2; Configuration: low roof tractor head.",
    badge: "Tractor Head",
    imageUrl: sinotruckEu2NxImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-sinotruck-eu5-nx-6x4-430hp",
    name: "Sinotruck EU5 NX 6x4 430HP Tractor Head",
    category: "Tractor Head",
    brand: "Sinotruck",
    description: "Low-roof 6x4 tractor head designed for container hauling, port terminals, and distribution fleets.",
    spec: "Model: EU5 NX 6x4; Engine: 430HP; Max torque: 1900 N-m; Transmission: 12 forward / 2 reverse; Braking system: ABS; Fuel tank: 600L; Emission standard: Euro 5; Configuration: low roof tractor head.",
    badge: "Tractor Head",
    imageUrl: sinotruckEu5NxImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-shacman-sx3255mt384",
    name: "SHACMAN H3000 SX3255MT384 6x4 380HP",
    category: "Heavy-Duty Trucks",
    brand: "SHACMAN",
    description: "SHACMAN H3000 M-series flat roof heavy-duty truck with comfortable cab and hydraulic suspension.",
    spec: "Series: H3000 M; Model: SX3255MT384; Drive: 6x4; Cab: flat roof with one bed; Suspension: four-point hydraulic with hydraulic driver seat; A/C: refrigeration; Windows: electric; Cab reversal: manual; Engine: WEICHAI WP12.380E32 (Euro II) 380HP, 11.596L, 6-cylinder in-line, turbocharged, intercooling, EGR; Transmission: FAST RTD-11509C+QH50 PTO; Clutch: φ430; Axles: SHACMAN-HANDE; Front axle: MAN tech 9.5T; Rear axle: MAN tech 16T double reduction; Ratio: 5.92; Dimensions (mm): 8550×2550×3450; GVW: 50,000 kg; Wheelbase (mm): 3775+1400; Fuel tank: 400L aluminum; Tire: 12.00R20 (10+1).",
    badge: "H3000",
    imageUrl: shacmanSx3255mt384Image.src,
    createdAt: "2026-05-27T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-shacman-sx3315gv406",
    name: "SHACMAN H3000 SX3315GV406 8x4 420HP",
    category: "Heavy-Duty Trucks",
    brand: "SHACMAN",
    description: "SHACMAN H3000 G-series high-roof heavy-duty truck with two beds and robust chassis for large payloads.",
    spec: "Series: H3000 G; Model: SX3315GV406; Drive: 8x4; Cab: high roof with two beds; Suspension: four-point hydraulic with hydraulic driver seat; A/C: refrigeration; Windows: electric; Cab reversal: electric; Engine: WEICHAI WP12.420E32 (Euro II) 420HP, 11.596L; Transmission: FAST 12JSD200T-B+QH50 PTO (12F+2R); Clutch: φ430; Axles: SHACMAN-HANDE; Front axle: MAN tech 9.5T; Rear axle: MAN tech 16T double reduction; Ratio: 5.262; Dimensions (mm): 10500×2550×3850; GVW: 70,000 kg; Wheelbase (mm): 1800+3975+1400; Fuel tank: 400L aluminum; Tire: 12.00R20 (12+1); Others: high strength frame, metal bumper, WABCO valve, rear light protector, radiator protector, reverse alarm; Cargo box: 7600×2300×2000mm (bottom 8mm; side 6mm; Q355 steel).",
    badge: "H3000 G",
    imageUrl: shacmanSx3315gv406Image.src,
    createdAt: "2026-05-27T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-shacman-sx32556t384-x3000",
    name: "SHACMAN X3000 SX32556T384 6x4 380HP",
    category: "Heavy-Duty Trucks",
    brand: "SHACMAN",
    description: "SHACMAN X3000 series flat roof heavy-duty truck configured for robust long-haul and fleet operations.",
    spec: "Series: X3000; Model: SX32556T384; Drive: 6x4; Cab: flat roof with one bed; Suspension: four-point hydraulic with hydraulic driver seat; A/C: refrigeration; Windows: electric; Cab reversal: manual; Engine: WEICHAI WP12.380E32 (Euro II) 380HP, 11.596L; Transmission: FAST RTD-11509C+QH50 PTO; Clutch: φ430; Axles: SHACMAN-HANDE; Front axle: MAN tech 9.5T; Rear axle: MAN tech 16T double reduction; Ratio: 5.92; Dimensions (mm): 8550×2550×3450; GVW: 50,000 kg; Wheelbase (mm): 3775+1400; Fuel tank: 400L aluminum; Tire: 12.00R20 (10+1).",
    badge: "X3000",
    imageUrl: shacmanSx32556t384Image.src,
    createdAt: "2026-05-27T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-shacman-sx42554v324-x3000",
    name: "SHACMAN X3000 SX42554V324 6x4 420HP",
    category: "Heavy-Duty Trucks",
    brand: "SHACMAN",
    description: "SHACMAN X3000 high-roof heavy-duty truck with air suspension and large fuel capacity for extended operations.",
    spec: "Series: X3000; Model: SX42554V324; Drive: 6x4; Cab: high roof with two beds; Suspension: four-point air suspension with air driver seat; A/C: refrigeration; Windows: electric; Cab reversal: manual; Engine: WEICHAI WP12.420E32 (Euro II) 420HP, 11.596L; Transmission: FAST 12JSD200T-B+QH50 PTO (12F+2R); Clutch: φ430; Axles: SHACMAN-HANDE; Front axle: MAN tech 7.5T; Rear axle: MAN tech 16T double reduction; Ratio: 4.769; Dimensions (mm): 6900×2500×4000; GVW: 80,000 kg; Wheelbase (mm): 3175+1400; Fuel tank: 600L aluminum; Tire: 12R22.5 (10+1).",
    badge: "X3000",
    imageUrl: shacmanSx42554v324Image.src,
    createdAt: "2026-05-27T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-lonking-cdm856",
    name: "Lonking CDM856 Wheel Loader",
    category: "Special Purpose",
    brand: "Lonking",
    description: "Heavy-duty wheel loader suitable for mining, construction, and material handling operations.",
    spec: "Drive train: Countershaft Powershift; Shift: Electronic Powershift Control; Transmission pressure: 1.6-1.8MPa; Torque converter: single-stage, single-turbine, 3-element (Torque ratio 2.5); Axles: rigid front axle & oscillating rear axle with ±10° oscillation; Differential: conventional; Main reducer: spiral bevel 1-stage; Final reducer: planetary reduction; Tires: 23.5-25 L-3 16PR TT.",
    badge: "Wheel Loader",
    imageUrl: lonkingCdm856Image.src,
    createdAt: "2026-05-27T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-lonking-forklift-multi",
    name: "Lonking Industrial Forklift (Multi-function)",
    category: "Special Purpose",
    brand: "Lonking",
    description: "Industrial forklift with advanced hydraulics, energy-efficient drive, and operator-focused controls for warehouse and heavy-duty use.",
    spec: "Features: Multi-function instrument, high-efficiency AC drive motor, lifting/steering computer control, gear pump with low noise, energy-efficient signal, load-sensing hydraulic system, emergency power off, full LED lamps, reversing buzzer, electric horn, wide-angle rearview mirror, full-hydraulic power steering, standard forks, two-piece multiplex valve, lifting and tilting joysticks.",
    badge: "Forklift",
    imageUrl: lonkingForkliftImage.src,
    createdAt: "2026-05-27T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-ybl6119h",
    name: "ASIASTAR YBL6119H",
    category: "Bus",
    brand: "Asiastar",
    description: "Euro 5 passenger bus with WEICHAI power, FAST manual transmission, leaf spring suspension, ABS, and drum brake axles.",
    spec: "Model: YBL6119H; Engine: WEICHAI WP7.270E51 Euro 5; Fuel tank: 260L steel; Gearbox: FAST 6DS130T 6-speed manual; Clutch: 430 diaphragm spring; Front axle: 5.5T drum brake; Rear axle: 11.5T drum brake; Brakes: air pressure independent double pipeline with energy storage spring parking brake; Suspension: multi leaf spring with front and rear stabilizer; Steering: Chinese power steering; ABS: Chinese ABS; Automatic adjustment arm: rear axle.",
    badge: "Asiastar",
    imageUrl: asiastarYbl6119hImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-js6762g",
    name: "ASIASTAR JS6762G",
    category: "Bus",
    brand: "Asiastar",
    description: "Compact Asiastar bus configured with WEICHAI Euro V engine, FAST manual gearbox, roof-mounted A/C, ABS, and tubeless tires.",
    spec: "Model: JS6762G; Engine: WEICHAI WP4.1NQ170E50 Euro V; Fuel tank: 150L steel, right side; Gearbox: FAST 6-shift manual; Clutch: Sachs diaphragm spring; Front axle: 3.5T drum brake; Rear axle: 7T drum brake; Brakes: dual circuit air brake with energy storage spring parking; Suspension: multi-leaf spring with front stabilizer; Steering: integral power steering, left hand drive; ABS: yes; Automatic slack adjuster: front and rear; Retarder: no; Centralized lubrication: no; Cooling: electric control fan; Tire: tubeless 225/70R19.5; Wheel cover: none; A/C: roof-mounted 16000kcal/h.",
    badge: "Asiastar",
    imageUrl: asiastarJs6762gImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-ybl6121h",
    name: "ASIASTAR YBL6121H",
    category: "Bus",
    brand: "Asiastar",
    description: "Heavy passenger bus platform with 336hp WEICHAI engine, FAST 6-speed transmission, stabilizer-equipped leaf suspension, and ABS.",
    spec: "Model: YBL6121H; Engine: Weichai WP10.336E53, 336hp, Euro 5; Fuel tank: 260L steel; Gearbox: Fast 6DS150T 6-speed manual, three soft shaft control; Clutch: 430 diaphragm spring; Front axle: 6.5T; Rear axle: 13T; Brakes: air pressure independent double pipeline, front disc and rear drum, energy storage spring parking brake; Suspension: leaf spring with front and rear stabilizer; ECAS: no; Steering: integral power steering; ABS: yes.",
    badge: "Asiastar",
    imageUrl: asiastarYbl6121hImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-ybl6909h",
    name: "ASIASTAR YBL6909H",
    category: "Bus",
    brand: "Asiastar",
    description: "Euro V Asiastar bus with WEICHAI six-cylinder engine, 260L steel tank, domestic 6-speed gearbox, and 4.5T drum-brake front axle.",
    spec: "Model: YBL6905H; Engine: WEICHAI WP7.240E51, 6 cylinders, 176kw/2100rpm Euro V; Fuel tank: 260L steel; Gearbox: domestic 6DS100T 6-speed manual, three soft shaft control; Clutch: Chinese 430 diaphragm spring; Front axle: 4.5T Chinese front axle, drum brake.",
    badge: "Asiastar",
    imageUrl: asiastarYbl6909hImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-ybl6111h-single",
    name: "ASIASTAR YBL6111H Single Windshield",
    category: "Bus",
    brand: "Asiastar",
    description: "Single-windshield Asiastar coach with Euro 5 WEICHAI engine, stainless fuel tank, Hande axles, air suspension, and automatic slack adjusters.",
    spec: "Model: YBL6111H; Engine: Weichai WP10.310E53 Euro 5; Fuel tank: 400L stainless steel; Gearbox: Fast 6DS150T 6-speed manual, three soft shaft control; Clutch: Sachs GMF430; Front axle: Domestic Hande 5.5T; Rear axle: Domestic Hande 11T; Brakes: air pressure independent double pipeline, front and rear drum, energy storage spring parking brake; Suspension: 2+4 airbags, air suspension with front and rear stabilizer; ECAS: no; Steering: Chinese power steering, left hand drive; ABS: Chinese ABS; Automatic slack adjuster: front and rear.",
    badge: "Asiastar",
    imageUrl: asiastarYbl6111hImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-wp10336e53-general",
    name: "ASIASTAR WP10.336E53 General Configuration",
    category: "Bus",
    brand: "Asiastar",
    description: "General Asiastar configuration using the 336hp WEICHAI WP10.336E53 Euro 5 engine, FAST manual transmission, and airbag suspension.",
    spec: "Model: WP10.336E53; Engine: Weichai WP10.336E53, 336hp, Euro 5; Fuel tank: 260L steel; Gearbox: Fast 6DS150T 6-speed manual, three soft shaft control; Clutch: 430 diaphragm spring; Front axle: 6.5T; Rear axle: 13T; Brakes: air pressure independent double pipeline, front disc and rear drum, energy storage spring parking brake; Suspension: front 2 rear 4 air bags with front and rear stabilizer; ECAS: no.",
    badge: "Asiastar",
    imageUrl: asiastarWp10336GeneralImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-ybl6829h",
    name: "ASIASTAR YBL6829H",
    category: "Bus",
    brand: "Asiastar",
    description: "Asiastar bus with WEICHAI WP4.6 Euro V engine, FAST 6-speed gearbox, leaf spring suspension, drum brakes, and Chinese ABS.",
    spec: "Model: YBL6905H; Engine: WEICHAI WP4.6NQ220E50, 162KW, 800N.M Euro V, ECE certification; Fuel tank: 260L steel; Gearbox: FAST 6DS80T 6-speed, three soft shaft control; Clutch: Chinese 395 diaphragm spring; Front axle: 4.2T drum brake; Rear axle: 8T drum brake; Brakes: dual-circuit air brake, front and rear drum brake, drum axle with automatic adjustment arm; Suspension: leaf spring with front stabilizer bar; Steering: Chinese power steering, left hand drive; ABS: Chinese ABS; Automatic slack adjuster: Chinese front and rear.",
    badge: "Asiastar",
    imageUrl: asiastarYbl6829hImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-ybl6101h",
    name: "ASIASTAR YBL6101H",
    category: "Bus",
    brand: "Asiastar",
    description: "Air-suspension Asiastar bus with HINO engine, Qijiang 6-speed manual gearbox, Dongfeng Dena axles, and energy storage parking brake.",
    spec: "Model: YBL6101H; Engine: HINO J08E-YA; Fuel tank: 240L steel; Gearbox: Qijiang S6-100 6-speed manual, two soft shaft control; Clutch: Chinese 430 coil spring; Front axle: 4.5T Dongfeng Dena, drum brake; Rear axle: 9.5T Dongfeng Dena, drum brake; Brakes: air pressure independent double pipeline, front and rear drum, energy storage spring parking brake; Suspension: air suspension, 2+4 airbags, with stabilizer bar.",
    badge: "Asiastar",
    imageUrl: asiastarYbl6119hImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-ybl6125h-single",
    name: "ASIASTAR YBL6125H Single Windshield",
    category: "Bus",
    brand: "Asiastar",
    description: "Single-windshield YBL6125H with dual stainless tanks, Euro 5 WEICHAI engine, Hande axles, Bosch steering, ABS, and E-retarder.",
    spec: "Model: YBL6125H; Engine: Weichai WP10.336E53 Euro 5; Fuel tank: 300L x 2 stainless steel, 600L total; Gearbox: Fast 6DS150T 6-speed manual, three soft shaft control; Clutch: Sachs 430; Front axle: Domestic Hande 6.5T; Rear axle: Domestic Hande 13T; Brakes: air pressure independent double pipeline, front disc and rear drum, energy storage spring parking brake; Suspension: front 2 rear 4 air bags with front and rear stabilizer; ECAS: no; Steering: Bosch power steering, left hand drive; ABS: yes; Automatic slack adjuster: rear; Retarder: E-retarder; Centralized lubrication: no; Cooling: normal mechanical fan.",
    badge: "Asiastar",
    imageUrl: asiastarYbl6125hSingleImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-asiastar-ybl6125h",
    name: "ASIASTAR YBL6125H Double Windshield",
    category: "Bus",
    brand: "Asiastar",
    description: "Double-windshield Asiastar bus with 375hp WEICHAI power, 400L fuel tank, Hande axles, Bosch steering, WABCO ABS, and airbag suspension.",
    spec: "Model: YBL6125H; Engine: WP10.375E53, 375hp, Euro 5; Fuel tank: 400L; Gearbox: 6DS180T 6-speed manual; Clutch: Sachs GMF430; Front axle: Hande 6.5T, disc brake; Rear axle: Hande 13T, drum brake; Brakes: air pressure independent double pipeline, front disc and rear drum, energy storage spring parking brake; Suspension: front 2 and rear 4 airbag suspension; Steering: left-hand drive, Bosch 8098 power steering; ABS: WABCO ABS; Automatic slack adjuster: yes.",
    badge: "Asiastar",
    imageUrl: asiastarYbl6125hImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-cimc-40ft-flatbed-trailer",
    name: "CIMC DFF 40FT Flat-bed Trailer",
    category: "Trailer",
    brand: "CIMC RJST Trailer",
    description: "Three-axle 40ft flat-bed trailer with Q345 structure, FUWA axles, JOST landing gear, mechanical suspension, and LED lighting.",
    spec: "Model: 40FT Flat-bed Trailer 3 axles; Overall dimension: 12600 x 2500 x 1500mm; Payload: 60000kg; Material: Q345; Tare weight: 6000kg; Main beam: 500mm; Flange and web: 14/8/16mm; Checkered plate: 2.5mm; Twist locks: 8 sets; Hooks: equipped; Paint: powder coated; Landing gear: JOST E100; Kingpin: JOST 2 inch; Brake system: T30/30 type on rear two axles, WABCO relay valve; Suspension: CIMC mechanical suspension, 10pcs x 13mm; Axle: FUWA 13T, 1840mm track, 3pcs; ABS: nil; Tire: 12R22.5, 12pcs; Rim: 9.0-22.5, 10 studs, 12pcs; Lights: 24V LED; Tool box: 1pc; Spare tire carrier: 1 unit per chassis; Rear sign: LONG VEHICLE.",
    badge: "CIMC",
    imageUrl: cimcFlatbed40ftImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-cimc-40kl-steel-fuel-tank-trailer",
    name: "CIMC 40KL Steel Fuel Tank Trailer",
    category: "Trailer",
    brand: "CIMC RJST Trailer",
    description: "40KL straight-cylinder steel fuel tank trailer with eight compartments, top loading, FUWA axles, JOST gear, and 4S/2M ABS.",
    spec: "Model: 40KL Steel Fuel Tank Trailer; Body: straight cylinder tank, 8 compartments 6/6/6/6/4/4/4/4, 40KL +/- 5%; Loading: top loading; Tank body: Q235 5mm; Dish end: Q235 6mm; Baffle plate: Q235 5mm; Compartment plate: Q235 6mm; Manhole: KT or JIALONG 20 inch aluminum with vent valve, 8pcs; Emergency valve: KT or JIALONG square flange aluminum pneumatic, 8pcs; Discharge valve: KT or JIALONG 2.5 inch aluminum ball valve, 8pcs; Emergency switch: CIMC standard, 2pcs; Discharge pipes: 4 inch, angled about 5 degrees downward; API connector: 2.5 inch; Oil-water separator: DENUO 1pc; Interlock: ladder gate, handrail, and cabinet brake locking; Working pressure: 0.2MPa; Test pressure: 0.3MPa; Axle: FUWA 1840, 3 x 13T; Suspension: mechanical leaf spring, 10pcs 13mm x 90mm; Brake: dual line pneumatic; Brake chamber: T30/30 spring brake on 2 axles; Air tank: 46L, 2pcs; Tire: 12R22.5 Linglong, 13pcs including spare; Landing gear: JOST E100; Kingpin: JOST KZ1012-50, 2 inch bolted; ABS: 4S/2M.",
    badge: "Fuel Tank",
    imageUrl: cimcSteelFuel40klImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-cimc-40kl-aluminum-fuel-tank-trailer",
    name: "CIMC 40KL Aluminum Fuel Tank Trailer",
    category: "Trailer",
    brand: "CIMC RJST Trailer",
    description: "40KL aluminum fuel tank trailer with six compartments, top loading, JIALONG valves, FUWA axles, and safety brake interlock.",
    spec: "Model: 40KL Aluminum Fuel Tank Trailer; Body: straight cylindrical tank, 6 compartments 10/10/6/6/4/4, 40KL +/- 5%; Loading: top loading; Tank body: Aluminum 5182 5.5mm; Dish end, baffle, and compartment plates: Aluminum 5182 6mm; Manhole: JIALONG 20 inch aluminum with vent valve, 6pcs; Emergency valve: JIALONG square flange aluminum pneumatic, 6pcs; Discharge valve: CIMC standard 2.5 inch aluminum ball valve, 6pcs; Combination switch: JIALONG air-operated, 1 set; Emergency switch: CIMC standard, 2pcs; Discharge pipes: 4 inch, angled about 5 degrees downward; API connector and hose: 2.5 inch; Oil-water separator: DENUO 1pc; Interlock: ladder gate, handrail, and cabinet brake locking; Working pressure: 0.2MPa; Test pressure: 0.3MPa; Axle: FUWA 1840, 3 x 13T; Suspension: mechanical leaf spring, 10pcs 13mm x 90mm; Brake: dual line pneumatic; Brake chamber: T30/30 spring brake on 2 axles; Air tank: 46L, 2pcs; Tire: 12R22.5 Linglong, 13pcs including spare; Rim: 9.0-22.5 steel, 13pcs including spare; Landing gear: JOST E100; Kingpin: JOST KZ1012-50, 2 inch bolted; ABS: 4S/2M.",
    badge: "Fuel Tank",
    imageUrl: cimcAluminumFuel40klImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-cimc-35kl-asphalt-tank-trailer",
    name: "CIMC 35KL Asphalt Tank Trailer",
    category: "Trailer",
    brand: "CIMC RJST Trailer",
    description: "35KL insulated asphalt tank trailer with internal heat pipe, Riello burner, electric asphalt pump, FUWA axles, and 4S/2M ABS.",
    spec: "Model: 35KL Asphalt Tank Trailer; Body: straight cylindrical tank, 1 compartment, 35KL +/- 5%; Loading: top loading; Tank body: Q235 4mm; Dish end: Q345 4.5mm; Baffle plate: Q235 4.5mm; Insulation cover: glass reinforced plastic; Insulation: 100mm fibre glass; Heat pipe: inside design; Temperature: equipped; Manhole: Guard stainless steel, 2pcs; Asphalt valve: double flanged; Discharge ball valve: Q41F-16C L=145 DN100, 1pc; Burner: Riello RL44MZ; Electric cabinet: integrated burner and pump control; Asphalt pump: RCB38 electric heating asphalt pump; Discharge hose: 4 inch; Working pressure: 0.2MPa; Test pressure: 0.3MPa; Axle: FUWA 13T, 3pcs; Suspension: mechanical leaf; Brake: dual line pneumatic; Brake chamber: T30/30 spring brake on 2 axles; Air tank: 46L, 2pcs; Tire: 12R22.5 Double Coin, 13pcs including spare; Rim: 9.0-22.5 steel, 13pcs including spare; Landing gear: JOST E100; Kingpin: JOST KZ1012-50, 2 inch bolted; ABS: 4S/2M.",
    badge: "Asphalt",
    imageUrl: cimcAsphalt35klImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-cimc-16m3-mixer-trailer",
    name: "CIMC 16m3 Mixer Trailer",
    category: "Trailer",
    brand: "CIMC RJST Trailer",
    description: "16m3 concrete mixer trailer with Q355 barrel, PMP hydraulic system, tri-axle steel suspension, FUWA axles, and JOST landing leg.",
    spec: "Model: 16m3 Mixer Trailer; Dimension: 8900 x 2550 x 4070mm; Tare weight: 9400kg; PTO: from chassis; Mixing capacity: 16m3; Geometrical capacity: 25.91m3; Barrel wall: Q355 5mm; Mixing blades: 750GJ 3.5mm; Dishend: Q355 8mm; Loading speed: at least 1.2m3/min; Discharge speed: at least 2.7m3/min; Rest rate: less than 0.5%; Mixer speed: 0-16rpm; Tank angle: 9.5 degrees; Speed reduction: PMP 7.8; Pump: PMP 110; Motor: PMP 110; Oil cooler: Kaipeng 26L; Hopper, main chute, sub chute, extension chute: 3 layer 11mm; Chassis: carbon steel; Suspension: tri-axle steel; Leaf spring: 10 x 13, 6 sets; Axle: FUWA brand, 3 x 13T; Tire: 11R22.5 China brand; Rim: steel 8.25-22.5; Landing leg: JOST E100 linkage type; Kingpin: JOST 2 inch bolted.",
    badge: "Mixer",
    imageUrl: cimcMixer16mImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-cimc-50kl-steel-fuel-tank-trailer",
    name: "CIMC 50KL Steel Fuel Tank Trailer",
    category: "Trailer",
    brand: "CIMC RJST Trailer",
    description: "50KL steel fuel tank trailer with seven compartments, top loading, JIALONG/KT fittings, FUWA axles, JOST gear, and 4S/2M ABS.",
    spec: "Model: 50KL Steel Fuel Tank Trailer; Body: straight cylindrical tank, 7 compartments 10/6/6/6/4/4/14, 50KL +/- 5%; Loading: top loading; Tank body: Q235 5mm; Dish end: Q235 6mm; Baffle plate: Q235 5mm; Compartment plate: Q235 6mm; Manhole: KT or JIALONG 20 inch aluminum with vent valve, 6pcs; Emergency valve: KT or JIALONG square flange aluminum pneumatic, 6pcs; Discharge valve: KT or JIALONG 2.5 inch aluminum ball valve, 6pcs; Combination switch: KT or JIALONG air-operated, 1 set; Emergency switch: CIMC standard, 2pcs; Discharge pipes: 4 inch, angled about 5 degrees downward; API connector and hose: 2.5 inch; Oil-water separator: DENUO 1pc; Interlock: ladder gate, handrail, and cabinet brake locking; Working pressure: 0.2MPa; Test pressure: 0.3MPa; Axle: FUWA 1840, 3 x 13T; Suspension: mechanical leaf spring, 10pcs 13mm x 90mm; Brake: dual line pneumatic; Brake chamber: T30/30 spring brake on 2 axles; Air tank: 46L, 2pcs; Tire: 12R22.5 Linglong, 13pcs including spare; Rim: 9.0-22.5 steel, 13pcs including spare; Landing gear: JOST E100; Kingpin: JOST KZ1012-50, 2 inch bolted; ABS: 4S/2M.",
    badge: "Fuel Tank",
    imageUrl: cimcSteelFuel50klImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-forland-bj3045d9pba-b1-dump-3cbm",
    name: "Forland BJ3045D9PBA-B1 Dump Truck 3CBM",
    category: "Dump Truck",
    brand: "Forland",
    description: "4x2 left-hand-drive 3CBM dump truck with 4J28TC Euro IV engine, 4-ton payload, hydraulic brakes, and 120L fuel tank.",
    spec: "Model: BJ3045D9PBA-B1; Driving type: 4x2; Steering wheel: left; Wheelbase: 3000mm; Overall dimensions: 5618 x 2090 x 2320mm; Cargo body inner dimensions: 3500 x 1860 x 450mm; Front/rear track: 1535/1526mm; Front/rear suspension: 1095/1523mm; Payload: 4000kg; Curb weight: 3180kg; GVW: 7310kg; Engine: 4J28TC; Displacement: 2.771L; Emission: Euro IV; Power: 81kw/3600rpm; Max torque: 280Nm/2200rpm; Transmission: 5TS32; Rear axle ratio: 5T/6.167; Max speed: 105km/h; Gradeability: 25%; Turning radius: 7.38m; Ground clearance: 245mm; Leaf spring: 8/6+6; Brake: hydraulic; Steering: power steering; Tire: 7.50R16, 6+1; Fuel tank: 120L; Frame: 192 x 60 x 6 + 4 x 780mm; Oil cylinder: 2TG1-E90 x 450.",
    badge: "Forland",
    imageUrl: forlandDump3cbmImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-forland-isuzu-technology-4j28tc-4t-dump",
    name: "Forland ISUZU Technology 4J28TC 4 Ton Dump Truck",
    category: "Dump Truck",
    brand: "Forland",
    description: "4-ton dump truck using ISUZU technology 4J28TC Euro IV engine, 3000mm wheelbase, hydraulic service brakes, and 2-seat cabin.",
    spec: "Model: ISUZU TECHNOLOGY 4J28TC; Displacement: 2.771L; Rated power: 81KW; Emission: Euro IV; Overall dimensions: 5618 x 2090 x 2320mm; Box dimensions: 3500 x 1860 x 800mm; Tread front/rear: 1535/1526mm; Wheelbase: 3000mm; GVW: 7310kg; Payload: 4000kg; Seating: 2; Maximum speed: 105km/h; Maximum gradeability: 28%; Minimum turning diameter: 7.38m; Ground clearance: 245mm; Transmission: 5TS32; Rear axle: 1046; Rear axle ratio: 6.167; Tire: 7.50R16, 6+1; Steering: recirculating ball; Front suspension: 8 leaf springs, non-independent; Rear suspension: 6+6 leaf springs, non-independent; Fuel tank: 120L; Service brake: hydraulic braking; Parking brake: central drum.",
    badge: "Forland",
    imageUrl: forlandIsuzuTech4tDumpImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-forland-bj1039v3ad3-b-double-cabin-cargo",
    name: "Forland BJ1039V3AD3-B Double Cabin Cargo Truck",
    category: "Cargo Truck",
    brand: "Forland",
    description: "Double-cabin 4x2 cargo truck with 2-ton payload, 4J28TC Euro IV engine, 2800mm wheelbase, and power steering.",
    spec: "Model: BJ1039V3AD3-B; Drive form: 4x2; Driving side: left; Wheelbase: 2800mm; Overall dimensions: 5280 x 1910 x 2350mm; Cargo body internal: 2400 x 1810 x 360mm; Front/rear track: 1500/1486mm; Front/rear suspension: 1095/1385mm; Payload: 2000kg; Curb weight: 2200kg; GVW: 4200kg; Engine: 4J28TC; Displacement: 2.771L; Emission: Euro IV; Power: 81/3200; Max torque: 280Nm/1700-2200rpm; Transmission: 5TS32; Rear axle ratio: 5T/5.375; Max speed: 100km/h; Gradeability: 40%; Turning radius: 6.5m; Ground clearance: 200mm; Leaf spring: 8/6+6; Brake: hydraulic; Steering assist: power; Tire: 6.50R16, 6+1; Oil tank: 100L; Frame: 192 x 60 x 6mm.",
    badge: "Forland",
    imageUrl: forlandCargoDoubleCabinImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-forland-bj1061vdjea-rf-32t-cargo-boom",
    name: "Forland BJ1061VDJEA-RF 3.2T Cargo Boom Truck",
    category: "Special Purpose",
    brand: "Forland",
    description: "4x2 cargo boom truck with ISF3.8S4R154 Euro IV engine, 8-ton payload rating, 3800mm wheelbase, and air brakes.",
    spec: "Model: BJ1061VDJEA-RF; Drive form: 4x2; Driving side: left; Wheelbase: 3800mm; Overall dimensions: 7090 x 2170 x 2350mm; Cargo body internal: 4160 x 2060 x 550mm; Front/rear track: 1664/1630mm; Front/rear suspension: 1160/2130mm; Payload: 8000kg; Curb weight: 4750kg; GVW: 12945kg; Engine: ISF3.8S4R154; Displacement: 3.76L; Emission: Euro IV; Power: 115/2600; Max torque: 500Nm/1500rpm; Transmission: 6TS55; Rear axle ratio: 6.5T/4.875; Max speed: 80km/h; Gradeability: 25%; Turning radius: 7.38m; Ground clearance: 220mm; Leaf spring: 9/10+7; Brake: air brake; Steering assist: power steering; Tire: 8.25R16, 6+1; Oil tank: 120L; Frame: riveting 192 x 65 x 6 x 800mm.",
    badge: "Boom Truck",
    imageUrl: forlandCargoBoom32tImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-forland-14ft-17ft-cummins-cargo",
    name: "Forland 14 Footer and 17 Footer Cummins Cargo Truck",
    category: "Cargo Truck",
    brand: "Forland",
    description: "Forland Cummins cargo truck configurations for 14ft and 17ft bodies, both with ISF3.8 Euro IV power and 6TS55 transmission.",
    spec: "14 Footer model: BJ1061VDJEA-RJ; Driving type: 4x2 left-hand drive; Wheelbase: 3360mm; Overall dimensions: 6160 x 2160 x 2420mm; Cargo body: 4230 x 2060 x 400mm; Payload: 4000kg; Curb weight: 3550kg; GVW: 7945kg; Engine: ISF3.8S4R154 Euro IV; Power: 115kw/2600rpm; Max torque: 500Nm/1500rpm; Transmission: 6TS55; Rear axle ratio: 6.5T/4.875; Max speed: 93km/h; Tire: 7.50R16, 6+1; 17 Footer model: BJ1061VDJEA-RF; Wheelbase: 3800mm; Overall dimensions: 7090 x 2170 x 2350mm; Cargo body: 5160 x 2060 x 550mm; Payload: 5000kg; Curb weight: 3750kg; GVW: 8945kg; Engine: F3.8S4R154 Euro IV; Max speed: 92km/h; Tire: 8.25R16, 6+1; Shared specs: 3.76L displacement, air drum brake, power steering, 120L fuel tank, rivet frame 192 x 65 x 6mm.",
    badge: "Cargo",
    imageUrl: forlandFootersCumminsImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-forland-bj3255dlp-hh-fa-heavy-dump",
    name: "Forland BJ3255DLP-HH-FA Dump Truck",
    category: "Dump Truck",
    brand: "Forland",
    description: "6x2 heavy dump truck with 11,405kg payload, YC6J220-52 Euro V engine, air brakes, and 10.00R20 tire set.",
    spec: "Model: BJ3255DLP-HH-FA; Drive form: 6x2; Driving side: left; Wheelbase: 1800+4700mm; Overall dimensions: 10105 x 2495 x 2960mm; Cargo body internal: 7400 x 2300 x 800mm; Front/rear track: 1920/1920/1860mm; Front/rear suspension: 1280/2325mm; Payload: 11405kg; Curb weight: 14380kg; GVW: 24500kg; Engine: YC6J220-52; Displacement: 6.494L; Emission: Euro V; Power: 162/2300, 220HP; Max torque: 860Nm/1200-1800rpm; Transmission: 8JS85E; Rear axle ratio: 13T/5.286; Max speed: 80km/h; Gradeability: 19%; Turning radius: 11m; Ground clearance: 260mm; Leaf spring: 10/10/10+9; Brake: air brake; Steering assist: power; Tire: 10.00R20, 8+1; Oil tank: 180L; Frame: 284 x 75 x 8 + 5/865mm.",
    badge: "Forland",
    imageUrl: forlandDumpHeavyImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
  {
    id: "demo-forland-bj1059vcad6-s2-46ft-aerial",
    name: "Forland BJ1059VCAD6-S2 46FT Aerial Work Truck",
    category: "Special Purpose",
    brand: "Forland",
    description: "46ft aerial work truck with double-row 5-seat cab, 4J28TC Euro IV engine, air brakes, and 4x2 left-hand-drive chassis.",
    spec: "Model: BJ1059VCAD6-S2; Cab: double-row, 5 seats; Drive form: 4x2; Driving side: left; Wheelbase: 3360mm; Overall dimensions: 7150 x 2000 x 3050mm; Cargo body internal: 1530/1526; Front/rear track: 1095/1595mm; Front/rear suspension: 1080 x 620 x 1150mm; Payload: 200kg; Curb weight: 4975kg; GVW: 7840kg; Engine: 4J28TC Euro IV; Displacement: 2.77L; Power: 81/3200, 110HP; Max torque: 280Nm/1700-2200rpm; Transmission: 5TS32; Rear axle ratio: 1046C/6.167; Max speed: 90km/h; Gradeability: 25%; Turning radius: 7.2m; Ground clearance: 200mm; Leaf spring: 9/6+6; Brake: air brake; Steering assist: power; Tire: 7.00R16, 6+1; Oil tank: 100L; Frame: 192 x 60 x 6 - 780mm.",
    badge: "Aerial",
    imageUrl: forlandAerial46ftImage.src,
    createdAt: "2026-01-01T00:00:00.000Z",
    isDemo: true,
  },
]
