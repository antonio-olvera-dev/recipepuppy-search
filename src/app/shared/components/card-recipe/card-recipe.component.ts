import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.css']
})
export class CardRecipeComponent implements OnInit {

  @Input() title: string = "";
  @Input() urlImg: string = "";
  @Input() urlDetailsIn: string = "";
  @Input() ingredients: string = "";
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {

  }

  goDetails() {
    window.open(this.urlDetailsIn, "blank");
  }


}
