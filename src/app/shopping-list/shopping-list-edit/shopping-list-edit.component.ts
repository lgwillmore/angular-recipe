import {Component, EventEmitter, Output, ElementRef, ViewChild} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {isNull} from "util";

@Component({
  selector: "shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html"
})
export class ShoppingListEdit {

  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  onAdd() {
    const name: string = this.nameInput.nativeElement.value;
    if (name == null || name === "") {
      return;
    }
    const ingredientAmount: number = this.amountInput.nativeElement.value;
    if (ingredientAmount == null || ingredientAmount < 1) {
      return;
    }
    this.amountInput.nativeElement.value = "";
    this.nameInput.nativeElement.value = "";
    this.ingredientAdded.emit(new Ingredient(name, ingredientAmount));
  }

}
