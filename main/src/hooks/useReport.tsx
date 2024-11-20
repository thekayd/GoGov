"use client"

import { BursaryApplicationModel } from "@/models/BursaryModel"
import { DriversLicenseModel } from "@/models/DriversLicenseModel"
import { PassportApplicationModel } from "@/models/PassportApplicationModel"
import { Report } from "@/models/ReportModel"
import { VaccinationApplicationModel } from "@/models/VaccinationModel"
import { DatabaseTables } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"

import { createSupabaseBrowser } from "@/lib/supabase/client"

import { Database } from "../../database.types"

// T - Represents the return type aka the actual database Model's row (with "ROW")
// I - Represents the input type aka the actual input values fro the model, typed as "INSERT"

export function useGetApplicationReport<T>(tableName: DatabaseTables) {
  return useQuery({
    queryKey: [`get-${tableName}-application-report`],
    queryFn: () => getApplicationReport<T>({ tableName }),
  })
}

async function getApplicationReport<T>({
  tableName,
}: {
  tableName: DatabaseTables
}): Promise<Report> {
  const db = createSupabaseBrowser()

  // Get All the Applications for specific table
  const { data, error, status } = await db
    .from(tableName)
    .select()
    .returns<Database["public"]["Tables"][typeof tableName]["Row"][]>()

  if (error) {
    console.log(`Create ${tableName} Error: `, error.message)
    throw new Error(error.message)
  }

  // Create Report data for specific table
  let pending = 0
  let approved = 0
  let rejected = 0
  const totalApplications = data.length
  data.forEach((application: any) => {
    if (application.status === "Pending") return pending++
    if (application.status === "Approved") return approved++
    if (application.status === "Rejected") return rejected++
  })
  return {
    totalApplications: totalApplications,
    approved: approved,
    pending: pending,
    rejected: rejected,
  }
}

async function getAllUserApplications<T>({
  email,
}: {
  email: string
}): Promise<{
  bursaries: BursaryApplicationModel[]
  drivers: DriversLicenseModel[]
  passport: PassportApplicationModel[]
  vaccination: VaccinationApplicationModel[]
}> {
  const db = createSupabaseBrowser()

  // Fetch Bursaries
  const { data: bursaries, error: bursariesError } = await db
    .from("bursary_applications")
    .select()
    .eq("email", email)
    .returns<Database["public"]["Tables"]["bursary_applications"]["Row"][]>()
  const { data: drivers, error: driversError } = await db
    .from("drivers_license_applications")
    .select()
    .eq("email", email)
    .returns<
      Database["public"]["Tables"]["drivers_license_applications"]["Row"][]
    >()
  const { data: passport, error: passportError } = await db
    .from("passport_applications")
    .select()
    .eq("email", email)
    .returns<Database["public"]["Tables"]["passport_applications"]["Row"][]>()
  const { data: vaccination, error: vaccinationError } = await db
    .from("vaccination_applications")
    .select()
    .eq("email", email)
    .returns<
      Database["public"]["Tables"]["vaccination_applications"]["Row"][]
    >()

  if (driversError || bursariesError || passportError || vaccinationError) {
    const message =
      driversError?.message ||
      bursariesError?.message ||
      passportError?.message ||
      vaccinationError?.message
    console.log(`Create ${"bursary_applications"} Error: `, message)
    throw new Error(message)
  }

  return {
    bursaries: bursaries,
    drivers: drivers,
    passport: passport,
    vaccination: vaccination,
  }
}
