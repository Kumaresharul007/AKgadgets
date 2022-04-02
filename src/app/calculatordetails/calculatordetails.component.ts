import { Component, Inject, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { Location } from '@angular/common';
import { Params,  ActivatedRoute} from '@angular/router';
import { Calculator } from '../shared.ts/calculator';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { carttype } from '../shared.ts/carttype';
import { MatDialog } from '@angular/material/dialog';
import { CartalertComponent } from '../cartalert/cartalert.component';

@Component({
  selector: 'app-calculatordetails',
  templateUrl: './calculatordetails.component.html',
  styleUrls: ['./calculatordetails.component.scss']
})
export class CalculatordetailsComponent implements OnInit {

  calculator: Calculator;
  commentform: FormGroup;
  calculatorcopy: Calculator;
  items: carttype[];

  commenterrors : any = {
    "author":  '',
    "comment": '',
  }

  validations: any = {
    "author": {
      "minlength": 'This field should be of atleast 2 characters',
      "required": 'This field is required',
    },
    "comment": {
      "required": 'This field is required',
    }
  }

  constructor( private calculatorservice: CalculatorService,
    private cartservice: CartService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject("BaseURL") public BaseURL: any ) { 
      this.createtheform();
     }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.calculatorservice.getspecificcalculator(id).subscribe((calculator) => {this.calculator = calculator; this.calculatorcopy = calculator;});
    this.cartservice.getproducts().subscribe((items) => this.items = items);
  }
  createtheform() {
    this.commentform = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: 5,
      comment: ['', [Validators.required]]
    });
    this.commentform.valueChanges
    .subscribe((data) => this.onvaluechanged(data));
    this.onvaluechanged();
  }

  onvaluechanged(data?:any){
    if(!this.commentform) { return; };
    const form = this.commentform;
    for(const field in this.commenterrors){
      if(this.commenterrors.hasOwnProperty(field)){
        this.commenterrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid){
          const messages = this.validations[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.commenterrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit(){
    console.log(this.commentform.value);
    this.commentform.value.date = new Date().toISOString();
    this.calculatorcopy.comments.push(this.commentform.value);
    this.calculatorservice.putCalculator(this.calculatorcopy)
    .subscribe((calculator) => {this.calculator = calculator; this.calculatorcopy = calculator;} );
    this.commentform.reset({
      author: "",
      rating: 5,
      comment: ""
    });
    alert("Your comment has been posted successfully");
  }
  goback(): void {
    this.location.back();
  }
  addtocart(){
    this.items.push(this.calculator);
    this.dialog.open(CartalertComponent);
  }

}
