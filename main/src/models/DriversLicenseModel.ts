import { z } from "zod"

export const DriversLicenseModelSchema = z.object({
  license_type: z.string(),
  test_centre: z.string(),
  uploaded_documents: z.string().array().optional(),
  email: z.string().email(),
})

export type DriversLicenseModel = z.infer<typeof DriversLicenseModelSchema>
