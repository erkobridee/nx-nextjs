/*
  the next nx plugin uses it
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/next/plugins/with-nx.ts#L2

  source code
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/workspace/src/utils/app-root.ts
*/
const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');

const rootTailwindConfig = require(`${appRootPath}/tailwind.config.js`);

const isObject = (value) =>
  value && typeof value === 'object' && value.constructor === Object;

const mergePurge = ({ rootPurge, projectPurge }) => {
  let newPurge = { content: [] };

  if (isObject(rootPurge)) {
    newPurge = rootPurge;
  } else if (Array.isArray(rootPurge)) {
    newPurge.content = rootPurge;
  }

  if (isObject(projectPurge)) {
    const rootPurge = newPurge.content;
    const projectPurge = project.purge || [];
    newPurge = {
      ...newPurge,
      ...projectPurge,
      content: [...rootPurge, ...projectPurge],
    };
  } else if (Array.isArray(projectPurge)) {
    newPurge.content = [...newPurge.content, ...projectPurge];
  }

  return newPurge;
};

module.exports = (tailwindConfig = {}) => {
  const rootPurge = rootTailwindConfig.purge;
  const projectPurge = tailwindConfig.purge;

  const purge = mergePurge({
    rootPurge,
    projectPurge,
  });
  return {
    ...rootTailwindConfig,
    ...tailwindConfig,
    purge,
  };
};
