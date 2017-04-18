import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-home',
  template: '<router-outlet></router-outlet>'
})
export class ClientHomeComponent implements OnInit {

  private router: Router;

  /**
   * c'tor
   * @param r
   */
  constructor(r: Router) {
    this.router = r;
  }

  /**
   * on init lifecycle hook
   */
  ngOnInit() {
    let link = ["home", "client", "chat"];
    this.router.navigate(link);
  }

}
