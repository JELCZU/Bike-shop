import { Component, OnInit } from '@angular/core';
export const products: any[] = [
  {
    name: 'Mountain bike',
    img: '../../../assets/img/bike1.jpg',
    price: 200.0,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
    onStock: 5,
    id: 1,
  },
  {
    name: 'Mountain bike',
    img: '../../../assets/img/bike1.jpg',
    price: 200.0,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
    onStock: 5,
    id: 2,
  },
  {
    name: 'Mountain bike',
    img: '../../../assets/img/bike1.jpg',
    price: 200.0,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
    onStock: 5,
    id: 3,
  },
  {
    name: 'Mountain bike',
    img: '../../../assets/img/bike1.jpg',
    price: 200.0,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
    onStock: 5,
    id: 4,
  },
  {
    name: 'Mountain bike',
    img: '../../../assets/img/bike1.jpg',
    price: 200.0,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
    onStock: 5,
    id: 5,
  },
  {
    name: 'Mountain bike',
    img: '../../../assets/img/bike1.jpg',
    price: 200.0,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
    onStock: 5,
    id: 6,
  },
];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = products;
  constructor() {}

  ngOnInit(): void {}
}
