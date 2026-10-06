import { z } from 'zod'

export const routineSchema = z.object({
  title: z.string().min(2),
  level: z.string().optional(),
  assignedTo: z.array(z.string()).optional(),
  days: z.array(z.string()).optional(),
  exercises: z.any().optional()
})
