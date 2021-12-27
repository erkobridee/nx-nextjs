# NxNextjs

This project was generated using [Nx](https://nx.dev/) ([13.4.1](https://github.com/nrwl/nx/releases/tag/13.4.1))

ℹ️&nbsp;&nbsp;use the [node.js](https://nodejs.org/en/) v14 LTS

## Goal

- check how the Next.js works with Nx

- define shared components and use on the applications

- define shared assets (also webfonts) to use on the applications

- load the webfont added to the nx workspace and define to use it on the root `tailwind.config.js`

## Documentation

- [Nx](docs/nx.md)

  - [Nx Next.js Plugin](docs/nx-next-plugin.md)

  - [Nx Storybook Plugin](docs/nx-storybook-plugin.md)

  - [Using Tailwind CSS in React | Nx React Guide](https://nx.dev/l/r/guides/using-tailwind-css-in-react)

- [TailwindCSS](docs/tailwindcss.md)

- [Project creation commands (steps)](docs/project-creation-commands.md)

## Project dependency graph

![nx dep-graph](docs/assets/nx_dep-graph.png)

> **implicit** - means some sort of manual configuration

## Findings

- it was possible to use the [TailwindCSS](https://tailwindcss.com/) with [SASS](https://sass-lang.com/) inside of the nx workspace

  - [Sass: LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated) - [sass package | npm](https://www.npmjs.com/package/sass)

  - the `TailwindCSS` support is handled through the [Postcss](https://postcss.org/) supported by the nx workspace

  - it was possible to have Tailwind configuration per application extending the `tailwind.config.js` from the root

- it was possible use the [Next.js](https://nextjs.org/) v10 though the [Nx Next.js Plugin](https://nx.dev/latest/react/plugins/next/overview)

  - the Next.js files when we run the development mode, they were place on the `dists/apps/{app name}/`

    - when we run the build it updates the same folder

    - when we run the export to get the static version, that's generates a inner folder `/exported`

## CLI Commands

- cleanup cache and dist: `npm run clean`

### app - [nx react plugin](https://nx.dev/latest/react/plugins/react/overview)

- development: `nx serve app`

- build: `nx build app`

  - with the flag `--prod` that will do the optimizations for production

  - with the `NODE_ENV=production` that will trigger the Tailwind css purge

- test builded: `npx serve dist/apps/app`

- lint: `nx lint app`

- jsUnit tests: `nx test app`

- e2e tests: `nx e2e app-e2e`

### nextjs - [nx next.js plugin](https://nx.dev/latest/react/plugins/next/overview)

- development: `nx serve nextjs`

- build: `nx build nextjs`

  - with the `NODE_ENV=production` that will trigger the Tailwind css purge

  - in case of deployment with the server side support from the Next.js, you need to the the current content from the folder `dist/apps/nextjs`

- test builded: `nx serve nextjs --prod`

  - this will work only after run the build

- export: `nx export nextjs`

  - with the `NODE_ENV=production` that will trigger the Tailwind css purge

- test exported: `npx serve dist/apps/nextjs/exported`

- lint: `nx lint nextjs`

- jsUnit tests: `nx test nextjs`

- e2e tests: `nx e2e nextjs-e2e`

### shared-components - storybook - [nx storybook plugin](https://nx.dev/latest/react/plugins/storybook/overview)

- storybook: `nx storybook shared-components`

- build: `nx build-storybook shared-components`

  - with the `NODE_ENV=production` that will trigger the Tailwind css purge

- test builded: `npx serve dist/storybook/shared-components`

- lint: `nx lint shared-components`

- jsUnit tests: `nx test shared-components`

## Links

- [React](https://reactjs.org/)

  - [React Router](https://reactrouter.com/)

- [Next.js](https://nextjs.org/)

  - [Next.js Docs](https://nextjs.org/docs/getting-started)

  - [[YouTube] Next.js Crash Course - SSG, SSR, and more (Updated for Next.JS 10+) (2020)](https://www.youtube.com/watch?v=dArDe9v5QIA) - 2020/11/03

  - [[YouTube] Next.js Crash Course - SSG, SSR, API Routes, and more](https://www.youtube.com/watch?v=q-sYloF3xKM) - 2020/08/27

  - [[pt-BR][YouTube] Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50](https://www.youtube.com/watch?v=1nVUfZg2dSA)

  - [[YouTube] Mastering the basics of SEO in React and Next.js](https://www.youtube.com/watch?v=GfsqFaiaK3A)

  - [What is Static Site Generation? How Next.js Uses SSG for Dynamic Web Apps | freeCodeCamp](https://www.freecodecamp.org/news/static-site-generation-with-nextjs/)

  - [Nested dynamic layouts in Next.js apps | React Tricks](https://reacttricks.com/nested-dynamic-layouts-in-next-apps/) - [youtube](https://www.youtube.com/watch?v=69-mnojSa0M) | [github](https://github.com/kheruc/rt-nested-layouts)

  - [[GitHub] erkobridee/nextjs-ssg-hello](https://github.com/erkobridee/nextjs-ssg-hello) - first contact with nextjs and the static site generation support

- [Nx: Extensible Dev Tools for Monorepos (React)](https://nx.dev/react)

  - [Plugins | Nx Docs](https://nx.dev/react/plugins/overview)

  - [Core Performance Improvements, Webpack 5, React Native, and more in Nx 13! | Nrwl](https://blog.nrwl.io/core-performance-improvements-webpack-5-react-native-and-more-in-nx-13-cfe63c7415f1) - 2021/10/20

  - [[YouTube] Nx: Extensible Dev Tools for Monorepos (React)](https://www.youtube.com/watch?v=E188J7E_MDU)

  - [[YouTube] Nx Tutorial: High Quality React apps with Nx, Storybook & Cypress](https://www.youtube.com/watch?v=mfJBLhjYMdo)

  - [Scale React Development with Nx | Egghead.io](https://egghead.io/playlists/scale-react-development-with-nx-4038)

  - [Nx Now Supports Next.js | Nrwl](https://blog.nrwl.io/nx-now-supports-next-js-84ae3d0b2aed) - 2019/09/11

    - [[YouTube] Nx Adds Next.js Support](https://www.youtube.com/watch?v=dmwgmHJ8_Ms) - 2019/09/11

    - [[YouTube] Nx + Next.js = ❤️ - Adam L Barrett](https://www.youtube.com/watch?v=chBOFzpGpyo) - 2020/11/05

    - [Next.js guide | Nx Docs](https://nx.dev/latest/react/guides/nextjs)

    - [Next.js plugin | Nx Docs](https://nx.dev/latest/react/plugins/next/overview)

    - [@nrwl/next | npm](https://www.npmjs.com/package/@nrwl/next)

    - [[GitHub] nrwl/nx/packages/next](https://github.com/nrwl/nx/tree/master/packages/next) - Nx plugin for Next.js

    - [Painlessly Build and Deploy Next.js Apps With Nx | Nrwl](https://blog.nrwl.io/painlessly-build-and-deploy-next-js-apps-with-nx-225e2721da78) - 2020/05/14

    - [Improved Next.js support, auto-populated publishable library dependencies, and more in Nx 9.3! | Nrwl](https://blog.nrwl.io/improved-next-js-support-auto-populated-publishable-library-dependencies-and-more-in-nx-9-3-c7dc967dc065) - 2020/05/14

    - [Create a Next.js web app with Nx | Nrwl Blog](https://blog.nrwl.io/create-a-next-js-web-app-with-nx-bcf2ab54613) - 2021/06/10

      - [[GitHub] juristr/blog-series-nextjs-nx](https://github.com/juristr/blog-series-nextjs-nx)

    - [Setup Next.js to use Tailwind with Nx | Nrwl Blog](https://blog.nrwl.io/setup-next-js-to-use-tailwind-with-nx-849b7e21d8d0)

      - [[GitHub] juristr/blog-series-nextjs-nx - branch: 02-setup-tailwind](https://github.com/juristr/blog-series-nextjs-nx/tree/02-setup-tailwind)

    - [Publishing a Next.js app to Vercel with Nx | Nrwl Blog](https://blog.nrwl.io/publishing-a-next-js-app-to-vercel-with-nx-df81916548f5)

  - [Storybook](https://storybook.js.org/)

    - [[YouTube] Nx Tutorial: Nx Storybook Integration](https://www.youtube.com/watch?v=sFpqyjT7u4s)

    - [How to Use Storybook in an Nx Repo | Nx Docs](https://nx.dev/react/plugins/storybook/overview)

    - [Storybook support, run-many command, UI improvements, and more in Nx 8.8 | Nrwl](https://blog.nrwl.io/storybook-support-run-many-command-ui-improvements-and-more-in-nx-8-8-90575cb5dda4)

    - [Nx 8.8: Now You Can Write UI Tests with Storybook and Cypress | Nrwl](https://blog.nrwl.io/ui-testing-with-storybook-and-nx-4b86975224c)

    - [Creating a Storybook instance including stories from multiple libraries in a Nrwl Nx workspace](https://medium.com/front-end-weekly/creating-a-storybook-instance-including-stories-from-multiple-libraries-in-a-nrwl-nx-workspace-89009a2bddf7)

      - [[GitHub] juristr/nx-shared-storybook](https://github.com/juristr/nx-shared-storybook)

  - [Powering Up React Development With Nx | Nrwl](https://blog.nrwl.io/powering-up-react-development-with-nx-cf0a9385dbec)

  - [React Microfrontends and Monorepos: A Perfect Match | Nrwl](https://blog.nrwl.io/monorepos-and-react-microfrontends-a-perfect-match-d49dca64489a) - [demo](https://nrwl-nx-examples-cart.netlify.com/cart) | [code](https://github.com/nrwl/nx-examples)

## Development tip

- to make my life easier I have the current `node_modules` from the project mapped to the PATH env variable, that enables me to run the command `nx` directly, if you don't have if you must use the short cut mapped on the `package.json`, using it like `npm run nx ...` or it's also possible to use like `npx nx ...` (the `npx` will look into the local installed packages `./node_modules/` and on the global installed packages)

  - `./node_modules/.bin`

### Known issues on MacOS

- [How to fix the Node gyp Error: No Xcode or CLT version detected | Reactgo](https://reactgo.com/gyp-xcode-or-clt-version-detected/)
