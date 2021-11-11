import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList: Category;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data => {
      this.categoryList = data;
    })
  }

}
