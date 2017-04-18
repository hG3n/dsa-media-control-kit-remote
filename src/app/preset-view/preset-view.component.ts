import {Component, OnInit} from '@angular/core';
import {PresetViewRequestHandlerService} from "../services/preset-view-request-handler.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-preset-view',
  templateUrl: './preset-view.component.html',
  styleUrls: ['./preset-view.component.scss'],
  providers: [PresetViewRequestHandlerService]
})
export class PresetViewComponent implements OnInit {

  private route: ActivatedRoute;

  private request_handler: PresetViewRequestHandlerService;

  private data_ready: boolean;
  private error_message: any;

  private presets: any;

  /**
   * c'tor
   * @param rh
   */
  constructor(ar: ActivatedRoute,
              rh: PresetViewRequestHandlerService) {
    this.route = ar;
    this.request_handler = rh;
  }

  /**
   * on init lifecycle hook
   */
  ngOnInit() {
    this.getViewElements();
  }

  /**
   * request view elements
   */
  private getViewElements() {
    this.request_handler.requestTileList()
      .subscribe(
        data => {
          console.log("preset data: ", data);
          if (data) {

            // if (data["return"]["scene"]["tiles"] > 0) {
              this.data_ready = true;
              this.presets = data;
            // } else {
            //   alert("get your shit together, add some fucking presets");
            // }

          }
        },
        error => {
          console.log(error);
          this.error_message = <any>error;
        }
      )
  }

}
