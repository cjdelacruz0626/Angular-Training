import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Wishlist } from 'src/app/models/wishlist';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  wishList: number[] = [];

  constructor(private productService: ProductService, private wishListService: WishlistService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishList();
  }

  loadProducts() {
    // console.log(this.productService.getProducts());
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

  loadWishList() {
    this.wishListService.getWishlist().subscribe(products => {
      console.log(products);
      this.wishList = products;
      
    })
  }

}
