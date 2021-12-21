import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  removeIcon = faTrash;
  eyeIcon = faEye;
  arrowLeftIcon = faArrowLeft;
  arrowRightIcon = faArrowRight;

  public products: any[] = [];
  public grandTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeALlCartItem(); 
  }

}
