import { z } from "zod"

export const ProfileModelSchema = z.object({
  name: z.string(),
  surname: z.string(),
  gender: z.string(),
  date_of_birth: z.coerce.date(),
  email: z.string(),
  phone_number: z.string(),
  id_number: z.string(),
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postcode: z.string(),
})

export type Profile = z.infer<typeof ProfileModelSchema>
