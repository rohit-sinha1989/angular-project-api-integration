import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service/api-service.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

  baseUrl = 'https://dummyjson.com';

  constructor(private api:ApiServiceService) { 

  }

  async fetchRecipesListAsync(){
     return await this.api.get(this.baseUrl+'/recipes');
  }

  fetchRecipesListObser(){
    return this.api.get(this.baseUrl + '/recipes');
  }

  
}
