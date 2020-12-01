const fs = require('fs');
const path = require('path');

const withNx = require('@nrwl/next/plugins/with-nx');

const faviconFromSharedAssetsLib = path.resolve(
  __dirname,
  '../..',
  'libs/shared/assets/favicon.ico'
);
const faviconToPublicFolder = path.resolve(__dirname, 'public/favicon.ico');

// make sure to keep the favicon.ico updated
fs.copyFileSync(faviconFromSharedAssetsLib, faviconToPublicFolder);

module.exports = withNx({});
