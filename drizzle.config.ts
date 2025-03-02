import * as dotenv from 'dotenv'
import { defineConfig } from 'drizzle-kit'

// Read the .env file if it exists, or a file specified by the
// dotenv_config_path parameter that's passed to Node.js
dotenv.config({ path: '.env.local' })
if (!process.env.DATABASE_URL)
  throw new Error('DATABASE_URL not found in environment')

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
