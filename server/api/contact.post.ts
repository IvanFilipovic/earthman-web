// server/api/contact.post.ts
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

  // Validation
  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required',
    })
  }

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

    // Send email
    await sendMail({
      from: '"Earthman Contact" <noreply@earthman.com>',
      to: recipientEmail, // Use the variable
      replyTo: email,
      subject: `[Earthman Contact] ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
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