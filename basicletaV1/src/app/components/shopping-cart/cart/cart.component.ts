import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];

  cartTotal = 0;

  constructor(private msgService: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItem();
  }

  handleSubscription() {
    this.msgService.getMsg().subscribe(() => {
      this.loadCartItem();
    });
  }

  loadCartItem() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      // console.log(items);
      this.cartItems = items;
      this.calculateCartTotal();
    });
  }

  calculateCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    });
  }

}
