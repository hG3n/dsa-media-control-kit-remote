import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {RequestHandlerService} from "./request-handler.service";
import {DataService} from "../data.service";

@Injectable()
export class TileRequestHandlerService extends RequestHandlerService {

  private data_service: DataService;

  constructor(http: Http, ds: DataService) {
    super(http);
    this.data_service = ds;
  }

  /**
   * send request to play the selected tile
   * @param tile_id
   * @returns {Observable<Response>}
   */
  public requestPlay(tile_id: string): Observable<Response> {
    let url: string = this.data_service.base_url + "preset?play=" + tile_id;
    return this.sendGetRequest(url);
  }

  /**
   * send request to pause the selected tile
   * @param tile_id
   * @returns {Observable<Response>}
   */
  public requestPause(tile_id: string): Observable<Response> {
    let url: string = this.data_service.base_url + "preset?stop=" + tile_id;
    return this.sendGetRequest(url);
  }

  /**
   * request tile status from server
   * @returns {Observable<Response>}
   */
  public requestStatus(tile_id: string) {
    let url: string = this.data_service.base_url + "preset?is_playing=" + tile_id;
    return this.sendGetRequest(url);
  }

}
