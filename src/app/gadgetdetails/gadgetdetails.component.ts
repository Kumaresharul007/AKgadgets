import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GadgetService } from '../services/gadget.service';
import { Location } from '@angular/common';
import { Gadget } from '../shared.ts/gadget';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared.ts/comment';
import { CartService } from '../services/cart.service';
import { carttype } from '../shared.ts/carttype';
import { MatDialog } from '@angular/material/dialog';
import { CartalertComponent } from '../cartalert/cartalert.component';

@Component({
  selector: 'app-gadgetdetails',
  templateUrl: './gadgetdetails.component.html',
  styleUrls: ['./gadgetdetails.component.scss'],
})
export class GadgetdetailsComponent implements OnInit {
  gadget: Gadget;
  gadgetcopy: Gadget;
  commentform: FormGroup;
  cmnt: Comment;
  items: carttype[];

  commentErrors : any = {
    'author' : '',
    'comment' : '',
  };
  validations : any = {
    'author' : {
      'required' : 'This field is required',
      'minlength': 'Name should be atleast 2 characters long',
    },
    'comment': {
      'required': 'This field is required',
    },
  };

  constructor(private gadgetservice: GadgetService,
    private cartservice: CartService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject('BaseURL') public BaseURL: any) { 
      this.createtheform();
     }

     ngOnInit(): void {
      let id = this.route.snapshot.params['id'];
      this.gadgetservice.getgadget(id).subscribe((gadget) => {this.gadget = gadget; this.gadgetcopy = gadget});
      this.cartservice.getproducts().subscribe((items) => this.items = items);
    }

  createtheform(){
    this.commentform = this.fb.group({
      author : ['', [Validators.required, Validators.minLength(2)]],
      comment : ['', [Validators.required]],
      rating: 5,
    });
    this.commentform.valueChanges
    .subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.commentform) { return; }
    const form = this.commentform;
    for (const field in this.commentErrors ) {
      if (this.commentErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.commentErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validations[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.commentErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  goback(): void {
    this.location.back();
  }
  onSubmit() {
    this.cmnt = this.commentform.value;
    console.log(this.cmnt);
    this.cmnt.date = new Date().toISOString();
    this.gadgetcopy.comments.push(this.cmnt);
    this.gadgetservice.putGadget(this.gadgetcopy)
    .subscribe(gadget => {
      this.gadget = gadget; this.gadgetcopy = gadget;});
    this.commentform.reset({
      author : "",
      comment : "",
      rating: 5,
    });
    alert("Your comment has been posted successfully");
  }
  addtocart(){
    this.items.push(this.gadget);
    this.dialog.open(CartalertComponent);
  }
}
