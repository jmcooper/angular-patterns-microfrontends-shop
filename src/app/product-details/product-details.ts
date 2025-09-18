import { Component, signal, input, inject } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';

import { IProduct } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetailsComponent {
  product = input.required<IProduct>();
  availableInventory = signal(3);
  private cartService = inject(CartService);

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  addToCart(event: MouseEvent) {
    setTimeout(() => this.availableInventory.update((p) => p - 1), 100);
    this.cartService.addToCart(this.product());
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 }
  }
}
