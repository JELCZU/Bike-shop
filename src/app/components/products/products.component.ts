import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  defaultProductsPerPage: number = 30;
  productsPerPage: number = 30;
  displayedProducts: number = 30;
  allProducts: number = 67;
  pageNumber: number = 1;
  constructor(
    private route: ActivatedRoute,
    private cartService: cartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.routerDataLoad();
    this.readProucts();
  }
  async readProucts() {
    this.productsService.emptyProducts();
    if (this.pageNumber * this.productsPerPage > this.allProducts) {
      this.displayedProducts =
        this.allProducts - (this.pageNumber - 1) * this.productsPerPage;
    }
    for (let i = 1; i <= this.displayedProducts; i++) {
      products.push(
        await this.productsService.getProduct(
          i + (this.pageNumber - 1) * this.productsPerPage
        )
      );
    }
  }

  routerDataLoad() {
    const routeParams = this.route.snapshot.paramMap;
    this.pageNumber = Number(routeParams.get('pageNumber'));
    const pageNumber = Number(routeParams.get('pageNumber'));
    if (this.pageNumber === 0) {
      this.pageNumber = 1;
    }
  }
}
