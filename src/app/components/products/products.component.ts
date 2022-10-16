import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [
    {
      name: 'Mountain bike',
      img: '../../../assets/img/bike1.jpg',
      price: 200.0,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
      id: 1,
    },
    {
      name: 'Mountain bike',
      img: '../../../assets/img/bike1.jpg',
      price: 200.0,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
      id: 2,
    },
    {
      name: 'Mountain bike',
      img: '../../../assets/img/bike1.jpg',
      price: 200.0,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
      id: 3,
    },
    {
      name: 'Mountain bike',
      img: '../../../assets/img/bike1.jpg',
      price: 200.0,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',
      id: 4,
    },
    {
      name: 'Mountain bike',
      img: '../../../assets/img/bike1.jpg',
      price: 200.0,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',

      id: 5,
    },
    {
      name: 'Mountain bike',
      img: '../../../assets/img/bike1.jpg',
      price: 200.0,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates voluptate aliquid ea est quod voluptatem. Aliquam non repudiandae laborum. Temporibus itaque beatae aliquam veniam explicabo corporis asperiores ab perspiciatis!',

      id: 6,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
