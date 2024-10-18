import { HTTPException } from "hono/http-exception";
import { StatusCode } from "hono/utils/http-status";
import { AuthServiceError, Exception } from "./types";

// export const handleAPIError = (error: any, status?: StatusCode, message?: string) => {
//   if (error instanceof Exception) {
//     const errorResponse = makeErrorResponse(error.message);
//     return new HTTPException(error.code || status, {
//       message: errorResponse.message,
//       cause: errorResponse,
//     });
//   }
//   const errorResponse = makeErrorResponse(message || "Internal Server Error");
//   return new HTTPException(error.code || status, {
//     message: errorResponse.message,
//     cause: errorResponse,
//   });
// };

// Handle Auth errors
export const handleAuthError = (
  error: any,
  code?: StatusCode,
  message?: string
): AuthServiceError => {
  if (error instanceof AuthServiceError) {
    return error;
  }

  //   If it's an Bubble up exception
  if (error instanceof Exception) {
    return new AuthServiceError(error, message, code || 500);
  }

  return new AuthServiceError(error, message, code || 500);
};