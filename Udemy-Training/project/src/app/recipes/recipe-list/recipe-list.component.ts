import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Adobong Manok', 'Adobong Masiramon na maray', 'https://imgur.com/z777EXL.png'),
    new Recipe('Adobong Orig', 'iyo baga masiramon na maray ini', 'https://imgur.com/z777EXL.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
