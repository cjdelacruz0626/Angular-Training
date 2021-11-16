import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;
  heartIcon = faHeart;
  heartIconSolid = faHeartBroken;
  @Input() addedToWishList: boolean;


  constructor(
    private msgService: MessengerService, 
    private cartService: CartService,
    private wishListService: WishlistService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msgService.sendMsg(this.productItem);
    })
  }

  handleAddToWishList() {
    this.wishListService.addToWishList(this.productItem.id).subscribe(() => {
      // console.log(this.productItem);
      this.addedToWishList = true;
    });
  }

  handleRemoveFromWishList() {
    this.wishListService.removeFromWishList(this.productItem.id).subscribe(() => {
      this.addedToWishList = false;
    });
  }

}
