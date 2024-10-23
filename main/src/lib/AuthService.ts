import { createClient, User } from "@supabase/supabase-js"
import { StatusCode } from "hono/utils/http-status"
import { Err, Ok, Result } from "ts-results"

import { handleServiceError } from "@/lib/exeptions"
import { ServiceError } from "@/lib/exeptions/types"
import { createSupabaseServer } from "@/lib/supabase/server"

interface AuthServiceResponse {
  user?: User
}

export class AuthService {
  //   As in Open Source, Errors are being handled as Values using Rust like error handling
  static async login(
    email: string,
    password: string
  ): Promise<Result<AuthServiceResponse, ServiceError>> {
    const supabase = createSupabaseServer()

    // Supabase also adopts the "Error as Values" principle
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      return Err(
        handleServiceError(error, error.status as StatusCode, error.message)
      )
    }

    return Ok({})
  }

  static async signUp(
    email: string,
    password: string
  ): Promise<Result<AuthServiceResponse, ServiceError>> {
    const supabase = createSupabaseServer()

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      return Err(
        handleServiceError(500, error?.status as StatusCode, error.message)
      )
    }

    return Ok({})
  }
  static async signOut(): Promise<Result<AuthServiceResponse, ServiceError>> {
    const supabase = createSupabaseServer()

    const { error } = await supabase.auth.signOut()

    if (error) {
      return Err(
        handleServiceError(500, error?.status as StatusCode, error.message)
      )
    }

    return Ok({})
  }

  static async getUser(): Promise<Result<AuthServiceResponse, ServiceError>> {
    const supabase = createSupabaseServer()

    const { data, error } = await supabase.auth.getUser()
    if (error) {
      return Err(
        handleServiceError(error, error?.status as StatusCode, error?.message)
      )
    }
    if (!data.user)
      return Err(handleServiceError(error, 400, "Un Authenticated"))
    return Ok({ user: data.user })
  }
}
