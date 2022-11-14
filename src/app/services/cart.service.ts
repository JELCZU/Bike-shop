import { Injectable } from '@angular/core';
import { product, products, ProductsService } from './products.service';

export const cart: product[] = [];
@Injectable({
  providedIn: 'root',
})
export class cartService {
  constructor(private productsService: ProductsService) {}
  addProductToCart(product: product) {
    cart.push(product);
    this.updateLocalStorageCart();
  }
  removeProductFromCart(product: product) {
    let tempCart: product[] | any;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].id === product.id) {
        cart.splice(index, 1);
        break;
      }
    }
    this.updateLocalStorageCart();
  }
  emptyCart() {
    cart.splice(0, cart.length);
    this.updateLocalStorageCart();
  }
  updateLocalStorageCart() {
    let localStorageCart = '';
    localStorageCart = cart.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.id + ' ' + 1 + ' ',
      ''
    );
    // console.log('local storage cart ' + localStorageCart);
    localStorage.setItem('cart', localStorageCart);
  }
  async updateCartFromLocalStorage() {
    let localStorageCartArr = localStorage.getItem('cart')?.split(' ');
    if (localStorageCartArr !== undefined) {
      for (
        let index = 0;
        index + 1 < localStorageCartArr?.length;
        index = index + 2
      ) {
        cart.push(await this.productsService.getProduct(index + 1));
      }
    }
    console.log(cart);
  }
}
