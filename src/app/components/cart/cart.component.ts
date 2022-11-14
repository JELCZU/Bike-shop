import { Component, OnInit } from '@angular/core';
import { product } from '../../services/products.service';
import { cart, cartService } from 'src/app/services/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any;
  cart: product[] = cart;
  arraa: number[] = [0, 2, 4];
  summaryProductsPrice: number = 0;
  test: number = 0;
  faTrash = faTrash;
  emptyCart() {
    this.cartService.emptyCart();
  }
  constructor(private cartService: cartService) {}

  ngOnInit(): void {
    this.products = cart;
    this.cartService
      .updateCartFromLocalStorage()
      .then(() => this.sumProductsPrice());
  }
  sumProductsPrice() {
    return (this.summaryProductsPrice = cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0
    ));
  }
}
