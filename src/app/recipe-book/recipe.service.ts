import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe("Chicken Pie", "A nice tasty pie", "http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chickenandmushroompi_89034_16x9.jpg"),
    new Recipe("Chicken Pie 2", "A nice tasty pie", "http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chickenandmushroompi_89034_16x9.jpg")
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this._recipes.slice();
  }
}
