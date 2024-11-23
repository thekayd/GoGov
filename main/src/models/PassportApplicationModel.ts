import { z } from "zod"

import { ApplicationFormTemplate } from "@/components/ApplicationForm/ApplicationForm"

import { Database } from "../../database.types"
import { DepartmentCenters } from "./DriversLicenseModel"
import { Profile } from "./ProfileModel"

export const PassportApplicationFormSchema = z.object({
  // Fields
  processing_center: z.string(),
  passport_type: z.string(),
  id_document: z.string(),
  proof_of_address: z.string(),
  passport_photo: z.string(),
})

// Create & Ensure DB payload is valid
export function createPassportApplicationModel(
  user: Profile,
  formData: PassportApplicationForm
): Database["public"]["Tables"]["passport_applications"]["Insert"] {
  return {
    // User data
    name: user.name,
    surname: user.surname,
    address: user.address,
    gender: user.gender,
    city: user.city,
    province: user.province,
    postcode: user.postcode,
    email: user.email,
    date_of_birth: user.date_of_birth.toString(),
    id_number: user.id_number,
    phone_number: user.phone_number,

    // Fields & Images
    ...formData,
  }
}

export const PassportApplicationFormTemplate: ApplicationFormTemplate<PassportApplicationForm> =
  {
    title: "yes",
    fields: [
      {
        type: "select",
        name: "passport_type",
        label: "Passport type",
        placeholder: "Passport type",
        options: [
          "Standard Passport",
          "Emergency Passport",
          "Diplomatic Passport",
          "Official Passport",
        ],
        description: "Select your license type",
      },
      {
        type: "select",
        name: "processing_center",
        label: "Processing center",
        options: DepartmentCenters,
        placeholder: "Processing center",
        description: "Select your processing center",
      },
      {
        type: "file",
        name: "id_document",
        label: "ID Document",
      },
      {
        type: "file",
        name: "passport_photo",
        label: "Passport",
        description: "This photo must be clear and legible",
      },
      {
        type: "file",
        name: "proof_of_address",
        label: "Proof of Address",
      },
    ],
  }

export const PassportApplicationSchema = z.object({
  address: z.string().optional(),
  city: z.string().optional(),
  created_at: z.string(),
  date_of_birth: z.string().optional(),
  email: z.string().optional(),
  gender: z.string().optional(),
  id: z.number(),
  id_document: z.string().optional(),
  id_number: z.string().optional(),
  name: z.string().optional(),
  passport_photo: z.string().optional(),
  passport_type: z.string().optional(),
  phone_number: z.string().optional(),
  postcode: z.string().optional(),
  processing_center: z.string().optional(),
  proof_of_address: z.string().optional(),
  province: z.string().optional(),
  status: z.string().optional(),
  surname: z.string().optional(),
})

export type PassportApplicationForm = z.infer<
  typeof PassportApplicationFormSchema
>
export type PassportApplicationModel =
  Database["public"]["Tables"]["passport_applications"]["Row"]
export type PassportApplication = z.infer<typeof PassportApplicationSchema>
