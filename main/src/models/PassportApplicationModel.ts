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
  address: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  created_at: z.string().nullable().optional(),
  date_of_birth: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  gender: z.string().nullable().optional(),
  id: z.coerce.string().nullable().optional(),
  id_document: z.string().nullable().optional(),
  id_number: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  passport_photo: z.string().nullable().optional(),
  passport_type: z.string().nullable().optional(),
  phone_number: z.string().nullable().optional(),
  postcode: z.string().nullable().optional(),
  processing_center: z.string().nullable().optional(),
  proof_of_address: z.string().nullable().optional(),
  province: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  surname: z.string().nullable().optional(),
})

export type PassportApplicationForm = z.infer<
  typeof PassportApplicationFormSchema
>
export type PassportApplicationModel =
  Database["public"]["Tables"]["passport_applications"]["Row"]
export type PassportApplication = z.infer<typeof PassportApplicationSchema>
