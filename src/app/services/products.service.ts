import { Injectable } from '@angular/core';
export interface product {
  name: string;
  img: string;
  price: number;
  description: string;
  onStock: number;
  id: number;
}
export const products: product[] = [];
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  async getProducts() {
    const res = await fetch('http://localhost:5000/products');
    return res.json();
  }
  async getProduct(productId: number) {
    const res = await fetch(`http://localhost:5000/products/${productId}`);
    return res.json();
  }
  ngOnInit() {}
  async loadProducts() {
    products.push(...(await this.getProducts()));
  }
}
