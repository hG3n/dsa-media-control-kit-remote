import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  template: '<router-outlet></router-outlet>'
})
export class HomeComponent {

  private router: Router;

  constructor(r: Router) {
    this.router = r;

    let link = ["home", "select"];
    this.router.navigate(link);
  }
}
