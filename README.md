# Challenge misfans

## Table of Contents

- [Get started](#get-started)
- [Why i chose Next](#why-i-choose-next)
- [Development process](#development-process)
- [what can you expect](#what-can-you-expect)
- [Why i chose vercel](#why-i-chose-vercel)
- [Stack](#stack)
- [Metrics web vitals](#metrics-web-vitals)
- [CI/CD](#ci-cd)

## Get started

Well the steps to configure this is very simple. I'm using the yarn version `1.22.10` and `v17.2.0` of node.js, once clarified, let's explain the commands found in the `package.json`. 



```json
 "scripts": {
    "dev": "next",
    "start": "next build && next start",
    "lint": "next lint",
    "prepare": "husky install",
    "pre-commit": "lint-staged --allow-empty"
  },
```

- dev: run our project locally
- start: create the build in production and run the app in a production environment
- lint: check that we comply with the rules defined in our eslint configuration file
- pre-commit: it defines the hook to execute before committing to a file

## Why i choose Next

Next.js is one of the most popular frameworks in the React ecosystem, it allows us great flexibility when building our applications, we can take approaches such as SSR, CSR or make a mix between both, which produces ISR.

## Development process

First we need to talk about a fundamental piece of why use `SWR` and not just `fetch` or `axios`. The best definition there can be is this:

> "The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by HTTP RFC 5861. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data."

With SWR, components will get a stream of data updates constantly and automatically.
And the UI will be always fast and reactive.

**Bonus**: has good error handling

For this particular challenge, I opted for the use of **SSG** using SWR to prefetch build-time data at the moment the page is generated, resulting in a collection of 10 previously generated users that can be consulted without problems as well as entering its detail view. 

I did a mix resulting in that if the user wants to load more data, at that point the application uses `ISR(incremental static regeneration)` to invalidate the user's cache with the help of SWR we fetch the most recent data.

The application also has the possibility to create new pages at runtime :)


## What can you expect

- [x] Switch for enable the dark mode or light mode
- [x] Search bar
- [x] Infinite scroll
- [x] Animations
- [x] Test E2E
- [x] CI/CD (vercel and checklyhq)
- [x] Minimalist design


## Why i chose vercel

This part of the story is where ▲Vercel comes in. It combines the best developer experience with an obsessive focus on end-user performance. The platform enables frontend teams to do their best work, its application deployment infrastructure is based on serverless functions

## Stack

well this is my stack for the front:
- next.js
- tailwindcss
- @headlessui/react
- clsx
- next-themes
- swr
- tinytime
- lodash.throttle (for a smooth effect in the scroll)

to improve code quality:
- eslint
- prettier
- typescript
- husky
- lint-staged
- autoprefixer
- postcss

## Metrics web vitals

You can download the report made by lighthouse in the `/metrics` folder. Unfortunately I couldn't get to the perfect 100. This is due to the images delivered by the API being of very low quality 💔

![alt text for screen readers](https://i.ibb.co/L8hsFX9/Screen-Shot-2022-03-12-at-11-45-39.png)

## CI CD

In the project a flow is enabled that triggers a new deployment for each new commit, this is called within vercel **"deployment preview"**. After that, checklyhq runs E2E test with real browsers doing tests with respect to web vitals.

![alt text for screen readers](https://i.ibb.co/3hvCh3m/Screen-Shot-2022-03-12-at-12-00-32.png)

Once the PR is merged, checkly run tests again aimed at production and not with the preview link.

![alt text for screen readers](https://i.ibb.co/hd2tX3B/Screen-Shot-2022-03-12-at-12-05-41.png)
