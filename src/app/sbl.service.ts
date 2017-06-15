import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SblService {
  private _url_api: string = "../assets/apidata/sbl.json";
  // private _url_api: string = "http://sbl.bitvarklab.com/web/sms/all";

  constructor(private _http: Http){}
    getMessages() {
      return this._http.get(this._url_api)
        .map((response:Response) => response.json())
        .catch(this._errorHandler);
    }
  
    _errorHandler(error: Response){
      console.log(error);
      return Observable.throw(error || "Server error");
    }

}
