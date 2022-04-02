import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { carts } from '../shared.ts/cart';
import { carttype } from '../shared.ts/carttype';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  carts: carttype[];
  
  getproducts(): Observable<carttype[]>{
    return of(carts);
  }
}
