export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["backbtn.png","cloudward white.png","cloudward.png","favicon.png","landing.png","login.png","reg.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.7Za5wRO9.js",app:"_app/immutable/entry/app.msDWnd7h.js",imports:["_app/immutable/entry/start.7Za5wRO9.js","_app/immutable/chunks/D72KHhSK.js","_app/immutable/chunks/M6C1hwVx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CHq_p6tN.js","_app/immutable/entry/app.msDWnd7h.js","_app/immutable/chunks/M6C1hwVx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CrGgJoU_.js","_app/immutable/chunks/DGRRgFMN.js","_app/immutable/chunks/BsSnDjbE.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BXJXmFFj.js","_app/immutable/chunks/CHq_p6tN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
