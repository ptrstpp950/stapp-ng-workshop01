import { Component } from '@angular/core';
import * as namesJson from '../assets/names.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'randomName';
  constructor() {
    const length = namesJson["default"].length;
    const names:string[] = namesJson["default"];
    let index = Math.floor(Math.random() * (length+1));
    this.name = names[index % length];
  }
}
