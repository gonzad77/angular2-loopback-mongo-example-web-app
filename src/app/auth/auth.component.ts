import {Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PersonService} from '../services/person.service'

@Component({
    selector: 'login-component',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.scss']
})

export class AuthComponent implements OnInit{
  @ViewChild('createModal') createModal;
  @Output() onClose = new EventEmitter<any>();
  loginForm: FormGroup;
  formErrors = {
    'email': [],
    'password': []
  };
  validationMessages = {
    'email': {
      'required':      'Email is required',
      'pattern':       'Enter a valid email'
    },
    'password': {
      'required':      'Password is required',
      'minlength':     'Password must be at least 5 characters long',
      'pattern':       'Your password must contain at least one uppercase, one lowercase, and one number'

    }
  };

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    });
    this.subcribeToFormChanges();
  }

  subcribeToFormChanges(){
    const myFormValueChanges$ = this.loginForm.valueChanges;
    myFormValueChanges$.subscribe(x =>{
      if (!this.loginForm) { return; }
        const form = this.loginForm;
        for (const field in this.formErrors) {
          // clear previous error message
          this.formErrors[field] = [];
          this.loginForm[field] = '';
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

  signup(){
    console.log('signUp')
  }

  onSubmit(values){
    this.personService.login(values)
    .then(res => {
      console.log(res)
      this.router.navigate(['/person']);
      this.onClose.emit({message: "A person was logged"});
      })
  }


}
