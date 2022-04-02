import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Feedback } from '../shared.ts/feedback';
import { Observable } from 'rxjs';
import { baseURL } from '../shared.ts/baseURL';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor( private http: HttpClient ) { }

  putfeedback(feedback: Feedback): Observable<Feedback>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback/', feedback, httpOptions);
  }

}
