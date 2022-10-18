import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cart = cart;
  basket: any = 0;
  constructor() {}

  ngOnInit(): void {}
}
