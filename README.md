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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## LEARN

1. ISR, SSG, SSR, CSR
2. Server Component vs Client Component
3. Client component as child of Server Component
4. Server Component as child of Client Component as children props
5. Buildtime, Request Time
6. File based Routing
7. App Router and Pages Router (old way, both can be together for migration purpose)
8. Layout.tsx
9. page.tsx
10. loading.tsx
11. Granular control (Streaming) with multiple Suspense on page.
12. Linking and Navigating with <Link> component and useRouter Hook on client side. redirect on server side.
13. Routing
    a. Route Group (folder), for structuring code, no effect on route.
    b. Dynamic Routes [slug], [...slug], [[...slug]], these are dynamic routes, catch all route, optional catch all routes.
    c. The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
    d. Any folder with page.tsx file is considered a route, other files can coexist but will not be web accessible.
14. Route Handlers
    a. Api routes for app router.
    b. Both routes and router handler should not resolve to same route. so we mostly put route handler inside api folder
    c. Route handler defined with route.ts file
    d. Caching also happens for route handlers.
15. Middleware (for authorization and redirects or checking request before actual page is displayed), this is run a sever end.
16. Caching
    a. Request Memoization (memorize within a render cycle) - cleared after render cycle ends on server
    b. Data Cache (memorizes accross user and render cycle) - doesnot clear on redeploy on server
    c. Full Route Cache (caching the full page a build time, any non dynamic page is cached, only updated on rebuild) - cleared on redeploy on server
    d. Router Cache (Client side caching for each route visited, for dynamic 30 seconds and for static 5 minutes.) - cleared on tab close or router refresh.
    https://blog.webdevsimplified.com/2024-01/next-js-app-router-cache/
17. Data Fetching
