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
  productsPerPage: number = 30;
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
    for (let i = 1; i <= this.productsPerPage; i++) {
      products.push(
        await this.productsService.getProduct(
          i + (this.pageNumber - 1) * this.productsPerPage
        )
      );
    }
  }
  routerDataLoad() {
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    this.pageNumber = Number(routeParams.get('pageNumber'));
    const pageNumber = Number(routeParams.get('pageNumber'));
    console.log(pageNumber);
  }
}
