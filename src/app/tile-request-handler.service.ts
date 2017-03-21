import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {RequestHandlerService} from "./request-handler.service";

@Injectable()
export class TileRequestHandlerService extends RequestHandlerService{

  private base_url: string;

  constructor(http: Http) {
    super(http);
  }

  /**
   * send request to play the selected tile
   * @param tile_id
   * @returns {Observable<Response>}
   */
  public requestPlay(tile_id: string): Observable<Response> {
    let url: string;
    let body: {};
    return this.sendPostRequest(url, body);
  }


  /**
   * send request to pause the selected tile
   * @param tile_id
   * @returns {Observable<Response>}
   */
  public requestPause(tile_id: string): Observable<Response> {
    let url: string;
    let body: {};
    return this.sendPostRequest(url, body);
  }


  /**
   * request tile status from server
   * @returns {Observable<Response>}
   */
  public requestStatus() {
    let url: string;
    return this.sendGetRequest(url);
  }

}
