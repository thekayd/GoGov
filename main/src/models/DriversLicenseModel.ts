import { z } from "zod"

import { ApplicationFormTemplate } from "@/components/ApplicationForm/ApplicationForm"

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
  id_document: z.string(),
  proof_of_address: z.string(),
  eye_test_certificate: z.string(),
  passport_photo: z.string(),
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

export const DriversLicenseSchema = z.object({
  address: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  created_at: z.string().nullable().optional(),
  date_of_birth: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  eye_test_certificate: z.string().nullable().optional(),
  gender: z.string().nullable().optional(),
  id: z.string(),
  id_document: z.string().nullable().optional(),
  id_number: z.string().nullable().optional(),
  license_category: z.string().nullable().optional(),
  name: z.string(),
  passport_photo: z.string().nullable().optional(),
  phone_number: z.string().nullable().optional(),
  postcode: z.string().nullable().optional(),
  proof_of_address: z.string().nullable().optional(),
  province: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  surname: z.string().nullable().optional(),
  test_center: z.string().nullable().optional(),
  user_id: z.string().nullable().optional(),
})

export type DriversLicenseForm = z.infer<typeof DriversLicenseFormSchema>
export type DriversLicenseModel =
  Database["public"]["Tables"]["drivers_license_applications"]["Row"]
export type DriversLicenseApplication = z.infer<typeof DriversLicenseSchema>
