import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon-32x32.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B6UGfMZ9.js","app":"_app/immutable/entry/app.DZHH5X3Z.js","imports":["_app/immutable/entry/start.B6UGfMZ9.js","_app/immutable/chunks/entry.5Y-K4roi.js","_app/immutable/chunks/runtime.Ckd5dxYY.js","_app/immutable/chunks/index.CjrU87Jy.js","_app/immutable/entry/app.DZHH5X3Z.js","_app/immutable/chunks/preload-helper.BblGAYAW.js","_app/immutable/chunks/runtime.Ckd5dxYY.js","_app/immutable/chunks/disclose-version.DUT9m5GB.js","_app/immutable/chunks/render.DhJn5nOL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
