import emailjs from "@emailjs/browser"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

function ensureEmailJsConfig() {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Email service is not configured. Add the EmailJS environment variables first.")
  }
}

/**
 * Send the contact form message through EmailJS.
 * @param {{ name: string, company: string, email: string, phone: string, message: string }} contact
 */
export async function sendContactMessage(contact) {
  ensureEmailJsConfig()

  return emailjs.send(serviceId, templateId, {
    from_name: contact.name,
    company: contact.company,
    reply_to: contact.email,
    phone: contact.phone,
    message: contact.message,
  }, { publicKey })
}
