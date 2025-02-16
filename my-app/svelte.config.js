import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter() // Use adapter-node for a Node.js environment
	}
};

export default config;
