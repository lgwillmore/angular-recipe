import {Component, ElementRef, ViewChild} from "@angular/core";
import {ShoppingService} from "../shopping.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: "shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html"
})
export class ShoppingListEdit {

  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  constructor(private shoppingService: ShoppingService){}

  onAdd() {
    const name: string = this.nameInput.nativeElement.value;
    if (name == null || name === "") {
      return;
    }
    const ingredientAmount: number = this.amountInput.nativeElement.value;
    if (ingredientAmount == null || ingredientAmount < 1) {
      return;
    }
    this.shoppingService.addIngredient(new Ingredient(name,ingredientAmount))
    this.amountInput.nativeElement.value = "";
    this.nameInput.nativeElement.value = "";
  }

}
