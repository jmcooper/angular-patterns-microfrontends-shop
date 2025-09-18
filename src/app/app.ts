import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItems } from "./menu-items/menu-items";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuItems],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop');
}
