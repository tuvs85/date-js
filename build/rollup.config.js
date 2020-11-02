const path = require('path');
const { babel } = require('@rollup/plugin-babel');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": ['@babel/preset-env'],
}
module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.umd.js'),
      format: 'umd',
      name: 'DateJs',
      amd: {
        id: 'lib/dateJs'
      },
    },
    plugins: [
      babel(babelOptions),
    ],
  },

]
