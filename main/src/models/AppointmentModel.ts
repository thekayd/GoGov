import { z } from "zod"

import { ApplicationFormTemplate } from "@/components/ApplicationForm/ApplicationForm"

import { Database } from "../../database.types"
import { DepartmentCenters } from "./DriversLicenseModel"
import { Profile } from "./ProfileModel"

export const DepartmentHours = [
  "08:00:00",
  "09:00:00",
  "10:00:00",
  "11:00:00",
  "12:00:00",
  "13:00:00",
  "14:00:00",
  "15:00:00",
  "16:00:00",
  "17:00:00",
] as const
export const DepartmentHoursOptions = [
  "08:00:00",
  "09:00:00",
  "10:00:00",
  "11:00:00",
  "12:00:00",
  "13:00:00",
  "14:00:00",
  "15:00:00",
  "16:00:00",
  "17:00:00",
]

export const isBusinessDay = (date: Date): boolean => {
  const day = date.getDay()
  return day >= 1 && day <= 5
}

export const AppointmentFormSchema = z.object({
  // Fields
  appointment_date: z.date().refine((date) => isBusinessDay(date), {
    message: "Please select a business day.",
  }),
  appointment_time: z.enum(DepartmentHours),
  reason: z.string(),
})

// Create & Ensure DB payload is valid
export function createAppointmentModel(
  user: Profile,
  formData: AppointmentForm
): Database["public"]["Tables"]["scheduled_appointments"]["Insert"] {
  return {
    // User data
    email: user.email,
    name: user.name,
    surname: user.surname,
    phone: user.phone_number,
    appointment_date: formData.appointment_date.toString(),
    appointment_time: formData.appointment_time,
    reason: formData.reason,
  }
}

export const AppointmentFormTemplate: ApplicationFormTemplate<AppointmentForm> =
  {
    title: "yes",
    fields: [
      {
        type: "date",
        name: "appointment_date",
        label: "Select a day for your Appointment",
        placeholder: "Select a day",
      },
      {
        type: "select",
        name: "appointment_time",
        options: DepartmentHoursOptions,
        label: "Select a time for your Appointment",
        placeholder: "Select a time",
      },
      {
        type: "textarea",
        name: "reason",
        label: "Select a reason for your Appointment",
        placeholder: "What's your reason?",
      },
    ],
  }

export const AppointmentSchema = z.object({
  appointment_date: z.string().optional(),
  appointment_time: z.string().optional(),
  created_at: z.string().optional(),
  email: z.string(),
  id: z.string(),
  name: z.string().optional(),
  phone: z.string().optional(),
  reason: z.string().optional(),
  status: z.string().optional(),
  surname: z.string().optional(),
  updated_at: z.string().optional(),
})

export type AppointmentForm = z.infer<typeof AppointmentFormSchema>
export type AppointmentModel =
  Database["public"]["Tables"]["scheduled_appointments"]["Row"]
export type Appointment = z.infer<typeof AppointmentSchema>
