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
   Rendering occurs in two steps:

   React renders Server Components into a special data format called the React Server Component Payload (RSC Payload).
   Next.js uses the RSC Payload and Client Component JavaScript instructions to render HTML on the server.

   Then, on the client:

   The HTML is used to immediately show a fast non-interactive preview of the route - this is for the initial page load only.
   The React Server Components Payload is used to reconcile the Client and Server Component trees, and update the DOM.
   The JavaScript instructions are used to hydrate Client Components and make the application interactive.

6. File based Routing

7. App Router and Pages Router (old way, both can be together for migration purpose)

8. Layout.tsx

9. page.tsx

10. loading.tsx

11. Granular control (Streaming) with multiple Suspense on page.

12. Linking and Navigating with <Link> component and useRouter Hook on client side. redirect on server side. Next also does prefetching to improve performance.

13. Routing
    a. Route Group (folder), for structuring code, no effect on route.
    b. Dynamic Routes [slug], [...slug], [[...slug]], these are dynamic routes, catch all route, optional catch all routes.
    c. The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
    d. Any folder with page.tsx file is considered a route, other files can coexist but will not be web accessible.
    e. Using URLSearchParams for calling routes with Query strings. Query strings are passed to server components as search params, this can also be accessed at client side with useSearchParams hook.

14. Route Handlers
    a. Api routes for app router.
    b. Both routes and router handler should not resolve to same route. so we mostly put route handler inside api folder
    c. Route handler defined with route.ts file
    d. Caching also happens for route handlers.
    e. Dynamic Routes [slug], [...slug], [[...slug]] in route handler also

15. Middleware (for authorization and redirects or checking request before actual page is displayed), this is run a sever end.

16. Caching
    a. Request Memoization (memorize within a render cycle) - cleared after render cycle ends on server
    Within a render cycle same api / db query can be called multiple places in component tree, the query is cached an used for subsequent call within that render cycle
    b. Data Cache (memorizes accross user and render cycle) - doesnot clear on redeploy on server
    c. Full Route Cache (caching the full page a build time, any non dynamic page is cached, only updated on rebuild) - cleared on redeploy on server
    d. Router Cache (Client side caching for each route visited, for dynamic 30 seconds and for static 5 minutes.) - cleared on tab close or router refresh.
    e. Revalidation (revalidatePath, revalidateTag, time based revalidation, on demand revalidation, time based revalidation also works in route handlers)
    f. Segment Config can be used to control how caching works. This is at page level/ Route level. For granual control we can pass parameters with fetch option.
    https://blog.webdevsimplified.com/2024-01/next-js-app-router-cache/

17. Data Fetching
    a. Fetching data on Server via fetch/axios call to external API
    b. Directly querying the database
    c. Fetching data on Client via fetch/axios call to external API or Route Handler.

18. Server Actions
    a. Call a server action from client component
    b. Validate form status on Server and return form state.
    c. use useFormState and useFormStatus hooks in client.
    d. Server action can be used even without form.

19. Third Party packages used.
    a. React Hook form (Form state management)
    b. Zustand (Global client side state management)
    c. Zod (Form Validatin, Client and Server)
    d. Tailwind (CSS utility Classes)
    e. Shadcn UI (UI Library), It uses Radix UI and Tailwind
    f. Tanstack react table (Datatable)
    g. react-i18next (Intenationalization)

20. Recommendations
    a. To reduce the Client JavaScript bundle size, we recommend moving Client Components down your component tree.
    For example, you may have a Layout that has static elements (e.g. logo, links, etc) and an interactive search bar that uses state.

    Instead of making the whole layout a Client Component, move the interactive logic to a Client Component (e.g. <SearchBar />) and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.

    b. ENV variable that are not marked as NEXT_PUBLIC will not be accessible in client component. No error occurs but value is undefined.
    c. Any client related features such as Click events, hooks wont work on server component, Next js will recomend to convert such components to client components
    d. Next JS does caching very aggresively. It caches by default, so if you want something not to cache that has to be specified explictly.
    e. Build process can take a lot of time, if any error occurs during build it will fail. Build time increases if we lot of staticaly generated page. Each fetch api in staticaly generated route is run during build process.
