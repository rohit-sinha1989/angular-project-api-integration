import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';
import { HeaderComponentComponent } from './common-module/header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
