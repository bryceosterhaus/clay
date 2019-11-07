const req = require.context('../stories', true, /\.tsx?$/);

export function loadStories() {
	req.keys().forEach(filename => req(filename));
}
