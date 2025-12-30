// server/api/contact.post.ts
import validator from 'validator'
import { sanitizeContactForm } from '../utils/sanitize'

export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer()
  const config = useRuntimeConfig()

  // 🔍 DEBUG: Log the config
  console.log('🔍 Runtime Config:', {
    contactEmailRecipient: config.contactEmailRecipient,
    hasRecipient: !!config.contactEmailRecipient,
  })

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

  // 🔍 DEBUG: Check if recipient exists
  const recipientEmail = config.contactEmailRecipient
  console.log('📧 Recipient email:', recipientEmail)

  if (!recipientEmail) {
    console.error('❌ CRITICAL: No recipient email configured!')
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error: No recipient email',
    })
  }

  try {
    console.log('📨 Attempting to send to:', recipientEmail)

    // Send email using sanitized input
    await sendMail({
      from: '"Earthman Contact" <noreply@earthman.com>',
      to: recipientEmail,
      replyTo: sanitized.email,
      subject: `[Earthman Contact] ${sanitized.subject}`,
      text: `From: ${sanitized.name}\nEmail: ${sanitized.email}\n\n${sanitized.message}`,
    })

    console.log('✅ Email sent successfully')

    return { success: true }
  } catch (error: any) {
    console.error('❌ Contact form error:', error.message)
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})