// server/api/contact.post.ts
import validator from 'validator'
import { sanitizeContactForm } from '../utils/sanitize'

export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer()
  const config = useRuntimeConfig()

  const body = await readBody(event)
  const { name, email, subject, message } = body

  // Validate required fields exist
  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required',
    })
  }

  // Validate field types (must be strings)
  const fields = { name, email, subject, message }
  for (const [fieldName, fieldValue] of Object.entries(fields)) {
    if (typeof fieldValue !== 'string') {
      throw createError({
        statusCode: 400,
        statusMessage: `Field '${fieldName}' must be a string`,
      })
    }
    if (fieldValue.trim().length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: `Field '${fieldName}' cannot be empty or whitespace only`,
      })
    }
  }

  // Validate maximum lengths (before sanitization)
  if (name.length > 100) {
    throw createError({ statusCode: 400, statusMessage: 'Name is too long (max 100 characters)' })
  }
  if (email.length > 254) {
    throw createError({ statusCode: 400, statusMessage: 'Email is too long (max 254 characters)' })
  }
  if (subject.length > 200) {
    throw createError({ statusCode: 400, statusMessage: 'Subject is too long (max 200 characters)' })
  }
  if (message.length > 5000) {
    throw createError({ statusCode: 400, statusMessage: 'Message is too long (max 5000 characters)' })
  }

  // Email validation using validator library
  if (!validator.isEmail(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address',
    })
  }

  // Sanitize all input to prevent email injection and XSS
  const sanitized = sanitizeContactForm({
    name,
    email,
    subject,
    message
  })

  const recipientEmail = config.contactEmailRecipient

  if (!recipientEmail) {
    console.error('❌ CRITICAL: No recipient email configured!')
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error: No recipient email',
    })
  }

  try {
    // Send email using sanitized input
    await sendMail({
      from: '"Earthman Contact" <noreply@earthman.com>',
      to: recipientEmail,
      replyTo: sanitized.email,
      subject: `[Earthman Contact] ${sanitized.subject}`,
      text: `From: ${sanitized.name}\nEmail: ${sanitized.email}\n\n${sanitized.message}`,
    })

    return { success: true }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email'
    console.error('❌ Contact form error:', errorMessage)
    throw createError({
      statusCode: 500,
      statusMessage: errorMessage,
    })
  }
})