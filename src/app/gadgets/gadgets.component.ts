import { Component, OnInit, Inject } from '@angular/core';
import { GadgetService } from '../services/gadget.service';
import { Gadget } from '../shared.ts/gadget';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.scss']
})
export class GadgetsComponent implements OnInit {

  gadgets: Gadget[];

  constructor( private gadgetservice: GadgetService,
    @Inject('BaseURL') public BaseURL: any ) { }

  ngOnInit(): void {
    this.gadgetservice.getgadgets().subscribe((gadgets) => this.gadgets = gadgets);
  }

}
