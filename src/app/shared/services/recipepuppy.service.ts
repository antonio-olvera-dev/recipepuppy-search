import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipepuppyService {



  constructor(private htttp: HttpClient) {

  }

  getRecipe(query: String = "", ingredients: String = "", page: string = "1"): any {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });

    this.htttp.get(`http://www.recipepuppy.com/api/?i=${ingredients},garlic&q=${query}&p=${page}`, { headers }).subscribe((data: any) => {
      console.log(data);


    }, (error) => {

    });
  }


}
