import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {PersonService} from '../services/person.service'

@Component({
  selector: 'updatePerson',
  styleUrls: ['./updatePerson.scss'],
  templateUrl: './updatePerson.component.html'
})

export class UpdatePersonComponent implements OnInit{
  @Input() person: any;
  personForm: FormGroup;
  formErrors = {
    'name': [],
    'lastname': [],
    'age': []
  };
  validationMessages = {
    'name': {
      'required':      'Name is required.'
    },
    'lastname': {
      'required':      'Last name is required'
    },
    'age': {
      'required':      'Age is required'
    },
  };

  constructor(
    private personService: PersonService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.personForm = new FormGroup({
      name: new FormControl(this.person.name, Validators.required),
      lastname: new FormControl(this.person.surname, Validators.required),
      age: new FormControl(this.person.age, Validators.required),
      able: new FormControl(this.person.enabled, Validators.required)
    });
    this.subcribeToFormChanges();
  }

  subcribeToFormChanges(){
    const myFormValueChanges$ = this.personForm.valueChanges;
    myFormValueChanges$.subscribe(x =>{
      if (!this.personForm) { return; }
        const form = this.personForm;
        for (const field in this.formErrors) {
          // clear previous error message
          this.formErrors[field] = [];
          this.personForm[field] = '';
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
    this.router.navigate(['/person']);
  }

  onSubmit(values){
    let personId = this.person.id;
    this.personService.updatePerson(personId,values)
    .then(res => this.router.navigate(['/person']))
  }
}
