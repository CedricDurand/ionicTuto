import { Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

    constructor(private http: HttpClient) { }

    getMeteo(): Observable<any>{
      let url = "https://www.prevision-meteo.ch/services/json/Montpellier";
      return this.http.get(url);
    }
}

export class Meteo{

  private days : any[] = [];

  constructor() { }

  pushDay(aDay : any){
    this.days.push(aDay);
  }
}
