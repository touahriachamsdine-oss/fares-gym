import { z } from 'zod'

export const loginSchema = z.object({
  phone: z.string().min(8),
  password: z.string().min(6)
})

export const inviteSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  password: z.string().min(6),
  role: z.enum(['OWNER', 'COACH', 'MEMBER']).default('MEMBER')
})
