import {Component} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Component(
  {
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html'
  }
)
export class ShoppingList {

  ingredients: Ingredient[] = [
    new Ingredient('Mushrooms', 5),
    new Ingredient('Potatos', 10)
  ];

}
