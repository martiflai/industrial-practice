import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Join } from './join/join';
import { Catalog } from './catalog/catalog';
//import { NftDetail } from './nft-detail/nft-detail';
import { Register } from './register/register';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'join', component: Join },
  { path: 'catalog', component: Catalog },
  // { path: 'nft/:id', component: NftDetail },
  { path: 'register', component: Register }
];