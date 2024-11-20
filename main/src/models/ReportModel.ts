import { z } from "zod"

export const ReportSchema = z.object({
  totalApplications: z.number(),
  pending: z.number(),
  approved: z.number(),
  rejected: z.number(),
})
export type Report = z.infer<typeof ReportSchema>
