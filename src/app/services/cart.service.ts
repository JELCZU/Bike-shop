import { Injectable } from '@angular/core';
import { product } from './products.service';

export const cart: product[] = [];
@Injectable({
  providedIn: 'root',
})
export class cartService {
  constructor() {}
  addProductToBasket(product: product) {
    cart.push(product);
    console.log(cart);
  }
  removeProductFromBasket(product: product) {}
  emptyBasket() {
    cart.splice(0, cart.length);
    console.log(cart);
  }
}
