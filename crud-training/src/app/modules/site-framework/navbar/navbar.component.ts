import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../category';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categoryList;

  constructor(private productService: ProductService) {
    this.categoryList = {} as Category;
   }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data => {
      this.categoryList = data;
      console.log(this.categoryList);
    });
  }

  

}
