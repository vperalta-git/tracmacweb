export function getApiErrorMessage(error: unknown, fallback: string) {
  if (!(error instanceof Error)) {
    return fallback
  }

  const message = error.message
  const lowerMessage = message.toLowerCase()

  if (message.includes("MONGODB_URI")) {
    return "MongoDB is not configured on this deployment. Add MONGODB_URI and MONGODB_DB in your hosting environment variables, then redeploy."
  }

  if (
    lowerMessage.includes("ssl") ||
    lowerMessage.includes("tls") ||
    lowerMessage.includes("server selection") ||
    lowerMessage.includes("querysrv") ||
    lowerMessage.includes("enotfound") ||
    lowerMessage.includes("econnrefused") ||
    lowerMessage.includes("authentication failed")
  ) {
    return "Unable to connect to MongoDB. Check your hosting environment variables and MongoDB Atlas Network Access settings, then redeploy."
  }

  return message || fallback
}
