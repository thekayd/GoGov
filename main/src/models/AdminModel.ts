import { z } from "zod"

import { Database } from "../../database.types"

// export const BursaryApplicationFormSchema = z.object({
// })

// Create & Ensure DB payload is valid
// export function createBursaryApplicationModel(
//   user: Profile,
//   formData: BursaryApplicationForm
// ): Database["public"]["Tables"]["bursary_applications"]["Insert"] {
//   return {
//     user_id: null,
//     // User data
//     name: user.name,
//     surname: user.surname,
//     address: user.address,
//     gender: user.gender,
//     city: user.city,
//     // province: user.province,
//     postcode: user.postcode,
//     email: user.email,
//     date_of_birth: user.date_of_birth.toString(),
//     id_number: user.id_number,
//     phone_number: user.phone_number,

//     ...formData,
//   }
// }

// export const BursaryApplicationFormTemplate: ApplicationFormTemplate<BursaryApplicationForm> =
//   {

//   }

// export type BursaryApplicationForm = z.infer<
//   typeof BursaryApplicationFormSchema
// >
export type AdminModel = Database["public"]["Tables"]["admin_profile"]["Row"]

export const AdminModelSchema = z.object({
  adminid: z.string().nullable().optional(),
  created_at: z.string().nullable().optional(),
  email: z.string().optional().nullable(),
  id: z.number().optional().nullable(),
  password: z.string().optional().nullable(),
})
export type Admin = z.infer<typeof AdminModelSchema>
