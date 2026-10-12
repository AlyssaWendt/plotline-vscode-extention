import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
  files: 'out/test/integration/**/*.test.js',
  version: 'stable',
  mocha: {
    ui: 'tdd',
    timeout: 20000,
  },
  launchArgs: ['--user-data-dir=/tmp/plotline-vscode-test-user-data'],
});
