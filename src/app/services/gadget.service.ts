import { Injectable } from '@angular/core';
import { Gadget } from '../shared.ts/gadget';
import { GADGETS } from '../shared.ts/gadgets';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared.ts/baseURL';

@Injectable({
  providedIn: 'root'
})
export class GadgetService {

  constructor( private http: HttpClient ) { }

  getgadgets(): Observable<Gadget[]> {
    return this.http.get<Gadget[]>(baseURL + 'gadgets');
  }

  getgadget(id: string): Observable<Gadget>{
    return this.http.get<Gadget>(baseURL + 'gadgets/' + id);
  }
  putGadget(gadget: Gadget): Observable<Gadget>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.put<Gadget>(baseURL + 'gadgets/' + gadget.id, gadget, httpOptions);
  }
}
