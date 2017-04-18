import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {ConnectionService} from "../connection.service";

@Component({
  selector: 'app-ipdialog',
  templateUrl: './ipdialog.component.html',
  styleUrls: ['./ipdialog.component.scss']
})
export class IpdialogComponent {

  private data_service: DataService;
  private router: Router;
  private connection_service: ConnectionService;

  @ViewChild("ipinput") private ip_input: ElementRef;

  /**
   * c'tor
   * @param rh
   * @param router
   */
  constructor(ds: DataService, router: Router, cs: ConnectionService) {
    this.data_service = ds;
    this.router = router;
    this.connection_service = cs;

    this.initialize();
  }

  /**
   * intializes the app
   */
  private initialize() {
    let url: string = this.connection_service.restoreBaseUrlFromSession();
    console.log('url', url);

    if (url != undefined || url != null) {
      let success = this.data_service.setBaseUrl(url);
      if (success) {
        let url = ['home'];
        this.router.navigate(url);
      }
    }
  }

  /**
   * get input ip
   */
  public getInputIP(): void {
    // get input ip
    let value = this.ip_input.nativeElement.value;

    let url: string = "http://" + value + ":8080/";
    let success = this.data_service.setBaseUrl(url);

    if (success) {
      this.connection_service.saveBaseUrlToSession(url);
      let link = ['home'];
      this.router.navigate(link);
    } else {
      alert("It appears, that the IP has the wrong format, tryharder.jpg!")
    }
  }
}
