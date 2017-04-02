import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  public base_url: string;

  constructor() {
  }

  /**
   *
   * @param url
   * @returns {boolean}
   */
  public setBaseUrl(url: string): boolean {
    if(this.checkIP(url)) {
      this.base_url = url;
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param url
   * @returns {boolean}
   */
  public setBaseUrlFromURL(url: string) : boolean {
    url = url.split(".").join("-");
    console.log(url);
    if(this.checkIP(url)) {
      this.base_url = url;
      return true;
    } else {
      return false;
    }
  }

  /**
   * checks whether the ip has the correct format
   * @param ip
   * @returns {boolean}
   */
  public checkIP(ip: string): boolean {
    if(ip == "") {
      return false;
    }

    let temp = ip.split('.');
    for(let block of temp) {
      let t = +block;
      if(t < 0 || t > 255) {
        return false;
      }
    }
    return true;
  }

}
