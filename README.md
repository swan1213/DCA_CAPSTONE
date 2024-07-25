## Implementation of AI-Driven Resource Allocation for DC Ambal's Construction projects

=======
![Screenshot](https://i.imgur.com/lm8KGHE.png)


This project leverages the power of AI and GPT-4 to revolutionize construction project management. It features a user-friendly dashboard with drag-and-drop functionality, integrated with an automatic AI Assistant. Users can select specific projects to view detailed information, receive AI-generated recommendations, and access GPT-based prescriptive analysis for optimal decision-making and enhanced project efficiency.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Structure
- page.tsx[Handles Main Page]
- api/generateSummary(FOR COMMUNICATION WITH GPT)
- components[Folder for Web Components]
- lib[Folder for libraries]
- store[Folder for stores]
- Add user defined interface / types sa *typings.d.ts*


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

