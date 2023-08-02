This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the app

Tested on:
node version 20.5.0
yarn version 1.22.17

First, install dependencies with:

```bash
yarn
# or
npm install
```

Then, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Observations about the solution

In this app we are using next.js for it's simplified routing scheme, of of the box SSR capability and ease of deployment in vercel.

Used Next.js App router instead of Pages router for more flexibility, performance optimization and future proofing.

Used React Query to handle data fetching, querying and caching. Makes it easier to handle infinite scrolling, refetching and retries in the future.

React Query uses re-fetch on page focus, since the mock BE randomly assigns EUR conversion values, seems like the prices jump all over the place, but that is because the variation is too big, in an actual app, tha implemented behaviour would be ideal, since updating the values of the transactions in a desired behaviour.

Used React.lazy and Suspense to lazy load the bigger components reducing the initial js bundle that has to be loaded to improve the first page load time.

Shared components, hooks and types are placed under src/ and while app/ folder is reserved for rounting and subfolders are able to hold feature specific components, hooks and types

Used https://ui.shadcn.com/ for component library. Easy to use, supports typescript, completely customisable, compatible with tailwindCSS. Components are added using: npx shadcn-ui@latest add \[component\]

As described on the task requirements, I did not focus on styling the app or making a visually striking landing page. I think what you guys are looking for is someone who knows how to use a modern stack, builds for scale and creates webapps with good performance. That's what this solution does. It is modern, well structured and performatic with components that are modular and maintainable.