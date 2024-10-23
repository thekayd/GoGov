import { DatabaseTables } from "@/types"
import { StatusCode } from "hono/utils/http-status"
import { Err, Ok, Result } from "ts-results"

import { Tables } from "../../database.types"
import { handleServiceError } from "./exeptions"
import { ServiceError } from "./exeptions/types"
import { createSupabaseServer } from "./supabase/server"

interface DriversLicenseServiceResponse {
  applications: Tables<"drivers_license_applications">[]
}

export class DriversLicenseService {
  static TableName: DatabaseTables = "drivers_license_applications"

  /**
   * Crud operations for Drivers License Applications
   */
  static async getAll(): Promise<
    Result<DriversLicenseServiceResponse, ServiceError>
  > {
    const db = createSupabaseServer()
    const { data, error, status } = await db
      .from(this.TableName)
      .select()
      .returns<Tables<"drivers_license_applications">[]>()

    if (error || !data || data === null) {
      console.log(error)
      return Err(
        handleServiceError(error, status as StatusCode, error?.message)
      )
    }

    return Ok({ applications: data })
  }
}
