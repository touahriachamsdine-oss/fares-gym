import jwt from 'jsonwebtoken'
import { env } from '../config/env'

export type TokenPayload = { userId: string; role: string }

export function signToken(payload: TokenPayload) {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, env.JWT_SECRET) as TokenPayload
}
