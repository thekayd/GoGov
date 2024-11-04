"use client"

import React, { createContext, ReactNode, useContext } from "react"
import { Profile, ProfileModelSchema } from "@/models/ProfileModel"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { useCreateProfile, useShowProfile } from "@/hooks/useProfile"

// import { UserService } from "@/lib/ProfileModel"

interface ProfileFormContextType {
  error: Error | null
  isPending: boolean
  onSubmit: SubmitHandler<Profile>
  form: ReturnType<typeof useForm<Profile>>
}

const ProfileFormContext = createContext<ProfileFormContextType | undefined>(
  undefined
)

export const ProfileFormProvider: React.FC<{
  children: ReactNode
  disabled?: boolean
}> = ({ children, disabled }) => {
  const {
    data: profile,
    error: profileError,
    isPending: profilePending,
  } = useShowProfile()
  const { mutate, isPending, error, data } = useCreateProfile({
    onSuccess: () => {
      // form.reset(data)
      toast.success("Profile created successfully")
    },
    onError: () => {
      toast.error(`Profile creating failed - ${error?.message}`)
    },
  })

  const form = useForm<Profile>({
    values: profile,
    disabled: disabled,
    resolver: zodResolver(ProfileModelSchema),
  })

  if (error) console.log("Profile Error: ", error)

  const onSubmit = (values: Profile) => {
    mutate(values)
    console.log("Profile: ", data)
  }

  return (
    <ProfileFormContext.Provider
      value={{ form, onSubmit, isPending: isPending || profilePending, error }}
    >
      {children}
    </ProfileFormContext.Provider>
  )
}

export const useProfileForm = () => {
  const context = useContext(ProfileFormContext)
  if (!context) {
    throw new Error("useProfileForm must be used within a ProfileFormProvider")
  }
  return context
}
