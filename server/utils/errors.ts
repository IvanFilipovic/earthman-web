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
