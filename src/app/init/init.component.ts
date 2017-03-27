import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent {

  private data_service: DataService;
  private router: Router;

  @ViewChild("ipinput") private ip_input: ElementRef;

  /**
   * c'tor
   * @param rh
   * @param router
   */
  constructor(ds: DataService, router: Router) {
    this.data_service = ds;
    this.router = router;
  }

  /**
   * get input ip
   */
  public getInputIP(): void {
    // get input ip
    let value = this.ip_input.nativeElement.value;
    let success = this.data_service.setBaseUrl(value);

    if(success) {
      let url = ['home'];
      this.router.navigate(url);
    } else {
      alert("It appears, that the IP has the wrong format, tryharder.jpg!")
    }
  }

}
