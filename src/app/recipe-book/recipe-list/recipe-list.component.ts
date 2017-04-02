import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Chicken Pie", "A nice tasty pie", "http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chickenandmushroompi_89034_16x9.jpg"),
    new Recipe("Chicken Pie 2", "A nice tasty pie", "http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chickenandmushroompi_89034_16x9.jpg")
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
