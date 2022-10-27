import { Injectable } from '@angular/core';
import { product, products } from './products.service';

export const cart: product[] = [
  // {
  //   name: 'Mountain bike',
  //   img: '../../../assets/img/bike1.jpg',
  //   price: 100.0,
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
  //   onStock: 5,
  //   id: 1,
  // },
  // {
  //   name: 'Mountain bike',
  //   img: '../../../assets/img/bike1.jpg',
  //   price: 100.0,
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
  //   onStock: 5,
  //   id: 1,
  // },
  // {
  //   name: 'Mountain bike',
  //   img: '../../../assets/img/bike1.jpg',
  //   price: 200.0,
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
  //   onStock: 5,
  //   id: 2,
  // },
];
@Injectable({
  providedIn: 'root',
})
export class cartService {
  constructor() {
    this.updateCartFromLocalStorage();
  }
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
    localStorage.setItem('cart', localStorageCart);
  }
  updateCartFromLocalStorage() {
    let localStorageCartArr = localStorage.getItem('cart')?.split(' ');
    console.log(localStorageCartArr);
    if (localStorageCartArr !== undefined) {
      for (
        let index = 0;
        index + 1 < localStorageCartArr?.length;
        index = index + 2
      ) {
        this.emptyCart;
        products.map((product) => {
          if (localStorageCartArr !== undefined) {
            product.id === parseInt(localStorageCartArr[index])
              ? cart.push(product)
              : cart;
          }
        });
      }
    }
    console.log('aaa');
  }
}
