import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public bikes: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.allBikes();
  }
  
  allBikes() {
    this.productService.getAllBikes().subscribe(res => {
      // console.log(res);
      this.bikes = res;
      this.bikes.forEach((a:any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
