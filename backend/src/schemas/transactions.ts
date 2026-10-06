import { z } from 'zod'

export const recordPaymentSchema = z.object({
  memberId: z.string(),
  amount: z.number().positive(),
  note: z.string().optional()
})

export const recordSaleTxnSchema = z.object({
  memberId: z.string(),
  amount: z.number().positive(),
  note: z.string().optional()
})
