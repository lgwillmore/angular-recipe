import {Injectable, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {

  ingredientsChanged = new EventEmitter<void>()

  private ingredients: Ingredient[] = [
    new Ingredient('Mushrooms', 5),
    new Ingredient('Potatos', 10)
  ];

  constructor() {
  }


  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit()
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit()
  }



  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

}
