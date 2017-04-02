import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-ipcheck',
  template: 'initializing...'
})
export class IpcheckComponent implements OnInit {

  private route: ActivatedRoute;
  private router: Router;
  private data_service: DataService;

  /**
   * c'tor
   * @param r
   * @param rhs
   */
  constructor(r: ActivatedRoute,
              router: Router,
              ds: DataService) {
    this.route = r;
    this.router = router;
    this.data_service = ds;
  }

  /** * on init lifcycle hook
   */
  ngOnInit() {
    this.route.params.forEach((param: Params) => {
      let ip = param["ip"];
      if (ip) {
        let success = this.data_service.setBaseUrlFromURL(ip);
        if (!success) {
          alert("It appears, that the IP has the wrong format, tryharder.jpg!")
        }
      }
    });
  }

}
