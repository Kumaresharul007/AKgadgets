import { Component, Inject, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { Calculator } from '../shared.ts/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  calculators: Calculator[];

  constructor( private calculatorservice: CalculatorService,
    @Inject("BaseURL") public BaseURL: any ) { }

  ngOnInit(): void {
    this.calculatorservice.getcalculator().subscribe((calculators) => this.calculators = calculators);
  }

}
