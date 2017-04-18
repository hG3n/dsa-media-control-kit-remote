import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-home-select',
  templateUrl: './home-select.component.html',
  styleUrls: ['./home-select.component.scss']
})
export class SelectHomeComponent {

  private router: Router;
  private data_service: DataService;

  /**
   * c'tor
   * @param r
   * @param rhs
   */
  constructor(router: Router,
              ds: DataService) {
    this.router = router;
    this.data_service = ds;
  }

  /**
   * continue as master to preset list
   */
  public continueAsMaster(): void {
    let link = ["home", "master", "presets"];
    this.router.navigate(link);
  }

  /**
   * login as client
   */
  public continueAsClient(): void {
    let link = ["home", "client"];
    this.router.navigate(link);
  }

}
