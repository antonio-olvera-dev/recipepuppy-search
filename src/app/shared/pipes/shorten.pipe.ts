import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(text: string, max: number, capitalize?: boolean): string {

    let newText: string = "";

    if (text.length > max) {

      for (let i = 0; i < max; i++) {
        const element = text[i];
        newText += element;
      }
      newText += "...";


    } else {
      newText = text;
    }

    if (capitalize === true) {

      let textArray: string[] = newText.split(" ");
      let textTemp: string = "";

      for (const item of textArray) {
        textTemp += `${item[0].toUpperCase()}${item.substring(1, item.length).toLowerCase()} `
      }
      newText = textTemp;
      
    }

    return newText;
  }

}
