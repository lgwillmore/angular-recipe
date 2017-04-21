import {Component, OnInit, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate([this.activeRoute.snapshot.toString(), this.recipe.id])
  }

}
