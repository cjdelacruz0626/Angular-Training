import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;

  constructor(private msgService: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msgService.sendMsg(this.productItem);
  }

}
