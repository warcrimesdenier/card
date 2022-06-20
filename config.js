module.exports = {
	DEBUG: true,
	REDIS_PORT: 'redis://:p93caa2d35d8d227f541368bbc2f2346168024e35982499e4300f1767c6582289@ec2-54-209-29-252.compute-1.amazonaws.com:12659',
	LISTEN_PORT: process.env.PORT,
	TRUST_X_FORWARDED_FOR: false,
	//SOCKJS_PREFIX: '/sockjs',
	SOCKJS_URL: '/sockjs',//'https://localhost:80/sockjs',
	SOCKJS_SCRIPT_URL: '/sockjs-0.3.2.min.js',//'https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js', 
	GAME_ID: 1,
	NAME_EXPIRY: 60 * 60 * 24 * 14,
};
