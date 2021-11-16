import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartUrl } from 'src/config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.httpClient.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.httpClient.post(cartUrl, { product });
  }
}
