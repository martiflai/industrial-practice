
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/industrial-practice/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/industrial-practice/home",
    "route": "/industrial-practice"
  },
  {
    "renderMode": 2,
    "route": "/industrial-practice/home"
  },
  {
    "renderMode": 2,
    "route": "/industrial-practice/join"
  },
  {
    "renderMode": 2,
    "route": "/industrial-practice/catalog"
  },
  {
    "renderMode": 1,
    "route": "/industrial-practice/nft/*"
  },
  {
    "renderMode": 2,
    "route": "/industrial-practice/register"
  },
  {
    "renderMode": 2,
    "route": "/industrial-practice/profile"
  },
  {
    "renderMode": 2,
    "route": "/industrial-practice/add-nft"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 622, hash: 'bf7d33c431d34624bd1f07251e0d87940b273d02adc5c43786b90a6697c16c51', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 966, hash: 'aecdd87984f2efa4999d14f8333f6f8fac506e834d349d3e9686bb60f4e23d62', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'catalog/index.html': {size: 7445, hash: '70803e31fac9389820e8fcc3c3570855c1b9bf964d016e476c03d0fc233a39a3', text: () => import('./assets-chunks/catalog_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 4921, hash: '2b2eb14d64b3042e26aff2a9a7098fc9d368bc983be6cc37c631c1cdf303ef02', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'join/index.html': {size: 5211, hash: '796816cdde52da58958ba7188066ac2db556e102bf338b8afaedda64d8afac4b', text: () => import('./assets-chunks/join_index_html.mjs').then(m => m.default)},
    'add-nft/index.html': {size: 5316, hash: '082c53599ab5bcf74009fcca03d9d4ba1e8175bcb2ae3de4d57039baacd03496', text: () => import('./assets-chunks/add-nft_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 5108, hash: 'c6b8c867131b472b85b6bc9175dfbc2b1b4b9851fe41ac0930040b36e9493bf7', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 5524, hash: 'c0c84be0296cf0f3c3c74f6ea81e62a0aacb9e3a1c089cd6a67a42d6ba6ac3f7', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-7HCKL3HY.css': {size: 44, hash: 'RnO0YkbANT8', text: () => import('./assets-chunks/styles-7HCKL3HY_css.mjs').then(m => m.default)}
  },
};
