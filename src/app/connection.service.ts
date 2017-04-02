import {Injectable} from '@angular/core';

@Injectable()
export class ConnectionService {

  private session_key: string = "pap_media_control_kit";

  constructor() {
  }

  /**
   * stores the current url in the js session obj
   * @param url
   */
  public saveBaseUrlToSession(url: string): void {
    console.log("storing url: ", url);
    localStorage.setItem(this.session_key, url);
  }

  /**
   * restore the last base url from session storage
   * @returns {any}
   */
  public restoreBaseUrlFromSession(): string {
    let store = localStorage.getItem(this.session_key);
    console.log("restored");
    console.log(store);
    return store;
  }

}
