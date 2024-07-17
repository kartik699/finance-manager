# Fullstack Finance Manager: Next.js 14, Hono.js, React, Drizzle, NeonDB, Tailwind, PostgreSQL, Recharts

<img width="1512" alt="Screenshot 2024-07-17 at 11 26 25 PM" src="https://github.com/user-attachments/assets/404a9dec-b78b-4d82-942f-6cbec54e2747">



This is a repository for Fullstack Finance Manager: Next.js 14, Hono.js, React, Drizzle, NeonDB, Tailwind, PostgreSQL, Recharts

Key Features:
- Interactive financial dashboard
- Changeable chart types
- Account and date filters
- Detailed transactions table
- Form to add transactions
- Customizable select components
- Income and expense toggle
- CSV transaction imports
- API via Hono.js
- State management via Tanstack React Query
- Authentication via Clerk
- Bulk delete and search in transactions
- Built with Next.js 14
- Styled with TailwindCSS and Shadcn UI
- PostgreSQL & Drizzle ORM
- Deployed on Vercel

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/kartik699/finance-manager.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_APP_URL=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
