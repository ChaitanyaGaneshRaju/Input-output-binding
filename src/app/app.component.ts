import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='InputOutputBinding'
  list:Array<string>=[];


  addName(nameElement:HTMLInputElement){
    this.list.push(nameElement.value);
  }

  removeName(id:number){
    // delete this.list[id]
    this.list.splice(id, 1);
  }

}
