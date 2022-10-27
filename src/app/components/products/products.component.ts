import { Component, OnInit } from '@angular/core';
import { product, products } from '../../services/products.service';
import { cartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: product[] = products;
  constructor(private cartService: cartService) {}

  ngOnInit(): void {}
}
