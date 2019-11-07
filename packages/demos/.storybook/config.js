import {loadStories} from './load-stories';
import {addParameters, configure} from '@storybook/react';

addParameters({
	options: {
		showPanel: false,
	},
});

configure(loadStories, module);
