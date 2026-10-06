import { z } from 'zod'

export const equipmentSchema = z.object({
  name: z.string().min(2),
  desc: z.string().optional(),
  photo: z.string().optional(),
  location: z.string().optional()
})
