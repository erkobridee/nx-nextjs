/*
  the next nx plugin uses it
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/next/plugins/with-nx.ts#L2

  source code
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/workspace/src/utils/app-root.ts
*/
const { appRootPath } = require('@nrwl/tao/src/utils/app-root');

const rootTailwindConfig = require(`${appRootPath}/tailwind.config.js`);

module.exports = (tailwindConfig = {}) => {
  const rootContent = rootTailwindConfig.content || [];
  const projectContent = tailwindConfig.content || [];
  const content = [...rootContent, ...projectContent];

  const rootSafelist = rootTailwindConfig.safelist || [];
  const projectSafelist = projectContent.safelist || [];
  const safelist = [...rootSafelist, ...projectSafelist];

  return {
    ...rootTailwindConfig,
    ...tailwindConfig,
    content,
    safelist,
  };
};
