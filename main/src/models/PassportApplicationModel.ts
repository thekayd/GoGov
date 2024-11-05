import { z } from "zod"

import { ApplicationFormTemplate } from "@/components/ApplicationForm/ApplicationForm"

import { Database } from "../../database.types"
import { DepartmentCenters } from "./DriversLicenseModel"
import { Profile } from "./ProfileModel"

export const PassportApplicationFormSchema = z.object({
  // Fields
  processing_center: z.string(),
  passport_type: z.string(),
  id_document: z.string().optional(),
  proof_of_address: z.string().optional(),
  passport_photo: z.string().optional(),
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

export type PassportApplicationForm = z.infer<
  typeof PassportApplicationFormSchema
>
export type PassportApplicationModel =
  Database["public"]["Tables"]["passport_applications"]["Row"]
