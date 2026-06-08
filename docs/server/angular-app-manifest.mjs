
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
    'index.csr.html': {size: 622, hash: '2cc4f588658383a4afba0ece90b34bfbd44b6ce10ba115808870555ed7724ac2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 966, hash: 'd93584e58f50a79006d58e43494cb476ce5531fef8126c8633659a319ed714bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 4921, hash: '709d773be9b60a3f8b0d9251da165eb65484902a894502efd971ca8a9d02107c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'add-nft/index.html': {size: 5316, hash: '58a2f6fb93329c9d363a0ee3a16810cc1b2051ff4d415d216bcf54eb6bb5ecca', text: () => import('./assets-chunks/add-nft_index_html.mjs').then(m => m.default)},
    'join/index.html': {size: 5211, hash: '339d405401cda6b40f6c7b9b139dbb01791efc817caa528c84a10d9a02693c3e', text: () => import('./assets-chunks/join_index_html.mjs').then(m => m.default)},
    'catalog/index.html': {size: 7445, hash: '557aa11f337f758ad88cf6bf25137880d5142e33a739e3779bf4a28cf2d76742', text: () => import('./assets-chunks/catalog_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 5108, hash: '45d6aa74d7a63afa26cbd817aee866f000dc32b5fc3a3d207e17734ce58d7b30', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 5524, hash: 'db9d2812af08e36b59c42d58f06b7807ed018ccf68ea3ebc35fda3dfbe661717', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-7HCKL3HY.css': {size: 44, hash: 'RnO0YkbANT8', text: () => import('./assets-chunks/styles-7HCKL3HY_css.mjs').then(m => m.default)}
  },
};
