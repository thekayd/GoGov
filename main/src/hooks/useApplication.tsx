"use client"

import { DatabaseTables } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"

import { createSupabaseBrowser } from "@/lib/supabase/client"

import { Database } from "../../database.types"

const TABLE_NAME: DatabaseTables = "drivers_license_applications"

// T - Represents the return type aka the actual database Model's row (with "ROW")
// I - Represents the input type aka the actual input values fro the model, typed as "INSERT"
export function useCreateApplication<T, I>() {
  return useMutation({
    mutationKey: ["create-drivers-license"],
    mutationFn: createApplication<T, I>,
  })
}

async function createApplication<T, I>({
  model,
  tableName,
}: {
  model: I
  tableName: DatabaseTables
}): Promise<T> {
  const db = createSupabaseBrowser()

  // const model = createDriversLicenseModel(user, application)
  const { data, error, status } = await db
    .from(TABLE_NAME)
    .insert(model)
    .returns<Database["public"]["Tables"][typeof tableName]["Row"]>()

  console.log(error)

  if (error) {
    console.log(`Create ${tableName} Error: `, error.message)
    return Promise.reject(new Error(error.message))
  }
  return data as T
}
