import { StatusCode } from "hono/utils/http-status";

export class Exception extends Error {
  code: StatusCode;
  /**
   * @param message
   * @param code
   */
  constructor(message = "Server Exception", code: StatusCode) {
    super(message);
    this.code = code;
  }
}

export class AuthServiceError extends Error {
  code: StatusCode;
  error: any;

  /**
   * @param message
   * @param code
   */
  constructor(error: any, message = "AuthService Exception", code: StatusCode) {
    super(message);
    this.code = code;
    this.error = error;
  }
}
