import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Carbon Lods', 'Ang saya ko sana kung nandyan ka', 20000),
    new Product(2, 'Carbon Lods', 'Ang saya ko sana kung nandyan ka', 30000),
    new Product(3, 'Carbon Lods', 'Ang saya ko sana kung nandyan ka', 40000),
    new Product(4, 'Carbon Lods', 'Ang saya ko sana kung nandyan ka', 50000),
    new Product(5, 'Carbon Lods', 'Ang saya ko sana kung nandyan ka', 60000),
    new Product(6, 'Carbon Lods', 'Ang saya ko sana kung nandyan ka', 70000),
    new Product(7, 'Carbon Lods', 'Ang saya ko sana kung nandyan ka', 80000),
  ];

  constructor() { }

  getProducts(): Product[]{
    //Return product from database and return and observable
    return this.products;
  }
}
