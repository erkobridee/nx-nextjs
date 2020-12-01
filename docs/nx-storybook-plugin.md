[⬅️&nbsp;&nbsp;README](../README.md)

# Nx Storybook Plugin

- [Storybook | Nx Docs](https://nx.dev/latest/react/plugins/storybook/overview)

  - [Upgrading to Storybook 6 (and Nx versions >10.1.x)](https://nx.dev/latest/react/plugins/storybook/overview#upgrading-to-storybook-6-and-nx-versions-gt-10-1-x-)

## Commands

- run: `nx run {project name}:storybook`

- build: `nx run {project name}:build-storybook`

- print affected: `nx print-affected --target=build-storybook`

## Useful references

- [Storybook](https://storybook.js.org/)

  - [Storybook for React](https://storybook.js.org/docs/react/) - remember that the global styles them must be imported on `.storybook/preview.js`

    - [Essential addons](https://storybook.js.org/docs/react/essentials/introduction)

    - [Storybook Controls Addon](https://github.com/storybookjs/storybook/blob/6.0-docs/addons/controls/README.md)

  - [Storybook 6 Migration Guide](https://medium.com/storybookjs/storybook-6-migration-guide-200346241bb5)

  - [Storybook 6.0](https://storybook.js.org/blog/storybook-6-0/)

* [[YouTube] Nx Tutorial: Nx Storybook Integration](https://www.youtube.com/watch?v=sFpqyjT7u4s)

* [[YouTube] Nx Tutorial: Group all your stories into a single viewable Storybook with Nx](https://www.youtube.com/watch?v=c323HOuFKkA)

* [Creating a Storybook instance including stories from multiple libraries in a Nrwl Nx workspace](https://medium.com/@dSebastien/creating-a-storybook-instance-including-stories-from-multiple-libraries-in-a-nrwl-nx-workspace-89009a2bddf7)

* [VS Code Jest, Improved ESLint Support, Typescript 4, Storybook 6, and more with Nx 10.3 | Nx Blog](https://blog.nrwl.io/vs-code-jest-improved-eslint-support-typescript-4-storybook-6-and-more-with-nx-10-3-faf7c12fe556)

* [Storybook for React tutorial | Storybook Tutorials](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/)

* [What is Storybook and How Can I Use It to Create a Component Library in React? | freeCodeCamp](https://www.freecodecamp.org/news/what-is-storybook-and-how-can-i-use-it-to-create-a-component-libary-in-react/)

* [Guest Post: High Quality React apps with Nx & Cypress | Cypress](https://www.cypress.io/blog/2020/04/14/high-quality-react-apps-with-nx-cypress/)

  - [[GitHub] juristr/nx-react-cypress-blogpost](https://github.com/juristr/nx-react-cypress-blogpost)

* [Use Cypress and Storybook to test your React Components in Isolation](https://egghead.io/lessons/javascript-use-cypress-and-storybook-to-test-your-react-components-in-isolation)

* [Add Custom fonts to react-storybook | DEV](https://dev.to/coderreviewio/add-custom-fonts-to-react-storybook-5465) - [github code](https://github.com/codeReview-youtube/story-custom-font) | [youtube](https://www.youtube.com/watch?v=2kxeVjy39lI)

## Known issues

### Import path from other libraries

reported: [[GitHub] nrwl/nx - React storybook: issue importing from other libraries #2320](https://github.com/nrwl/nx/issues/2320)

fixed: [[GitHub] nrwl/nx - fix(storybook): properly resolve TS paths in storybook webpack config #3032](https://github.com/nrwl/nx/pull/3032)

requires: [[npm] tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin)

changes needed based on the [@nrwl/storybook plugin](https://github.com/nrwl/nx/tree/5da9e668fda846c7fc01e77abd02fa0c179155f7/packages/storybook) - [library schematic configuration](https://github.com/nrwl/nx/tree/5da9e668fda846c7fc01e77abd02fa0c179155f7/packages/storybook/src/schematics/configuration/project-files-5/.storybook):

- [tsconfig.json\_\_tmpl\_\_](https://github.com/nrwl/nx/blob/5da9e668fda846c7fc01e77abd02fa0c179155f7/packages/storybook/src/schematics/configuration/project-files-5/.storybook/tsconfig.json__tmpl__)

- [webpack.config.js\_\_tmpl\_\_](https://github.com/nrwl/nx/blob/5da9e668fda846c7fc01e77abd02fa0c179155f7/packages/storybook/src/schematics/configuration/project-files-5/.storybook/webpack.config.js__tmpl__)

**Note:** it's possible to define it on the `<root>/.storybook/webpack.config.js`
