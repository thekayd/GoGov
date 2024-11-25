"use client"

import { BursaryApplicationModel } from "@/models/BursaryModel"
import { DriversLicenseModel } from "@/models/DriversLicenseModel"
import { PassportApplicationModel } from "@/models/PassportApplicationModel"
import { VaccinationApplicationModel } from "@/models/VaccinationModel"
import { DatabaseTables } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"

import { createSupabaseBrowser } from "@/lib/supabase/client"

import { Database } from "../../../database.types"
import ModelTable from "../DataTable/model-table"

// T - Represents the return type aka the actual database Model's row (with "ROW")
// I - Represents the input type aka the actual input values fro the model, typed as "INSERT"
export function useCreateApplication<T, I>() {
  return useMutation({
    mutationKey: ["create-application"],
    mutationFn: async (params: { model: I; tableName: DatabaseTables }) =>
      await createApplication<T, I>(params),
  })
}

export function useGetApplications<T>(tableName: DatabaseTables) {
  return useQuery({
    queryKey: [`get-${tableName}-applications`],
    queryFn: () => getApplications<T>({ tableName }),
  })
}

export function useGetUserApplications<T>(
  tableName: DatabaseTables,
  email: string
) {
  return useQuery({
    queryKey: [`get-users-${tableName}-applications`],
    queryFn: () => getUserApplications<T>({ email, tableName }),
  })
}
export function useGetAllUserApplications<T>(email: string) {
  return useQuery({
    queryKey: [`get-all-user-applications`],
    queryFn: () => getAllUserApplications<T>({ email }),
  })
}
export function useUpdateApplication<T>() {
  return useMutation({
    mutationKey: ["update-application"],
    mutationFn: updateApplication<T>,
  })
}
export function useGetUserApplication<T>(
  tableName: DatabaseTables,
  email: string,
  applicationId: string
) {
  return useQuery({
    queryKey: [`get-application`],
    queryFn: () => getUserApplication<T>({ tableName, email, applicationId }),
  })
}

export async function createApplication<T, I>({
  model,
  tableName,
}: {
  model: I
  tableName: DatabaseTables
}): Promise<T> {
  const db = createSupabaseBrowser()

  // const model = createDriversLicenseModel(user, application)
  const { data, error, status } = await db
    .from(tableName)
    .upsert(model)
    .select()
    .returns<Database["public"]["Tables"][typeof tableName]["Row"][]>()

  console.log(data)

  if (error) {
    console.error(`Create ${tableName} Error: `, error.message)
    // throw new Error(error.message)
    return Promise.reject(error.message)
  }

  if (data.length === 0) return Promise.reject("404")
  return data[0] as T
}

async function getApplications<T>({
  tableName,
}: {
  tableName: DatabaseTables
}): Promise<T[]> {
  const db = createSupabaseBrowser()

  // const model = createDriversLicenseModel(user, application)
  const { data, error, status } = await db
    .from(tableName)
    .select()
    .returns<Database["public"]["Tables"][typeof tableName]["Row"][]>()

  console.log(error)

  if (error) {
    console.log(`Create ${tableName} Error: `, error.message)
    throw new Error(error.message)
  }
  return data as T[]
}

async function updateApplication<T>({
  id,
  newStatus,
  tableName,
}: {
  id: string
  newStatus: string
  tableName: DatabaseTables
}): Promise<T> {
  const db = createSupabaseBrowser()

  // const model = createDriversLicenseModel(user, application)
  const { data, error, status } = await db
    .from(tableName)
    .update({ status: newStatus })
    .eq("id", id)
    .returns<Database["public"]["Tables"][typeof tableName]["Row"]>()

  console.log(error)

  if (error) {
    console.log(`Create ${tableName} Error: `, error.message)
    throw new Error(error.message)
  }
  return data as T
}

async function getUserApplications<T>({
  email,
  tableName,
}: {
  email: string
  tableName: DatabaseTables
}) {
  const db = createSupabaseBrowser()

  // const model = createDriversLicenseModel(user, application)
  const { data, error, status } = await db
    .from(tableName)
    .select()
    .eq("email", email)
    .returns<Database["public"]["Tables"][typeof tableName]["Row"][]>()

  console.log(error)

  if (error) {
    console.log(`Create ${tableName} Error: `, error.message)
    throw new Error(error.message)
  }
  return data as T[]
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

async function getUserApplication<T>({
  email,
  tableName,
  applicationId,
}: {
  email: string
  applicationId: string
  tableName: DatabaseTables
}) {
  const db = createSupabaseBrowser()

  // const model = createDriversLicenseModel(user, application)
  const { data, error, status } = await db
    .from(tableName)
    .select()
    .eq("id", applicationId)
    .eq("email", email)
    .returns<Database["public"]["Tables"][typeof tableName]["Row"][]>()

  console.log(error)

  if (error) {
    console.log(`Create ${tableName} Error: `, error.message)
    throw new Error(error.message)
  }
  if (data.length === 0) throw new Error("404")
  return data as T[]
}
