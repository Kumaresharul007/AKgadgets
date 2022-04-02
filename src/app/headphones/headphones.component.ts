import { Component, Inject, OnInit } from '@angular/core';
import { HeadphonesService } from '../services/headphones.service';
import { Headphones } from '../shared.ts/headphone';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.scss']
})
export class HeadphonesComponent implements OnInit {

  constructor( private headphoneservice: HeadphonesService,
    @Inject("BaseURL") public BaseURL : any ) { }

  headphones: Headphones[];

  ngOnInit(): void {
    this.headphoneservice.getheadphones().subscribe((headphones) => this.headphones = headphones);
  }

}
