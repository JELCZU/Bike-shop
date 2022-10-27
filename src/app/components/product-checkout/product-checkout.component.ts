import { Component, OnInit, Input } from '@angular/core';
import { product } from '../../services/products.service';
import { cart, cartService } from 'src/app/services/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css'],
})
export class ProductCheckoutComponent implements OnInit {
  @Input() product: product | any;
  faTrash = faTrash;
  removeProductFromCart() {
    this.cartService.removeProductFromCart(this.product);
  }
  constructor(private cartService: cartService) {}

  ngOnInit(): void {}
}
