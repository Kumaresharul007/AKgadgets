import { Injectable } from '@angular/core';
import { Head, Observable,of } from 'rxjs';
import { Headphones } from '../shared.ts/headphone';
import { HEADPHONES } from '../shared.ts/headphones';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared.ts/baseURL';

@Injectable({
  providedIn: 'root'
})
export class HeadphonesService {

  constructor( private http: HttpClient ) { }

  getheadphones(): Observable<Headphones[]> {
    return this.http.get<Headphones[]>(baseURL + "headphones");
  }
  getheadphone(id: string): Observable<Headphones>{
    return this.http.get<Headphones>(baseURL + "headphones/" + id);
  }
  putHeadphone(headphone: Headphones): Observable<Headphones>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.put<Headphones>(baseURL + "headphones/" + headphone.id, headphone, httpOptions);
  }
}
