module.exports = {
	DEBUG: true,
	REDIS_PORT: 'redis://:p97b6c7f821a0da48156f6637c0a55a6cff893d7625f53d9fa609166060f9ca3b@ec2-184-73-159-85.compute-1.amazonaws.com:21649',
	LISTEN_PORT: process.env.PORT,
	TRUST_X_FORWARDED_FOR: false,
	//SOCKJS_PREFIX: '/sockjs',
	SOCKJS_URL: '/sockjs2',//'https://localhost:80/sockjs',
	SOCKJS_SCRIPT_URL: '/sockjs-0.3.2.min.js',//'https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js', 
	GAME_ID: 1,
	NAME_EXPIRY: 60 * 60 * 24 * 14,
};
