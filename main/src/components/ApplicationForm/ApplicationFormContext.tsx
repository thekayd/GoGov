"use client"

import { profile } from "console"
import React, { createContext, ReactNode, useCallback, useContext } from "react"
import { useRouter } from "next/navigation"
import router from "next/router"
import { DriversLicenseForm } from "@/models/DriversLicenseModel"
import { Profile, ProfileModelSchema } from "@/models/ProfileModel"
import { DatabaseTables } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z, ZodObject } from "zod"

import { useCreateProfile, useShowProfile } from "@/hooks/useProfile"

import { Database } from "../../../database.types"
import { useCreateApplication } from "./useApplication"
import { useUploadFile } from "./useSupaStorage"

/**
 * This component provides a context for application forms.
 * It acts as a controller for submitting applications to the database.
 * It handles form validation, submission, error handling, and user feedback.
 * It also provides access to the current user's profile data.
 *
 * This component is designed to be reusable for any application form that needs to be submitted to the database.
 * It takes the following props:
 * - `table_name`: The name of the table in the database to which the application will be submitted.
 * - `modelFormSchema`: The Zod schema for the application form.
 * - `createApplicationModel`: A function that takes the user's profile data and the form data and returns an object that can be inserted into the database.
 *
 * The component provides the following context values:
 * - `isApplicationPending`: A boolean indicating whether an application is currently being submitted.
 * - `onSubmit`: A function that handles the submission of the application form.
 * - `form`: The `useForm` object from `react-hook-form`, which provides access to the form's state and methods.
 */
interface ApplicationFormContextType {
  isApplicationPending: boolean
  onSubmit: SubmitHandler<z.infer<ModelFormSchema>>
  form: ReturnType<typeof useForm<any>>
  handleFileUpload: (fieldName: string, file: File) => void
}

type ModelFormSchema = ZodObject<any>

const ApplicationFormContext = createContext<
  ApplicationFormContextType | undefined
>(undefined)

export const ApplicationFormProvider: React.FC<{
  table_name: DatabaseTables
  children: ReactNode
  modelFormSchema: ModelFormSchema
  createApplicationModel: (profile: Profile, formData: any) => any
}> = ({ children, modelFormSchema, createApplicationModel, table_name }) => {
  const { data: profile } = useShowProfile()
  const router = useRouter()
  const form = useForm<z.infer<typeof modelFormSchema>>({
    resolver: zodResolver(modelFormSchema),
  })

  const {
    data,
    isPending: isApplicationPending,
    error: applicationError,
    mutate: createApplication,
  } = useCreateApplication<
    Database["public"]["Tables"][typeof table_name]["Row"],
    Database["public"]["Tables"][typeof table_name]["Insert"]
  >()
  const {
    mutate: uploadFile,
    error: uploadError,
    data: uploadedFile,
  } = useUploadFile()

  console.log("Form: ", form.getValues())

  const onSubmit = useCallback(
    (values: z.infer<typeof modelFormSchema>) => {
      if (!profile) {
        toast.error("Please Login first!")
        router.push("/auth")
        return
      }

      console.log("Submitting Values: ", values)

      const applicationModel = createApplicationModel(
        profile,
        values
      ) as Database["public"]["Tables"][typeof table_name]["Insert"]

      toast.promise(
        async () => {
          createApplication({
            model: applicationModel,
            tableName: table_name,
          })
          if (applicationError) {
            console.log("Submit Error: ", data)
            toast.error(
              `Oops! Something went wrong. Please try again. - ${applicationError?.message}`
            )
            return Promise.reject(applicationError?.message)
          }
        },
        {
          loading: "Submitting Application...",
          success: (res) => {
            console.log("Submit Response: ", data, res)
            return `Thank you! Your application is successfully submitted. Keep an eye on your email.`
          },
          error: (err) => {
            console.log("Submit Error: ", data)
            return `Oops! Something went wrong. Please try again. - ${err}`
          },
        }
      )
    },
    [profile]
  )

  const handleFileUpload = useCallback(
    (fieldName: string, file: File) => {
      toast.promise(
        async () => {
          uploadFile({
            file: file,
            fieldName: fieldName,
            tableName: table_name,
          })
          if (uploadError) {
            console.log("Uploading Error: ", uploadError)
            toast.error(
              `Oops! Something went wrong when Uploading your File. Please try again. - ${uploadError?.message}`
            )
            return Promise.reject(uploadError?.message)
          }
        },
        {
          loading: "Uploading file...",
          success: (res) => {
            form.setValue(fieldName, uploadedFile)
            console.log("Upload Response: ", uploadedFile, res)
            return `Your file is successfully uploaded.`
          },
          error: (err) => {
            console.log("Submit Error: ", uploadError)
            return `Oops! Something went wrong. Please try again.`
          },
        }
      )
    },
    [uploadedFile, form, uploadError]
  )

  return (
    <ApplicationFormContext.Provider
      value={{
        form,
        onSubmit,
        isApplicationPending,
        handleFileUpload,
      }}
    >
      {children}
    </ApplicationFormContext.Provider>
  )
}

export const useApplicationForm = () => {
  const context = useContext(ApplicationFormContext)
  if (!context) {
    throw new Error(
      "useApplicationForm must be used within a ApplicationFormProvider"
    )
  }
  return context
}
