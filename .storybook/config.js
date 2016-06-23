import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/components/Stories/button');
  // require as many stories as you need.
}

configure(loadStories, module);
