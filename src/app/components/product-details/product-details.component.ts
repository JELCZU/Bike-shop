import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cartService } from 'src/app/services/cart.service';
import { product, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: product | any;
  stockStatusColor: string = 'dimgray';
  stockStatusText: string = 'unknown stock status';
  addToCartBtnColor: string = 'grey';
  addToCartBtnText: string = 'Product out of stock';
  constructor(
    private route: ActivatedRoute,
    private cartService: cartService,
    private productsService: ProductsService
  ) {}
  addToCart(product: product) {
    this.cartService.addProductToCart(product);
  }
  ngOnInit() {
    this.routerDataLoad().then(() => this.getStockStatus());
  }
  async routerDataLoad() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = await this.productsService.getProduct(productIdFromRoute);
  }
  getStockStatus() {
    if (this.product.onStock > 0) {
      this.addToCartBtnColor = 'rgb(17, 158, 0)';
      this.addToCartBtnText = 'Add to cart';
      if (this.product.onStock > 2) {
        this.stockStatusColor = 'rgb(17, 158, 0)';
        this.stockStatusText = 'On stock';
      } else {
        this.stockStatusColor = 'orange';
        this.stockStatusText = 'Only few left';
      }
    } else {
      this.addToCartBtnColor = 'grey';
      this.addToCartBtnText = 'Product out of stock';
      this.stockStatusColor = 'red';
      this.stockStatusText = 'Out of stock';
    }
  }
}
