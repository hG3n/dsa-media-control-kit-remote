import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RequestHandlerService {

  public http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * perform get request
   * @param url
   * @returns {Observable<R>}
   */
  public sendGetRequest(url: string): Observable<Response> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }


  /**
   * perform post request
   * @param url
   * @param body
   * @returns {Observable<R>}
   */
  public sendPostRequest(url: string, body: any): Observable<Response> {
    return this.http.post(url, body)
      .map(this.extractData)
      .catch(this.handleError);
  }


  /**
   * extract data from request
   * @param res
   * @returns {any}
   */
  private extractData(res: Response): any {
    let body: any = res.json();
    return body;
  }


  /**
   * handle occuring errors
   * @param error
   * @returns {any}
   */
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
