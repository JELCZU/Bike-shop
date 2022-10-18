import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cartService } from 'src/app/services/cart.service';
import { product, products } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: product[] = products;
  product: product | any;
  constructor(
    private route: ActivatedRoute,
    private cartService: cartService
  ) {}
  addToCart(product: product) {
    this.cartService.addProductToBasket(product);
  }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = this.products.find(
      (product: { id: number }) => product.id === productIdFromRoute
    );
  }
}
