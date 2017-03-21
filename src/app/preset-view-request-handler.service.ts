import { Injectable } from '@angular/core';
import {RequestHandlerService} from "./request-handler.service";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PresetViewRequestHandlerService extends RequestHandlerService{

  /**
   * c'tor
   * @param http
   */
  constructor(http:Http) {
    super(http);
  }


  /**
   * request list of current project tiles
   * @returns {Observable<Response>}
   */
  public requestTileList(): Observable<Response> {
    let url: string;
    return this.sendGetRequest(url);
  }
}
