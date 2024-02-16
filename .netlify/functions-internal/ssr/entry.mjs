import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BBb6vDqZ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DuOXhEQy.mjs');
const _page1 = () => import('./chunks/projects_BkgcXj5C.mjs');
const _page2 = () => import('./chunks/index_Z0cTL-Pn.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.4.0_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/projects.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "da751bbc-5205-4e87-b225-25b73309de0a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
