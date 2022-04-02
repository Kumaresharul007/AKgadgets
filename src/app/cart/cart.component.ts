import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { carttype } from '../shared.ts/carttype';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor( private cartservice: CartService,
    @Inject("BaseURL") public BaseURL: any ) { }

    temp: boolean;
    temp2: boolean;

  items: carttype[];
  ngOnInit(): void {
      this.cartservice.getproducts().subscribe((items) => this.items = items);
      if(this.items.length == 0){
        this.temp = true;
      }
      else{
        this.temp2 = true;
      }
  }

  removefromcart(): void{
    this.items = [];
    this.temp = true;
    this.temp2 = false;
  }
}
