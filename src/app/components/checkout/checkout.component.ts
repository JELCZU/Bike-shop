import { Component, OnInit } from '@angular/core';
import { products } from '../products/products.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  products: any;

  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }
}
