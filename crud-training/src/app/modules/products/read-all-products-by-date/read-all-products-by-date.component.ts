import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-all-products-by-date',
  templateUrl: './read-all-products-by-date.component.html',
  styleUrls: ['./read-all-products-by-date.component.css']
})
export class ReadAllProductsByDateComponent implements OnInit {

  searchDate = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.searchDate = data.date;
    })
  }

}
