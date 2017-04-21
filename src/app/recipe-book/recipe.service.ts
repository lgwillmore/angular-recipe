import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipeService {

  private idCounter: number = 0;
  private _recipes: Recipe[] = [];

  constructor() {
    this.createRecipe(
      new Recipe(
        "Chicken Pie",
        "A nice tasty pie",
        "http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chickenandmushroompi_89034_16x9.jpg",
        [
          new Ingredient("Chicken", 1),
          new Ingredient("Mushrooms", 5)
        ]
      )
    )
    this.createRecipe(
      new Recipe(
        "Chicken Pie 2",
        "A nice tasty pie",
        "http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chickenandmushroompi_89034_16x9.jpg",
        [
          new Ingredient("Chicken", 1),
          new Ingredient("Potatoes", 6)
        ])
    )
  }

  createRecipe(recipe: Recipe) {
    this.idCounter++;
    recipe.id = this.idCounter;
    this._recipes.push(recipe);
  }

  getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  getRecipeByID(id: number) {
    for (let recipe of this._recipes) {
      if (recipe.id == id) {
        return recipe;
      }
    }
    return null
  }

}
