# Next.js Template with Clerk Authentication

This is a modern [Next.js](https://nextjs.org) 15+ project template featuring:

- [Clerk](https://clerk.com) for authentication and user management
- TypeScript for type safety
- Tailwind CSS for styling
- App Router architecture
- PostgreSQL database support

## Prerequisites

- Node.js 18.17 or later
- pnpm (recommended package manager)
- A Clerk account for authentication
- PostgreSQL database (we use Neon.tech)

## Environment Setup

1. Clone this repository
2. Copy the `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

3. Fill in your environment variables:
   - Get your Clerk keys from [Clerk Dashboard](https://dashboard.clerk.com)
   - Set up your database URL

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Contains all pages and API routes (Next.js 13+ App Router)
- `components/` - Reusable UI components
- `src/middleware.ts` - Clerk authentication middleware
- `public/` - Static assets

## Protected Routes

The following routes are protected and require authentication:

- `/dashboard/*`
- `/forum/*`
- `/`

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply connect your repository to Vercel and it will handle the rest.

Make sure to set up your environment variables in your deployment platform.
