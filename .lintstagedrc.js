module.exports = {
  '*.[j|t]s?(x)': ['yarn typecheck', 'yarn lint:fix'],
  '*.{js,jsx,ts,tsx,json}': ['prettier --write'],
  '*.test.ts?(x)': ['yarn test --bail'],
};
