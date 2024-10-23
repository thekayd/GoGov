"use server"

import { DriversLicenseService } from "@/lib/ApplicationService"
import { createSupabaseServer } from "@/lib/supabase/server"

export async function getDriversLicenseApplications() {
  // Authenticate request
  // Get Applications
  const res = await DriversLicenseService.getAll()
  if (res.err) throw new Error(res.val.message)

  return res.val
}
