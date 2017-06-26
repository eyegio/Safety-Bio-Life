import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SblService {
  private _url_api: string = "../assets/apidata/sbl.json";

  constructor(private _http: Http){}

  getTables() {
    let username: string = 'admin';  // QUI gli fai scrivere user e password che prendi dal form di login
    let password: string = 'admin';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    return this._http.get(this._url_api, {headers: headers})
      .map((response:Response) => response.json())
      .catch(this._errorHandler);
  }

  _errorHandler(error: Response){
    console.log(error);
    return Observable.throw(error || "Server error");
  }

  login() {
    console.log('login clicked');
  }

  logout() {
    console.log('logout clicked');
  }

}
