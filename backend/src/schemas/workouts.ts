import { z } from 'zod'

export const workoutSchema = z.object({
  memberId: z.string(),
  routineId: z.string(),
  date: z.string().optional(),
  done: z.boolean().optional()
})
