import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Super Burger', 'Burger with double meat', 'https://www.mcdonalds.gr/sites/default/files/produits/big-mac.png'),
    new Recipe('Tasty chicken', 'Chicken with apples and rice',
    'http://www.frekuenca.com/wp-content/uploads/2017/12/Turkey-with-Cornbread-Stuffing-iStock.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
