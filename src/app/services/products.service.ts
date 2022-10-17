import { Injectable } from '@angular/core';
export interface product {
  name: 'Mountain bike';
  img: '../../../assets/img/bike1.jpg';
  price: 100.0;
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!';
  onStock: 5;
  id: 1;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
}
