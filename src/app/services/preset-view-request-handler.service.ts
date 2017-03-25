import {Injectable} from '@angular/core';
import {RequestHandlerService} from "./request-handler.service";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PresetViewRequestHandlerService extends RequestHandlerService {

  private base_url: string = "http://192.168.1.108:8080/";

  /**
   * c'tor
   * @param http
   */
  constructor(http: Http) {
    super(http);
  }

  /**
   * request list of current project tiles
   * @returns {Observable<Response>}
   */
  public requestTileList(): Observable<Response> {
    let url: string = this.base_url + "preset";
    return this.sendGetRequest(url);
  }
}
