import {Routes, RouterModule} from "@angular/router";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {ShoppingList} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";

const app_routes: Routes = [
  {path: "", redirectTo: "/recipes", pathMatch: 'full'},
  {path: "recipes", component: RecipeBookComponent},
  {path: "shopping", component: ShoppingList}
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
