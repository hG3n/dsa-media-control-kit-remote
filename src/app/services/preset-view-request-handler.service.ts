import {Injectable} from '@angular/core';
import {RequestHandlerService} from "./request-handler.service";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {DataService} from "../data.service";

@Injectable()
export class PresetViewRequestHandlerService extends RequestHandlerService {

  private data_service: DataService;

  /**
   * c'tor
   * @param http
   */
  constructor(http: Http, ds: DataService) {
    super(http);
    this.data_service = ds;
  }

  /**
   * request list of current project tiles
   * @returns {Observable<Response>}
   */
  public requestTileList(): Observable<Response> {
    let url: string = this.data_service.base_url + "preset";
    return this.sendGetRequest(url);
  }
}
