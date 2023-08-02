This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the app

First, install dependencies with:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Observations about the solution

In this app we are using next.js for it's simplified routing scheme, of of the box SSR capability and ease of deployment in vercel.

Used Next.js App router instead of Pages router for more flexibility, performance optimization and future proofing.

Used React Query to handle data fetching, querying and caching. Makes it easier to handle infinite scrolling, refetching and retries in the future.

React Query uses re-fetch on page focus, since the mock BE randomly assigns EUR conversion values, seems like the prices jump all over the place, but that is because the variation is too big, in an actual app, tha implemented behaviour would be ideal, since updating the values of the transactions in a desired behaviour.

Used React.lazy and Suspense to lazy load the bigger components reducing the initial js bundle that has to be loaded to improve the first page load time.

Shared components, hooks and types are placed under src/ and while app/ folder is reserved for rounting and subfolder are able to hold feature specific components, hooks and types

Used https://ui.shadcn.com/ for component library. Easy to use, supports typescript, completely customisable, compatible with tailwindCSS. Components are added using: npx shadcn-ui@latest add \[component\]