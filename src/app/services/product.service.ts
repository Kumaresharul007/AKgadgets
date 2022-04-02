import { Injectable } from '@angular/core';
import { PRODUCTS } from '../shared.ts/ourproduct';
import { Products } from '../shared.ts/ourproducts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getproducts(): Observable<Products[]> {
    return of(PRODUCTS);
  }


}
