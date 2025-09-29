import { Component, signal, input, inject } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  product = input.required<IProduct>();
  availableInventory = signal(3);

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 }
  }
}
