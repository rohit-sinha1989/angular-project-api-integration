import { Component, OnInit } from '@angular/core';
import { RecipesServiceService } from 'src/app/services/recipes-service/recipes-service.service';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipesList = [];
  selectedRecipeItem = [];
  showRecipeModal: boolean = false;


  constructor(public recipesServices:RecipesServiceService) { }

  ngOnInit(): void {
    this.fetchRecipesData();
  }

  fetchRecipesData()
  {
    try {
      // try something exceptional here
      this.recipesServices.fetchRecipesListObser().subscribe((resp:any) =>{
        this.recipesList = resp.recipes;
        console.log("recipesList =>", this.recipesList);
      });
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  }

  showDetailsInfo(itemDetails)
  {
    console.log("Selected Item =>", itemDetails);
    this.showRecipeModal = true;
    this.selectedRecipeItem = itemDetails;
  }
}
