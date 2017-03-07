import {Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PersonService} from '../services/person.service'

@Component({
    selector: 'create-modal',
    templateUrl: './personCreate.modal.html',
    exportAs: 'childCreate',
    styleUrls: ['./person.scss']
})

export class PersonCreateModal implements OnInit{
  @ViewChild('createModal') createModal;
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
  ) {}

  ngOnInit(): void {
    this.personForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      able: new FormControl(false, Validators.required)
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
    this.createModal.hide();
  }

  onSubmit(values){
    this.personService.createPerson(values)
    .then(res => {
      this.createModal.hide()
      })
  }

  show(){
    this.createModal.show();
  }
}
