import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseURL } from '../shared.ts/baseURL';
import { Calculator } from '../shared.ts/calculator';
import { CALCULATORS } from '../shared.ts/calculators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor( private http: HttpClient ) { }

  getcalculator(): Observable<Calculator[]> {
    return this.http.get<Calculator[]>(baseURL + "calculators");
  }
  getspecificcalculator(id: string): Observable<Calculator>{
    return this.http.get<Calculator>(baseURL + "calculators/" + id); 
  }

  putCalculator(calculator: Calculator): Observable<Calculator>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.put<Calculator>(baseURL + "calculators/" + calculator.id, calculator, httpOptions);
  }
}
