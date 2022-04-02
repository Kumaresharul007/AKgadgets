import { Component, Inject, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import { Mobiles } from '../shared.ts/mobiles';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {

  constructor( private mobileservice: MobileService,
    @Inject("BaseURL") public BaseURL : any ) { }

  mobiles: Mobiles[];

  ngOnInit(): void {
    this.mobileservice.getmobiles().subscribe((mobiles) => this.mobiles = mobiles);
  }

}
