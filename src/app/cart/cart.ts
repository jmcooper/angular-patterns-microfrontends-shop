import { Component, inject, Signal } from '@angular/core';
import { IProduct } from '../product.model';
import { CartService } from '../cart.service';
import { ProductDetailsComponent } from "../product-details/product-details";

@Component({
  selector: 'bot-cart',
  imports: [ProductDetailsComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartItems: Signal<IProduct[]>;
  private cartService = inject(CartService);

  constructor() {
    this.cartItems = this.cartService.cart;
  }

  removeFromCart(product: IProduct) {
    this.cartService.removeFromCart(product);
  }
}
