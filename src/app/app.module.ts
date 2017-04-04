import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ShoppingList} from './shopping-list/shopping-list.component';
import {ShoppingListEdit} from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { Header } from './header/header.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { DropDownDirective } from './directives/drop-down.directive';

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
    RecipeItemComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
