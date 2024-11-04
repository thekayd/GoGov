import { z } from "zod"

export const PassportApplicationModelSchema = z.object({
    passport_type: z.string(),
    identity_document: z.string(),
    passport_photo: z.string(),
    proof_of_address: z.string(),
  email: z.string().email(),
})

export type PassportApplicationModel= z.infer<typeof PassportApplicationModelSchema>