import { Component, OnInit } from '@angular/core';
import { product } from '../../services/products.service';
import { cart, cartService } from 'src/app/services/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any;
  cart: product[] = cart;
  faTrash = faTrash;
  emptyCart() {
    this.cartService.emptyCart();
  }
  constructor(private cartService: cartService) {}

  ngOnInit(): void {
    this.products = cart;
  }
}
