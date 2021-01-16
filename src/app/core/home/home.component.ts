import { Component, OnInit } from '@angular/core';
import { RecipepuppyService } from 'src/app/shared/services/recipepuppy.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: RecipepuppyService, private _snackBar: MatSnackBar) { }

  searchBool: boolean = false;
  pages: string = "1";
  query: string = "";
  ingredients: string[] = [];
  recipes: Recipes[] = []
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  ngOnInit(): void {

  }

  async search() {
    try {

      if (this.query.length > 0) {
        let newIngredients: string = "";
        if (this.ingredients) {
          for (const item of this.ingredients) {
            newIngredients += `${item},`;
          }
        }

        const data = await this.api.getRecipe(this.query, newIngredients, this.pages);
        if (data) {

          for (const item of data) {
            const it: Recipes = item;
            let newRecipe = it;
            if (!it.title) { newRecipe.title = "No title" }
            if (!it.href) { newRecipe.href = "http://localhost:4200" }
            if (!it.ingredients) { newRecipe.ingredients = "none" }
            if (!it.thumbnail) { newRecipe.thumbnail = "https://www.accesoriosresa.es/images/fotos/no_disponible.jpg" }
            this.recipes.push(newRecipe);
          }

          this.searchBool = true;
        } else {
          alert('An error has occurred');
        }

      } else {
        this.toast();
      }


    } catch (error) {
      console.log(error);

    }
  }

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.ingredients.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

  }
  remove(item: string) {
    const index = this.ingredients.indexOf(item);
    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  reset() {

    this.pages = "1";
    this.query = "";
    this.ingredients = [];
    this.searchBool = false;

  }

  toast() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}


interface Recipes {
  title: string,
  href: string,
  ingredients: string,
  thumbnail: string
}


@Component({
  selector: 'snack-bar-component',
  templateUrl: './snack-bar-component.html',
  styles: [`
  .spam-snack{
    width: 100%;
    display:flex;
    justify-content:center;
    color:hotpink;
  }

  `],
})
export class PizzaPartyComponent { }