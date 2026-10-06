import dotenv from 'dotenv'
dotenv.config()

export const env = {
  PORT: Number(process.env.PORT || 3000),
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'dev-secret',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://user:pass@localhost:5432/fares_gym'
}
