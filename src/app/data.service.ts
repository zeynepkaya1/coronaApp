import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './summary.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "https://api.covid19api.com/summary";

  constructor(private http: HttpClient) { }

  getSummary(){
    return this.http.get<RootObject[]>(this.apiUrl);
  }
}
