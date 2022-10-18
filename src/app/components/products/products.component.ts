import { Component, OnInit } from '@angular/core';
import { product, products } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: product[] = products;
  constructor() {}

  ngOnInit(): void {}
}
