import {Routes, RouterModule} from "@angular/router";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {ShoppingList} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {RecipeStartComponent} from "./recipe-book/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipe-book/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-book/recipe-edit/recipe-edit.component";

const app_routes: Routes = [
  {path: "", redirectTo: "/recipes", pathMatch: 'full'},
  {
    path: "recipes", component: RecipeBookComponent,
    children: [
      {path: "", pathMatch: 'full', component: RecipeStartComponent},
      {path: "new", component: RecipeEditComponent},
      {path: ":id", component: RecipeDetailComponent},
      {path: ":id/edit", component: RecipeEditComponent}
    ]
  },
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
