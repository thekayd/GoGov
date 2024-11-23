"use client"

import { BursaryApplicationModel } from "@/models/BursaryModel"
import { DriversLicenseModel } from "@/models/DriversLicenseModel"
import { PassportApplicationModel } from "@/models/PassportApplicationModel"
import { VaccinationApplicationModel } from "@/models/VaccinationModel"
import { DatabaseTables } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"

import { env } from "@/env.mjs"
import { createSupabaseBrowser } from "@/lib/supabase/client"

import { Database } from "../../../database.types"

// T - Represents the return type aka the actual database Model's row (with "ROW")
// I - Represents the input type aka the actual input values fro the model, typed as "INSERT"
export function useUploadFile() {
  return useMutation({
    mutationKey: ["file-upload"],
    mutationFn: uploadToStorage,
  })
}

async function uploadToStorage({
  file,
  fieldName,
  tableName,
}: {
  file: File
  fieldName: string
  tableName: DatabaseTables
}): Promise<string> {
  const supabase = createSupabaseBrowser()

  const { data: user, error: userError } = await supabase.auth.getUser()
  if (userError) {
    console.log("Unauthed Error: ", userError)
    throw new Error(userError.message)
  }
  const { data, error } = await supabase.storage
    .from(env.NEXT_PUBLIC_BUCKET_NAME)
    .upload(
      `${tableName}/${user.user.id}/${fieldName.toLowerCase()}-${file.name}`,
      file,
      {
        cacheControl: "3600",
        upsert: true,
      }
    )
  if (error) {
    console.log(`Upload File Error ${tableName} Error: `, error.message)
    throw new Error(error.message)
  }

  const { data: fileUrl } = await supabase.storage
    .from(env.NEXT_PUBLIC_BUCKET_NAME)
    .getPublicUrl(data.path, { download: true })

  return fileUrl.publicUrl
}
