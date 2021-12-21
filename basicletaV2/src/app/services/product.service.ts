import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  getAllBikes() {
    return this.httpClient.get<any>(this.apiUrl).pipe(map((res: any) => {
      return res
    }));
  }
}
