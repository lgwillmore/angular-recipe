import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  selectedRecipe :Recipe;

  private _recipes: Recipe[] = [
    new Recipe(
      "Chicken Pie",
      "A nice tasty pie",
      "http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chickenandmushroompi_89034_16x9.jpg",
      [
        new Ingredient("Chicken", 1),
        new Ingredient("Mushrooms", 5)
      ]
    ),
    new Recipe(
      "Chicken Pie 2",
      "A nice tasty pie",
      "http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chickenandmushroompi_89034_16x9.jpg",
      [
        new Ingredient("Chicken", 1),
        new Ingredient("Potatoes", 6)
      ])
  ];

  constructor() {
  }

  selectRecipe(recipe :Recipe){
    this.selectedRecipe=recipe;
    this.recipeSelected.emit(recipe)
  }

  getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  getSelectedRecipe() :Recipe {
    return this.selectedRecipe;
  }

}
