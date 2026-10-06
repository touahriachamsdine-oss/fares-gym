import { z } from 'zod'

export const createMemberSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  notes: z.string().optional()
})
