import { z } from "zod"

import { ApplicationFormTemplate } from "@/components/ApplicationForm/ApplicationForm"

import { Database } from "../../database.types"
import { DepartmentCenters } from "./DriversLicenseModel"
import { Profile } from "./ProfileModel"

export const FeedbackFormSchema = z.object({
  // Fields
  feedback: z.string(),
  rating: z.string(),
})

// Create & Ensure DB payload is valid
export function createFeedbackModel(
  user: Profile,
  formData: FeedbackForm
): Database["public"]["Tables"]["user_feedback"]["Insert"] {
  return {
    // User data
    email: user.email,
    phone: Number(user.phone_number),
    feedback: formData.feedback,
    rating: Number(formData.rating),
  }
}

export const FeedbackFormTemplate: ApplicationFormTemplate<FeedbackForm> = {
  title: "yes",
  fields: [
    {
      type: "textarea",
      name: "feedback",
      label: "Your feedback",
      placeholder: "Write your feedback",
    },
    {
      type: "text",
      name: "rating",
      label: "Rating",
      placeholder: "Rate your experience on this matter",
    },
  ],
}

export const FeedbackSchema = z.object({
  created_at: z.string().optional(),
  email: z.string().nullable().optional(),
  feedback: z.string().nullable().optional(),
  id: z.string().optional(),
  phone: z.number().nullable().optional(),
  rating: z.number().nullable().optional(),
})

export type FeedbackForm = z.infer<typeof FeedbackFormSchema>
export type FeedbackModel =
  Database["public"]["Tables"]["passport_applications"]["Row"]
export type FeedBack = z.infer<typeof FeedbackSchema>
