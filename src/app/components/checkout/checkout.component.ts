import { Component, OnInit } from '@angular/core';
import { products, product } from '../../services/products.service';
import { cart } from 'src/app/services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  products: any;
  cart: product[] = cart;
  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }
}
