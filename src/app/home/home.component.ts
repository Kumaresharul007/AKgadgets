import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../shared.ts/ourproducts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private productservice: ProductService ) { }

  products: Products[];

  ngOnInit(): void {
    this.productservice.getproducts().subscribe((products) => this.products = products);
  }

}
