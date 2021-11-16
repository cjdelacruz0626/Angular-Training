import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productsUrl } from 'src/config/api';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    //Return product from database and return and observable
    return this.httpClient.get<Product[]>(productsUrl);
  }
}
