import {Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PersonService} from '../services/person.service'

@Component({
    selector: 'signup-modal',
    templateUrl: './authSignup.modal.html',
    exportAs: 'childAuthSignup',
    styleUrls: ['./auth.scss']
})

export class AuthSignupModal implements OnInit{

  @ViewChild('signupModal') signupModal;
  signupForm: FormGroup;
  formErrors = {
    'name': [],
    'surname': [],
    'age': [],
    'email': [],
    'password': []
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'surname': {
      'required': 'Surname is required'
    },
    'age': {
      'required': 'Age is required'
    },
    'email':{
      'required':      'Email is required',
      'pattern':       'Enter a valid email'
    },
    'password':{
      'required':      'Password is required',
      'minlength':     'Password must be at least 5 characters long',
      'pattern':       'Your password must contain at least one uppercase, one lowercase, and one number'
    }
  };

  constructor(
    private personService: PersonService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      able: new FormControl(false)
    });
    this.subcribeToFormChanges();
  }

  subcribeToFormChanges(){
    const myFormValueChanges$ = this.signupForm.valueChanges;
    myFormValueChanges$.subscribe(x =>{
      if (!this.signupForm) { return; }
        const form = this.signupForm;
        for (const field in this.formErrors) {
          // clear previous error message
          this.formErrors[field] = [];
          this.signupForm[field] = '';
          const control = form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              this.formErrors[field].push(messages[key]);
            }
          }
        }
    })
  }

  cancel(){
    this.signupModal.hide();
  }

  onSubmit(values){
    this.personService.createPerson(values)
    .then(function(res) {
      this.signupModal.hide();
    }, function(err){
      console.log(err)
      this.signupModal.hide();
    });
  }

  show(){
    this.signupModal.show();
  }
}
