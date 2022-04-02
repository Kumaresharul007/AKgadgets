import { Component, Inject, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Mobiles } from '../shared.ts/mobiles';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { carttype } from '../shared.ts/carttype';
import { MatDialog } from '@angular/material/dialog';
import { CartalertComponent } from '../cartalert/cartalert.component';

@Component({
  selector: 'app-mobiledetails',
  templateUrl: './mobiledetails.component.html',
  styleUrls: ['./mobiledetails.component.scss']
})
export class MobiledetailsComponent implements OnInit {

  mobile: Mobiles;
  commentform: FormGroup;
  mobilecopy: Mobiles;
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

  constructor( private location: Location,
    private mobileservice: MobileService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cartservice: CartService,
    private dialog: MatDialog,
    @Inject("BaseURL") public BaseURL : any ) {
      this.createtheform();
    }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.mobileservice.getmobile(id).subscribe((mobile) => {this.mobile = mobile; this.mobilecopy = mobile;});
    this.cartservice.getproducts().subscribe((items => this.items = items));
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
    this.mobilecopy.comments.push(this.commentform.value);
    this.mobileservice.putMobile(this.mobilecopy)
    .subscribe((mobile) => {this.mobile = mobile; this.mobilecopy = mobile;} );
    this.commentform.reset({
      author: "",
      rating: 5,
      comment: ""
    });
    alert("Your comment has been posted successfully");
  }

  goback(): void{
    this.location.back();
  }
  addtocart(): void{
    this.items.push(this.mobile);
    this.dialog.open(CartalertComponent);
  }
}
