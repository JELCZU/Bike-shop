import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  @Input() product: product | any;
  ngOnInit(): void {}
}
