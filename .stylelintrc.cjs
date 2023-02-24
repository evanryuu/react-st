// .stylelintrc.js
module.exports = {
  // register plugins
  plugins: ['stylelint-prettier'],
  // like eslint extends
  extends: [
    // standard rules set
    'stylelint-config-standard',
    // scss ver.
    'stylelint-config-standard-scss',
    // css attrs order
    'stylelint-config-recess-order',
  ],
  // 配置 rules
  rules: {
    // enable Prettier auto format
    'prettier/prettier': true,
  }
};
