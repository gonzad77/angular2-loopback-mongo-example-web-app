import {Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PersonService} from '../services/person.service'

@Component({
    selector: 'update-modal',
    templateUrl: './personUpdate.modal.html',
    exportAs: 'childUpdate',
    styleUrls: ['./person.scss']
})

export class PersonUpdateModal implements OnInit{
  @Input() person;
  @ViewChild('updateModal') updateModal;
  @Output() onClose = new EventEmitter<any>();
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
    this.updateModal.hide();
  }

  onSubmit(values){
    let personId = this.person.id;
    this.personService.updatePerson(personId,values)
    .then(res => {
      this.onClose.emit({values});
      this.updateModal.hide();
      })
  }

  show(){
    this.updateModal.show();
  }
}
