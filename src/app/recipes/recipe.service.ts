import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService) {}
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Super Burger',
        'Burger with double meat',
        'https://www.mcdonalds.gr/sites/default/files/produits/big-mac.png',
        [
            new Ingredient('meat', 1),
            new Ingredient('tomato', 2)
        ]),
        new Recipe('Tasty chicken',
        'Chicken with apples and rice',
        'http://www.frekuenca.com/wp-content/uploads/2017/12/Turkey-with-Cornbread-Stuffing-iStock.jpg',
        [
            new Ingredient('chicken', 1),
            new Ingredient('rice', 2)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    addToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
