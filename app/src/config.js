export default {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 8000,
	algolia: {
		index: process.env.REACT_APP_ALGOLIA_INDEX,
		appId: process.env.REACT_APP_ALGOLIA_APP_ID,
		searchKey: process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
	},
	api: {
		url: process.env.REACT_APP_API_ENDPOINT,
	},
	stream: {
		appID: process.env.REACT_APP_STREAM_APP_ID,
		apiKey: process.env.REACT_APP_STREAM_API_KEY,
		analyticsKey: process.env.REACT_APP_STREAM_ANALYTICS,
	},
	social: {
		reddit: {
			username: process.env.REACT_APP_REDDIT_USERNAME,
			password: process.env.REACT_APP_REDDIT_PASSWORD,
			key: process.env.REACT_APP_REDDIT_APP_ID,
			secret: process.env.REACT_APP_REDDIT_APP_SECRET,
		},
	},
	url: process.env.BASE_URL,
	version: process.env.REACT_APP_VERSION,
	sentry: process.env.REACT_APP_SENTRY_DSN,
};
