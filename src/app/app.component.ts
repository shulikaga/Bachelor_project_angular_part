import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
private title: String;

  constructor( private location: Location ) {
    this.title = 'sabisapp-angular';
  }
  goBack() {
    // window.history.back();
    this.location.back();
  }
}
