import {Component, OnInit, Input} from "@angular/core";
import {Recipe} from "../recipe.model";
import {ShoppingService} from "../../shopping-list/shopping.service";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shoppingService: ShoppingService,
              private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipeByID(
      +this.activatedRoute.snapshot.paramMap.get('id')
    )
    this.activatedRoute.params.subscribe((params: Params)=> {
      this.recipe = this.recipeService.getRecipeByID(+params['id'])
    })
  }

  addToShoppingList() {
    this.shoppingService.addIngredients(this.recipe.ingredients)
  }

}
