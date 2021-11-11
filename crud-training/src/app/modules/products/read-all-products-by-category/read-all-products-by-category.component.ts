import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-all-products-by-category',
  templateUrl: './read-all-products-by-category.component.html',
  styleUrls: ['./read-all-products-by-category.component.css']
})
export class ReadAllProductsByCategoryComponent implements OnInit {

  searchCategory = ''

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.searchCategory = data.category;
    })
  }

}
