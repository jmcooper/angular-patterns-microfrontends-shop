import { Routes } from '@angular/router';

import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'catalog', pathMatch: 'full' },
      { path: 'catalog', component: Catalog },
      { path: 'cart', component: Cart },
      { path: 'checkout', component: Checkout },
    ]
  },
];

//Use these for testing the admin project independently outside of the host project
export const localRoutes: Routes = [
  {
    path: 'shop',
    children: routes,
  }
]