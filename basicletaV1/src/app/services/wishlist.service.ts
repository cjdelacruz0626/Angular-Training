import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { wishListUrl } from 'src/config/api';
import { Product } from '../models/product';
import { Wishlist } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpClient: HttpClient) { }

  getWishlist() {
    return this.httpClient.get(wishListUrl).pipe(
      map((result: any[]) => {
        let productsId = [];
        
        result.forEach(item => productsId.push(item.id));

        return productsId;
      })
    )
  }


  addToWishList(productId: number) {
    return this.httpClient.post(wishListUrl, { id: productId });
  }

  removeFromWishList(productId: number) {
    return this.httpClient.delete(wishListUrl + '/' + productId);
  }
}
