const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.js', '.json'],
    alias: {
      '@router': './src/router',
      '@pages/*': './src/pages/*',
      '@components': './src/components',
      '@components/*': './src/components/*',
      '@helpers': './src/helpers',
      '@helpers/*': './src/helpers/*',
      '@redux': './src/redux',
    },
  },
];
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  plugins: ['syntax-dynamic-import', MODULE_RESOLVER],
};
