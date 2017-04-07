import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "./shopping.service";

@Component(
  {
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
  }
)
export class ShoppingList implements OnInit{

  ingredients : Ingredient[];

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.shoppingService.ingredientsChanged.subscribe(()=>{
      this.updateIngredients();
    });
    this.updateIngredients();
  }

  updateIngredients(){
    this.ingredients=this.shoppingService.getIngredients();
  }
}
