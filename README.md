# 💸 SpendwiseAI - AI Powered Personal Finance Platform

SpendwiseAI is an AI-powered full-stack personal finance management platform to help you track expenses, manage budgets, and gain actionable financial insights. With advanced AI for receipt scanning and smart categorization, SpendwiseAI simplifies personal finance management through intuitive dashboards, automated alerts, and interactive visualizations.

---

## Tech Stack

| Technology        | Purpose                                               |
|-------------------|--------------------------------------------------------|
| **React 19**      | Modern component-based UI library                     |
| **Next.js 15**    | Full-stack framework with app router & server actions |
| **Tailwind CSS**  | Utility-first CSS for rapid styling                   |
| **Supabase**      | Open-source Firebase alternative (PostgreSQL backend) |
| **Prisma**        | Type-safe ORM for PostgreSQL                          |
| **Clerk**         | Authentication and user management                    |
| **Inngest**       | Background jobs and serverless workflows              |
| **Arcjet**        | Secure serverless edge runtime & performance          |
| **shadcn/ui**     | Beautiful and customizable UI components              |
| **OpenAI API**    | AI smart categorization, summaries, and receipt scan  |

---
---

## Tech Stack

- **Frontend:** Next.js, Shadcn/UI, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB or PostgreSQL
- **AI Modules:** Expense Categorization, Receipt Scanner
- **Email Notifications:** Nodemailer / SendGrid
- **Charts & Graphs:** Recharts / Chart.js
## 📂 Project Structure
```
FullStackReact_Project/
│
├── app/ # Main Next.js application
│ ├── layout.js # Global layout configuration
│ ├── page.js # Landing or main page
│ └── (auth)/ # Authentication routes
│ ├── sign-in/
│ │ └── page.jsx
│ └── sign-up/
│ └── page.jsx
│
├── components/ # UI components
│ └── ui/ # Modular & reusable UI components
│ ├── button.jsx
│ ├── card.jsx
│ ├── drawer.jsx
│ ├── header.jsx
│ └── ...
│
├── lib/ # Shared libraries & utilities
│ └── utils.js # Utility functions (e.g., cn)
│
├── public/ # Public static assets (SVGs, PNGs)
│ └── logo.png, globe.svg, etc.
│
├── styles/ or global.css # Global styles (Tailwind or custom)
│
├── .env # Environment variables
├── .gitignore
├── package.json # Project metadata and dependencies
├── README.md # Project documentation
└── next.config.mjs # Next.js configuration
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
## 📌 Why This Project?

This is the **ultimate resume project** to:

- Demonstrate full-stack proficiency
- Showcase modern AI integration
- Build a production-ready, scalable finance platform

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

⭐ Contributions
Contributions and suggestions are welcome! Please open an issue or submit a pull request.


