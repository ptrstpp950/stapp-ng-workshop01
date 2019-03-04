import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'randomName';
  constructor(private http: HttpClient) {
    this.http.get('assets/names.json').subscribe((data:string[]) => {
      const length = data.length;
      const index = Math.floor(Math.random() * (length+1));
      this.name = data[index % length];
     });
  }
}
