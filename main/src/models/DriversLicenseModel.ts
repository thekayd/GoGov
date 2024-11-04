import { z } from "zod"

import { ApplicationFormTemplate } from "@/components/application-forms/ApplicationForm"

import { Database } from "../../database.types"
import { Profile } from "./ProfileModel"

export const DepartmentCenters = [
  "Pretoria Test Centre",
  "Johannesburg Test Centre",
  "Sandton Test Centre",
  "Midrand Test Centre",
  "Centurion Test Centre",
  "Soweto Test Centre",
  "Kempton Park Test Centre",
  "Germiston Test Centre",
  "Benoni Test Centre",
  "Boksburg Test Centre",
]

export const DriversLicenseFormSchema = z.object({
  // Fields
  test_center: z.string(),
  license_category: z.string(),

  // Files
  id_document: z.string().optional(),
  proof_of_address: z.string().optional(),
  eye_test_certificate: z.string().optional(),
  passport_photo: z.string().optional(),
})

export function createDriversLicenseModel(
  user: Profile,
  formData: DriversLicenseForm
): Database["public"]["Tables"]["drivers_license_applications"]["Insert"] {
  return {
    user_id: null,

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

export const DriversLicenseFormTemplate: ApplicationFormTemplate<DriversLicenseForm> =
  {
    title: "yes",
    fields: [
      {
        type: "select",
        name: "license_category",
        label: "License Type",
        placeholder: "License Type",
        options: ["Car", "Motorcycle", "Bus", "Truck"],
        description: "Select your license type",
      },
      {
        type: "select",
        name: "test_center",
        label: "Test Center",
        options: DepartmentCenters,
        placeholder: "Test Center",
        description: "Select your test center",
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
      },
      {
        type: "file",
        name: "proof_of_address",
        label: "Proof of Address",
      },
      {
        type: "file",
        name: "eye_test_certificate",
        label: "Eye Test Certificate",
      },
    ],
  }

export type DriversLicenseForm = z.infer<typeof DriversLicenseFormSchema>
type DriversLicenseModel =
  Database["public"]["Tables"]["drivers_license_applications"]["Row"]
