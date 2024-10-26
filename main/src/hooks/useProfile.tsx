"use client"

import { Profile } from "@/models/ProfileModel"
import { User } from "@supabase/supabase-js"
import { useMutation, useQuery } from "@tanstack/react-query"

import { createSupabaseBrowser } from "@/lib/supabase/client"

export function useShowProfile() {
  return useQuery({
    queryKey: ["profile-show"],
    queryFn: async () => {
      const db = createSupabaseBrowser()
      const user = await db.auth.getUser()
      const email = user.data.user?.email

      const { data, error, status } = await db
        .from("profile")
        .select()
        .eq("email", email)
        .returns<Profile[]>()

      if (error) {
        console.log("Profile Error: ", error)
        return Promise.reject(new Error("Oh no!"))
      }

      return data[0]
    },
  })
}

export function useCreateProfile({
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
    mutationFn: async (profile: Profile) => {
      const db = createSupabaseBrowser()
      const { data, error, status } = await db
        .from("profile")
        .upsert(profile)
        .returns<Profile>()

      if (error) {
        console.log("Profile Error: ", error)
        return Promise.reject(new Error("Oh no!"))
      }
      return data
    },
  })
}
