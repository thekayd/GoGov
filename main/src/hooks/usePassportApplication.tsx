"use client"

import { DriversLicenseModel } from "@/models/DriversLicenseModel"
import { PassportApplicationModel } from "@/models/PassportApplicationModel"
import { Profile } from "@/models/ProfileModel"
import { User } from "@supabase/supabase-js"
import { useMutation, useQuery } from "@tanstack/react-query"

import { env } from "@/env.mjs"
import { createSupabaseBrowser } from "@/lib/supabase/client"

export function useCreatePassportApplication({
  onSuccess,
  onError,
}: {
  onSuccess: () => void
  onError: () => void
}) {
  return useMutation({
    onError: onError,
    onSuccess: onSuccess,
    mutationKey: ["profile-create"],
    mutationFn: async (application: PassportApplicationModel) => {
      const db = createSupabaseBrowser()
      const { data, error, status } = await db
        .from("")
        .insert(application)
        .returns<DriversLicenseModel>()

      if (error) {
        console.log("Profile Error: ", error)
        return Promise.reject(new Error(error.message))
      }
      return data
    },
  })
}
