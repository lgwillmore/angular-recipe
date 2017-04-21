import {Component, OnInit} from "@angular/core";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {


  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

}
