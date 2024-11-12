import { z } from "zod"

import { ApplicationFormTemplate } from "@/components/ApplicationForm/ApplicationForm"

import { Database } from "../../database.types"
import { DepartmentCenters } from "./DriversLicenseModel"
import { Profile } from "./ProfileModel"

export const BursaryApplicationFormSchema = z.object({
  // Fields
  // Course info
  institution_name: z.string(),
  course_of_study: z.string(),
  study_year: z.string(),
  total_course_duration: z.string(),
  academic_achievements: z.string(),

  // Tuition
  annual_tuition_fee: z.string(),
  financial_need_statement: z.string(),
  other_funding_sources: z.string().optional(),
})

// Create & Ensure DB payload is valid
export function createBursaryApplicationModel(
  user: Profile,
  formData: BursaryApplicationForm
): Database["public"]["Tables"]["bursary_applications"]["Insert"] {
  return {
    user_id: null,
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

export const BursaryApplicationFormTemplate: ApplicationFormTemplate<BursaryApplicationForm> =
  {
    title: "yes",
    fields: [
      {
        type: "text",
        name: "institution_name",
        label: "Institution",
        placeholder: "Institution name",
      },
      {
        type: "text",
        name: "course_of_study",
        label: "Course of Study",
        placeholder: "Course name",
      },
      {
        type: "text",
        name: "study_year",
        label: "Year of study",
        placeholder: "Year the study begins",
      },
      {
        type: "number",
        name: "total_course_duration",
        label: "Course duration (years)",
        placeholder: "The total duration of the course",
      },
      {
        type: "textarea",
        name: "academic_achievements",
        label: "Academic achievements",
        placeholder: "Your academic achievements",
      },
      {
        type: "number",
        name: "annual_tuition_fee",
        label: "Annual tuition fee",
      },
      {
        type: "textarea",
        name: "financial_need_statement",
        label: "Financial need statement",
        placeholder: "Indicate why you need finical support",
      },
      {
        type: "textarea",
        name: "other_funding_sources",
        label: "Other funding sources",
        placeholder: "Indicate any other funding sources",
      },
    ],
  }

export type BursaryApplicationForm = z.infer<
  typeof BursaryApplicationFormSchema
>
export type BursaryApplicationModel =
  Database["public"]["Tables"]["bursary_applications"]["Row"]

export const BursaryApplicationSchema = z.object({
  academic_achievements: z.string().optional(),
  address: z.string().optional(),
  annual_tuition_fee: z.string().optional(),
  city: z.string().optional(),
  course_of_study: z.string().optional(),
  created_at: z.string(),
  date_of_birth: z.string().optional(),
  email: z.string().optional(),
  financial_need_statement: z.string().optional(),
  gender: z.string().optional(),
  id: z.number(),
  id_number: z.string().optional(),
  institution_name: z.string().optional(),
  name: z.string().optional(),
  other_funding_sources: z.string().optional(),
  phone_number: z.string().optional(),
  postcode: z.string().optional(),
  province: z.string().optional(),
  status: z.string().optional(),
  study_year: z.string().optional(),
  surname: z.string().optional(),
  total_course_duration: z.string().optional(),
  user_id: z.string().optional(),
})
export type BursaryApplication = z.infer<typeof BursaryApplicationSchema>
