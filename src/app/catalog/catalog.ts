import { Component, inject, OnInit, Signal } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details";

import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit {
  products!: Signal<IProduct[]>;
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: IProduct) {
    // this.availableInventory.update((p) => p - 1);
    this.cartService.addToCart(product);
  }
}
