const { workspaceRoot } = require('nx/src/utils/workspace-root');

const rootTailwindConfig = require(`${workspaceRoot}/tailwind.config.js`);

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
