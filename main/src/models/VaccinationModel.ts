import { z } from "zod"

import { ApplicationFormTemplate } from "@/components/ApplicationForm/ApplicationForm"

import { Database } from "../../database.types"
import { DepartmentCenters } from "./DriversLicenseModel"
import { Profile } from "./ProfileModel"

export const VaccinationApplicationFormSchema = z.object({
  // Fields
  vaccination_center: z.string(),
  vaccine_type: z.string(),
})

// Create & Ensure DB payload is valid
export function createVaccinationApplicationModel(
  user: Profile,
  formData: VaccinationApplicationForm
): Database["public"]["Tables"]["vaccination_applications"]["Insert"] {
  return {
    // User data
    name: user.name,
    surname: user.surname,
    address: user.address,
    gender: user.gender,
    city: user.city,
    // province: user.province,
    postcode: user.postcode,
    email: user.email,
    date_of_birth: user.date_of_birth.toString(),
    id_number: user.id_number,
    phone_number: user.phone_number,

    ...formData,
  }
}

export const VaccinationApplicationFormTemplate: ApplicationFormTemplate<VaccinationApplicationForm> =
  {
    title: "yes",
    fields: [
      {
        type: "select",
        name: "vaccine_type",
        label: "Vaccine type",
        placeholder: "Vaccine type",
        options: ["Pfizer", "Moderna", "Johnson & Johnson", "AstraZeneca"],
        description: "Select your vaccine type",
      },
      {
        type: "select",
        name: "vaccination_center",
        label: "Vaccination center",
        options: DepartmentCenters,
        placeholder: "Vaccination center",
        description: "Select your Vaccination center",
      },
    ],
  }

export const VaccinationApplicationSchema = z.object({
  address: z.string().optional(),
  city: z.string().optional(),
  created_at: z.string(),
  date_of_birth: z.string().optional(),
  email: z.string().optional(),
  gender: z.string().optional(),
  id: z.number(),
  id_number: z.string().optional(),
  name: z.string().optional(),
  phone_number: z.string().optional(),
  postcode: z.string().optional(),
  status: z.string().optional(),
  surname: z.string().optional(),
  user_id: z.string().optional(),
  vaccination_center: z.string().optional(),
  vaccine_type: z.string().optional(),
})

export type VaccinationApplicationForm = z.infer<
  typeof VaccinationApplicationFormSchema
>
export type VaccinationApplicationModel =
  Database["public"]["Tables"]["vaccination_applications"]["Row"]
export type VaccinationApplication = z.infer<
  typeof VaccinationApplicationSchema
>
