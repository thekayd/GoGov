import { Result, Ok, Err } from "ts-results";
import { createClient } from "./server";
import { AuthServiceError } from "@/lib/exeptions/types";
import { StatusCode } from "hono/utils/http-status";
import { handleAuthError } from "@/lib/exeptions";
import { User } from "@supabase/supabase-js";

interface AuthServiceResponse {
  user?: User;
}

export class AuthService {
  //   As in Open Source, Errors are being handled as Values using Rust like error handling
  static async login(
    email: string,
    password: string
  ): Promise<Result<AuthServiceResponse, AuthServiceError>> {
    const supabase = createClient();

    // Supabase also adopts the "Error as Values" principle
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return Err(handleAuthError(error, error.status as StatusCode, error.message));
    }

    return Ok({});
  }

  static async signUp(
    email: string,
    password: string
  ): Promise<Result<AuthServiceResponse, AuthServiceError>> {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      return Err(handleAuthError(500, error?.status as StatusCode, error.message));
    }

    return Ok({});
  }

  static async isAuthed(): Promise<Result<AuthServiceResponse, AuthServiceError>> {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return Err(handleAuthError(error, error?.status as StatusCode, error?.message));
    }
    if (!data?.user) return Err(handleAuthError(error, 400, "Un Authenticated"));

    return Ok({});
  }

  static async getUser(): Promise<Result<AuthServiceResponse, AuthServiceError>> {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return Err(handleAuthError(error, error?.status as StatusCode, error?.message));
    }
    if (!data.user) return Err(handleAuthError(error, 400, "Un Authenticated"));
    return Ok({ user: data.user });
  }
}
