import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
    let link = ["presets"];
    this.router.navigate(link);
  }

  /**
   * login as client
   */
  public continueAsClient(): void {
    let link = ["login"];
    this.router.navigate(link);
  }

}
