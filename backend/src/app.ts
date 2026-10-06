import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { healthRoutes } from './routes/health'
import { env } from './config/env'

export async function buildApp() {
  const app = Fastify({ logger: true })
  await app.register(cors)
  await app.register(jwt, { secret: env.JWT_SECRET })
  await app.register(multipart, { limits: { fileSize: 5 * 1024 * 1024 } })
  await app.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'static'),
    prefix: '/static/'
  })
  await app.register(healthRoutes)
  return app
}
