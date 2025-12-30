/**
 * Input Sanitization Utilities
 *
 * Provides functions to sanitize user input to prevent:
 * - Email header injection
 * - XSS attacks in email clients
 * - Control character injection
 */
import validator from 'validator'

/**
 * Sanitize email header fields to prevent header injection attacks
 * Removes newline characters (\r, \n) that could inject additional headers
 *
 * @param input - The input string to sanitize
 * @param maxLength - Optional maximum length (default: 200)
 * @returns Sanitized string safe for email headers
 */
export function sanitizeEmailHeader(input: string, maxLength: number = 200): string {
  if (!input) return ''

  return input
    .trim()
    // Remove all newline characters (\r, \n, \r\n)
    .replace(/[\r\n]/g, '')
    // Remove control characters (0x00-0x1F except space)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Limit length
    .substring(0, maxLength)
}

/**
 * Sanitize email body content
 * Escapes HTML entities and removes potentially dangerous characters
 *
 * @param input - The input string to sanitize
 * @param maxLength - Optional maximum length (default: 5000)
 * @returns Sanitized string safe for email body
 */
export function sanitizeEmailBody(input: string, maxLength: number = 5000): string {
  if (!input) return ''

  return validator
    .escape(input.trim()) // Escape HTML entities
    .substring(0, maxLength) // Limit length
}

/**
 * Sanitize all contact form fields
 *
 * @param data - Contact form data
 * @returns Sanitized contact form data
 */
export function sanitizeContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}): {
  name: string
  email: string
  subject: string
  message: string
} {
  return {
    name: sanitizeEmailHeader(data.name, 100),
    email: sanitizeEmailHeader(data.email, 254), // RFC 5321 max email length
    subject: sanitizeEmailHeader(data.subject, 200),
    message: sanitizeEmailBody(data.message, 5000)
  }
}
