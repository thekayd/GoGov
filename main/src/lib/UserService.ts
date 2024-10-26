import { DatabaseTables } from "@/types"
import { StatusCode } from "hono/utils/http-status"
import { Err, Ok, Result } from "ts-results"

import { UserInfoForm } from "@/app/dashboard/profile/(components)/UserInfoForm"
import { userInfoFormSchema } from "@/app/dashboard/profile/(components)/UserInfoFormContext"

import { Tables } from "../../database.types"
import { handleServiceError } from "./exeptions"
import { ServiceError } from "./exeptions/types"
import { createSupabaseServer } from "./supabase/server"

interface DriversLicenseServiceResponse {
  userInfo: UserInfoForm
}

export class UserService {
  static TableName: DatabaseTables = "users"

  /**
   * Crud operations for Drivers License Applications
   */
  static async getUsersInfo(
    email: string
  ): Promise<Result<DriversLicenseServiceResponse, ServiceError>> {
    const db = createSupabaseServer()
    const { data, error, status } = await db
      .from(this.TableName)
      .select()
      .eq("email", email)
      .returns<UserInfoForm>()

    if (error || !data || data === null) {
      console.log(error)
      return Err(
        handleServiceError(error, status as StatusCode, error?.message)
      )
    }

    return Ok({ userInfo: data })
  }

  static async create(
    userPayload: UserInfoForm
  ): Promise<Result<DriversLicenseServiceResponse, ServiceError>> {
    const db = createSupabaseServer()
    const { data, error, status } = await db
      .from(this.TableName)
      .insert([userPayload])
      .returns<UserInfoForm>()

    if (error || !data || data === null) {
      console.log(error)
      return Err(
        handleServiceError(error, status as StatusCode, error?.message)
      )
    }

    return Ok({ userInfo: data })
  }
}
