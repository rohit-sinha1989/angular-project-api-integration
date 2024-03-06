import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';

const routes: Routes = [
  {
    path:'', component:RecipesListComponent
  },
  {
    path:'recipes-list', component:RecipesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
