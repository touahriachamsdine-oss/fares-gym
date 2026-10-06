import { z } from 'zod'

export const itemSchema = z.object({
  name: z.string().min(2),
  price: z.number().positive(),
  stock: z.number().int().nonnegative().optional()
})
