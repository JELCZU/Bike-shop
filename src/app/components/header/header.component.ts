import { Component, OnInit } from '@angular/core';
import { cart, cartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cart = cart;
  constructor(private cartService: cartService) {
    cartService.updateCartFromLocalStorage();
  }

  ngOnInit(): void {}
}
