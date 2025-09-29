import { Component, inject, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-checkout',
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  protected cartService = inject(CartService);
  protected addressSelector: any = null;

  ngOnInit() {
    this.addressSelector = loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'account',
      exposedModule: './AddressSelector'
    }).then(m => m.AddressSelector);
  }
}
