import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global, Country, RootObject } from './summary.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "https://api.covid19api.com/summary";

  constructor(private _http: HttpClient) { }

  getSummary(){
    return this._http.get<RootObject[]>(this.apiUrl);
  }
}
