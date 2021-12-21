import { Component, OnInit } from '@angular/core';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Icons
  searchIcon = faSearch;
  cartIcon = faCartPlus;

  public totalItem: number = 0;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    });
  }

}
