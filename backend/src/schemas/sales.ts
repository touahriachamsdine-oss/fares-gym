import { z } from 'zod'

export const saleSchema = z.object({
  memberId: z.string(),
  itemId: z.string(),
  qty: z.number().int().positive(),
  amount: z.number().positive()
})
