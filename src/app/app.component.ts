import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Model}  from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  model = new Model();

  getItems() {
    return this.model.items;
  }

}
