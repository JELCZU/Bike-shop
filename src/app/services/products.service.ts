import { Injectable } from '@angular/core';
export interface product {
  name: string;
  img: string;
  price: number;
  description: string;
  onStock: number;
  id: number;
}
export const products: product[] = [
  {
    name: 'Mountain bike',
    img: '../../../assets/img/bike1.jpg',
    price: 100.0,
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
    price: 300.0,
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
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {
    this.getProducts();
  }

  async getProducts() {
    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    alert(data);
    console.log(data);
    // products = data;
  }
}
