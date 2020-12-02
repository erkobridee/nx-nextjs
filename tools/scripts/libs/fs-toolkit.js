const fse = require('fs-extra');

/**
 * remove the given path
 *
 * @param {string} path
 */
const remove = async (path) => {
  try {
    await fse.remove(path);
  } catch (e) {
    console.error(e);
  }
};
module.exports.remove = remove;
module.exports.removeSync = fse.removeSync;

/**
 * move the files from the `src` to `dest`
 *
 * @param {string} src
 * @param {string} dest
 */
const move = async (src, dest) => {
  try {
    await fse.move(src, dest, { overwrite: true });
  } catch (e) {
    console.error(e);
  }
};
module.exports.move = move;

/**
 * copy the files from the `src` to `dest`
 *
 * @param {string} src
 * @param {string} dest
 */
const copy = async (src, dest) => {
  try {
    await fse.copy(src, dest, { overwrite: true });
  } catch (e) {
    console.error(e);
  }
};
module.exports.copy = copy;
module.exports.copySync = fse.copySync;

/**
 * write a file
 *
 * @param {string} filePath
 * @param {*} data
 */
const writeFile = async (filePath, data) => {
  try {
    await fse.writeFile(filePath, data);
  } catch (e) {
    console.error(e);
  }
};

module.exports.writeFile = writeFile;
module.exports.writeFileSync = fse.writeFileSync;

/**
 * Check if a given path exists
 *
 * @param {string} path
 * @returns boolean
 */
const pathExists = async (path) => {
  try {
    return await fse.pathExists(path);
  } catch (e) {
    console.error(e);
    return false;
  }
};

module.exports.pathExists = pathExists;
module.exports.pathExistsSync = fse.pathExistsSync;
