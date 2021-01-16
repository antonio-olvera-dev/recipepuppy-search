import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipepuppyService {

  constructor(private htttp: HttpClient) { }

  getRecipe(query: String = "", ingredients: String = "", page: string = "1"): any {
    return new Promise((resolve, reject) => {

      this.htttp.post(`http://localhost:3000`, { query: query, ingredients: ingredients, page: page }).subscribe((data: any) => {
        resolve(data.results);
      }, (error) => {
        console.log(error);
        reject(false);
      });

    });
  }


}
