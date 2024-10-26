import React, { createContext, ReactNode, useContext } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"

import { Tables } from "../../../../../database.types"

export const userInfoFormSchema = z.object({
  name: z.string(),
  surname: z.string(),
  gender: z.string(),
  date_of_birth: z.coerce.date(),
  email: z.string(),
  phone_number: z.string(),
  id_number: z.string(),
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postcode: z.string(),
})

export type UserInfoForm = z.infer<typeof userInfoFormSchema>

interface UserInfoFormContextType {
  form: ReturnType<typeof useForm<UserInfoForm>>
  onSubmit: SubmitHandler<UserInfoForm>
  setDefaultValues: (values: UserInfoForm) => void
}

const UserInfoFormContext = createContext<UserInfoFormContextType | undefined>(
  undefined
)

export const UserInfoFormProvider: React.FC<{
  children: ReactNode
  defaultValue?: UserInfoForm
}> = ({ children, defaultValue }) => {
  const form = useForm<UserInfoForm>({
    resolver: zodResolver(userInfoFormSchema),
    defaultValues: defaultValue,
  })

  const onSubmit: SubmitHandler<UserInfoForm> = (values) => {
    try {
      console.log(values)
      // Handle successful submission (e.g., show toast)
    } catch (error) {
      console.error("Form submission error", error)
      // Handle error (e.g., show error toast)
    }
  }

  const setDefaultValues = (values: UserInfoForm) => {
    form.reset(values)
  }

  return (
    <UserInfoFormContext.Provider value={{ form, onSubmit, setDefaultValues }}>
      {children}
    </UserInfoFormContext.Provider>
  )
}

export const useUserInfoForm = () => {
  const context = useContext(UserInfoFormContext)
  if (!context) {
    throw new Error(
      "useUserInfoForm must be used within a UserInfoFormProvider"
    )
  }
  return context
}
