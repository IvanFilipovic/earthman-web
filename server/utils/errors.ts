/**
 * Error Handling Utilities
 * Provides type-safe error handling helpers
 */

/**
 * Type guard to check if error is an object with a message
 */
export function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}

/**
 * Type guard to check if error is an HTTP error with status
 */
export function isHTTPError(error: unknown): error is { statusCode: number; statusMessage?: string; data?: unknown } {
  return (
    typeof error === 'object' &&
    error !== null &&
    ('statusCode' in error || 'status' in error)
  )
}

/**
 * Get error message from unknown error type
 */
export function getErrorMessage(error: unknown): string {
  if (isErrorWithMessage(error)) {
    return error.message
  }

  if (typeof error === 'string') {
    return error
  }

  return 'An unknown error occurred'
}

/**
 * Get HTTP status code from unknown error type
 */
export function getErrorStatus(error: unknown): number {
  if (isHTTPError(error)) {
    return (error as any).statusCode || (error as any).status || 500
  }

  return 500
}

/**
 * Sanitize error message for client exposure
 * Prevents information disclosure by returning generic messages
 * Logs detailed error server-side for debugging
 *
 * @param error - The error to sanitize
 * @param fallbackMessage - Generic message to show to client
 * @param context - Context for server-side logging
 * @returns Safe error message for client
 */
export function getSafeErrorMessage(
  error: unknown,
  fallbackMessage: string,
  context?: string
): string {
  // Log detailed error server-side for debugging
  if (context) {
    console.error(`[${context}] Error details:`, error)
  }

  // Only return generic message to client
  // Never expose backend error details, stack traces, or internal data
  return fallbackMessage
}

/**
 * Get safe HTTP status code from error
 * Maps backend errors to appropriate client-facing status codes
 */
export function getSafeStatusCode(error: unknown): number {
  const status = getErrorStatus(error)

  // Map backend errors to safe status codes
  // 5xx errors from backend become generic 500
  // 4xx errors are preserved (they're client errors)
  if (status >= 500) {
    return 500
  }

  // Preserve client error codes (400-499)
  if (status >= 400 && status < 500) {
    return status
  }

  // Default to 500 for unknown errors
  return 500
}
