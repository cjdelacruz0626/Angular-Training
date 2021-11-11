import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../products/product';
import { Category } from '../site-framework/category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }
  
  getALlProducts(): Observable<Product> {
    const productUrl = ' http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }

  getCategories(): Observable<Category> {
    const categoryUrl = ' http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoryUrl);
  }

  createProduct(productBody: any): Observable<Product>{
    const productUrl = ' http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody);
  }


  readProduct(productId: string): Observable<Product> {
    const productUrl = ' http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl);
  }

  updateProduct(productId: string, productBody: any): Observable<Product> {
    const productUrl = ' http://localhost:3000/products/'+productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }

  deleteProduct(productId: string): Observable<Product> {
    const productUrl = ' http://localhost:3000/products/'+productId;
    return this.httpClient.delete<Product>(productUrl);
  }

  searchCategoryProducts(categoryId: string): Observable<Product> {
    const productUrl = ' http://localhost:3000/products/category='+categoryId;
    return this.httpClient.get<Product>(productUrl);
  }

  searchDateProducts(datePram: Date): Observable<Product> {
    const productUrl = ' http://localhost:3000/products/date='+datePram;
    return this.httpClient.get<Product>(productUrl);
  }

}
