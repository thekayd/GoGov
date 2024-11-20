import { z } from "zod"

export const ReportSchema = z.object({
  totalApplications: z.number(),
  pending: z.number(),
  approved: z.number(),
  rejected: z.number(),
})
export type Report = z.infer<typeof ReportSchema>

export const MonthlyDataSchema = z.object({
  name: z.string(), // Corresponds to the 'name' field of type text
  total: z.number(), // Corresponds to the 'total' field of type integer
  approved: z.number(), // Corresponds to the 'approved' field of type integer
  rejected: z.number(), // Corresponds to the 'rejected' field of type integer
  pending: z.number(), // Corresponds to the 'pending' field of type integer
})
export type MonthlyData = z.infer<typeof MonthlyDataSchema>

export const StatusDataSchema = z.object({
  name: z.string(), // Corresponds to the 'name' field of type text
  value: z.number(), // Corresponds to the 'value' field of type integer
})
export type StatusData = z.infer<typeof StatusDataSchema>
