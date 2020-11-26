[⬅️&nbsp;&nbsp;README](../README.md)

# Project creation commands

## Steps

1. creation command

`npx create-nx-workspace nx-nextjs`

```
preset: react
application name: app
styles: SASS
nx cloud: no
```

2. add the next.js dev dependency to the nx workspace:

`npm i --save-dev @nrwl/next`

3. create the next.js site (named as nextjs) inside of the nx workspace:

```
nx generate @nrwl/next:app nextjs
nx g @nrwl/next:app nextjs

npm run nx ...
npx nx ...

style: SASS
```

4. running the created (next.js) site:

`nx serve nextjs`

> to test the production version run it with the flag --prod

```
nx build nextjs
nx serve --prod nextjs
```

5. export the static site from the (next.js) site:

```
nx build nextjs
nx export nextjs
```

> the exported output it will be generated on the given path `dist/apps/nextjs/exported/`

6. create a reusable shared components library:

```
nx generate @nrwl/react:lib components --directory=shared
nx g @nrwl/react:lib components --directory=shared
```

7. generate TargetBlankLink shared component

```
nx generate @nrwl/react:component TargetBlankLink --project=shared-components --export
nx g @nrwl/react:component TargetBlankLink --project=shared-components --export
```

8. use the TargetBlankLink shared component on the `app` and `nextjs` applications

9. add TailwindCSS dev dependency into the nx workspace:

`npm i -D tailwindcss`

10. initialize the root `tailwind.config.js` file:

`npx tailwind init`

11. define the `postcss.config.js` file to add the TailwindCSS support into the nx workspace
