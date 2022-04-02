import { Injectable } from '@angular/core';
import { Mobiles } from '../shared.ts/mobiles';
import { MOBILES } from '../shared.ts/mobile';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared.ts/baseURL';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor( private http: HttpClient ) { }

  getmobiles(): Observable<Mobiles[]> {
    return this.http.get<Mobiles[]>(baseURL + "mobiles");
  }

  getmobile(id: string): Observable<Mobiles>{
    return this.http.get<Mobiles>(baseURL + "mobiles/" + id);
  }

  putMobile(mobile: Mobiles): Observable<Mobiles>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.put<Mobiles>(baseURL + 'mobiles/' + mobile.id, mobile, httpOptions);
  }
}
