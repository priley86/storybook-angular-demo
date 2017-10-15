/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure } from '@storybook/angular';
import '../src/polyfills';

const req = require.context('../src', true, /.stories.ts$/);

function loadStories() {
  require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
