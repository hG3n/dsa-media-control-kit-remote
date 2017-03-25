import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {RequestHandlerService} from "./request-handler.service";

@Injectable()
export class TileRequestHandlerService extends RequestHandlerService {

  private base_url: string = "http://192.168.1.108:8080/";

  constructor(http: Http) {
    super(http);
  }

  /**
   * send request to play the selected tile
   * @param tile_id
   * @returns {Observable<Response>}
   */
  public requestPlay(tile_id: string): Observable<Response> {
    let url: string = this.base_url + "preset?play=" + tile_id;
    return this.sendGetRequest(url);
  }

  /**
   * send request to pause the selected tile
   * @param tile_id
   * @returns {Observable<Response>}
   */
  public requestPause(tile_id: string): Observable<Response> {
    let url: string = this.base_url + "preset?stop=" + tile_id;
    return this.sendGetRequest(url);
  }

  /**
   * request tile status from server
   * @returns {Observable<Response>}
   */
  public requestStatus(tile_id: string) {
    let url: string = this.base_url + "preset?is_playing=" + tile_id;
    return this.sendGetRequest(url);
  }

}
