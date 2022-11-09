import { Component, OnInit } from '@angular/core';
import {
  product,
  products,
  ProductsService,
} from '../../services/products.service';
import { cartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: product[] = products;
  productsPerPage: number = 30;
  constructor(
    private cartService: cartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.readProucts();
  }
  async readProucts() {
    for (let i = 1; i <= this.productsPerPage; i++) {
      // console.log(await this.productsService.getProduct(i));
      products.push(await this.productsService.getProduct(i));
    }
  }
}
