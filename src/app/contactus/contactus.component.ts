import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../shared.ts/feedback';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackalertComponent } from '../feedbackalert/feedbackalert.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {

  feedbackform: FormGroup;
  feedback: Feedback;

  feedbackerrors : any = {
    'firstname' : '',
    'lastname': '',
    'email': '',
    'telnum': '',
    'feedback' : '',
  };
  validations : any = {
    'firstname' : {
      'required' : 'This field is required',
      'minlength': 'FirstName should be atleast 2 characters long',
    },
    'lastname' : {
      'required' : 'This field is required',
      'minlength': 'LastName should be atleast 2 characters long',
    },
    'email': {
      'required': 'This field is required',
      'email': 'This field should be in valid format',
    },
    'telnum': {
      'required': 'This field is required'
    },
    'feedback': {
      'required': 'This field is required',
    },
  };

  constructor( private feedbackservice: FeedbackService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject('BaseURL') public BaseURL: any) { 
      this.createtheform();
    }
     ngOnInit(): void {
    }

  createtheform(){
    this.feedbackform = this.fb.group({
      firstname : ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telnum: [  , [Validators.required]],
      feedback : ['', [Validators.required]],
      toggle: false,
      type: 'None',
    });
    this.feedbackform.valueChanges
    .subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.feedbackform) { return; }
    const form = this.feedbackform;
    for (const field in this.feedbackerrors ) {
      if (this.feedbackerrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.feedbackerrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validations[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.feedbackerrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onsubmit(){
    console.log(this.feedbackform.value);
    this.feedbackservice.putfeedback(this.feedbackform.value)
    .subscribe((feedback) => this.feedback = feedback);
    this.feedbackform.reset({
      firstname: '',
      lastname: '',
      email: '',
      telnum: 91,
      feedback: '',
      toggle: false,
      type: 'None',
    })
  }
  openalert(){
    this.dialog.open(FeedbackalertComponent);
  }
}
