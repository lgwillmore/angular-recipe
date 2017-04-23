import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ShoppingList} from "./shopping-list/shopping-list.component";
import {ShoppingListEdit} from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import {IngredientComponent} from "./ingredient/ingredient.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {Header} from "./header/header.component";
import {RecipeListComponent} from "./recipe-book/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-book/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-book/recipe-list/recipe-item/recipe-item.component";
import {DropDownDirective} from "./directives/drop-down.directive";
import {AppRoutingModule} from "./app-routing.module";
import {ShoppingService} from "./shopping-list/shopping.service";
import {RecipeStartComponent} from "./recipe-book/recipe-start/recipe-start.component";
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    ShoppingList,
    ShoppingListEdit,
    IngredientComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    DropDownDirective,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
