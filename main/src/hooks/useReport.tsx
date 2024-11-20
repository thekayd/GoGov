"use client"

import { BursaryApplicationModel } from "@/models/BursaryModel"
import { DriversLicenseModel } from "@/models/DriversLicenseModel"
import { PassportApplicationModel } from "@/models/PassportApplicationModel"
import {
  MonthlyData,
  MonthlyDataSchema,
  Report,
  StatusData,
} from "@/models/ReportModel"
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
export function useGetApplicationMonthlyData(tableName: DatabaseTables) {
  return useQuery({
    queryKey: [`get-${tableName}-application-monthly-data`],
    queryFn: () => getApplicationMonthlyData(tableName),
  })
}
export function useGetApplicationStatusData(tableName: DatabaseTables) {
  return useQuery({
    queryKey: [`get-${tableName}-application-status-data`],
    queryFn: () => getApplicationStatusData(tableName),
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

const tableNameToFunctionName: Record<DatabaseTables, string> = {
  drivers_license_applications: "get_drivers_monthly_data",
  bursary_applications: "get_bursary_monthly_data",
  passport_applications: "get_passport_monthly_data",
  vaccination_applications: "get_vaccination_monthly_data",
  admin_profile: "",
  profile: "",
  scheduled_appointments: "",
  user_feedback: "",
  // Add more mappings as needed
}

async function getApplicationMonthlyData(
  tableName: DatabaseTables
): Promise<MonthlyData[]> {
  const functionName = tableNameToFunctionName[tableName]
  if (!functionName) {
    throw new Error(`Unsupported table name: ${tableName}`)
  }

  const db = createSupabaseBrowser()
  const { data: rawData, error } = await db.rpc(functionName)
  if (error) {
    console.log("Monthly Data Function Error: ", error)
    throw new Error(error.message)
  }

  let monthlyData: MonthlyData[] = []
  try {
    rawData.forEach((item: any) => {
      const {
        success,
        data,
        error: parsingError,
      } = MonthlyDataSchema.safeParse(item)
      if (!success) {
        console.log("Monthly Data Parsing Error: ", parsingError)
        throw new Error(parsingError.message)
      }
      monthlyData.push(data)
    })
  } catch (error: any) {
    console.log("Monthly Data Parsing Error: ", error)
    throw new Error(error?.message || "An error occurred while parsing data")
  }
  return monthlyData
}

async function getApplicationStatusData(
  tableName: DatabaseTables
): Promise<StatusData[]> {
  const db = createSupabaseBrowser()

  try {
    const data = await db
      .from(tableName)
      .select("status")
      .then((result) => {
        const statusData = result.data?.map((row) => ({
          name: row.status,
          value: 1,
        }))
        console.log("Fetched status data: ", statusData)
        if (!statusData) throw new Error("Failed to fetch status data")
        return statusData.reduce(
          (acc: { name: string; value: number }[], current) => {
            const existingStatus = acc.find(
              (status) => status.name === current.name
            )
            if (existingStatus) {
              existingStatus.value += current.value
            } else {
              acc.push(current)
            }
            return acc
          },
          []
        )
      })
    return data
  } catch (error: any) {
    console.log("Application Status Data Error: ", error)
    throw new Error(error.message)
  }
}
