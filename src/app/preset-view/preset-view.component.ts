import {Component, OnInit} from '@angular/core';
import {PresetViewRequestHandlerService} from "../services/preset-view-request-handler.service";

@Component({
  selector: 'app-preset-view',
  templateUrl: './preset-view.component.html',
  styleUrls: ['./preset-view.component.css'],
  providers: [PresetViewRequestHandlerService]
})
export class PresetViewComponent implements OnInit {

  private request_handler: PresetViewRequestHandlerService;

  private data_ready: boolean;
  private error_message: any;

  private presets: any;

  /**
   * c'tor
   * @param rh
   */
  constructor(rh: PresetViewRequestHandlerService) {
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
          console.log(data);
          if (data) {
            this.data_ready = true;
            this.presets = data;
          }
        },
        error => {
          console.log(error);
          this.error_message = <any>error;
        }
      )
  }

}
