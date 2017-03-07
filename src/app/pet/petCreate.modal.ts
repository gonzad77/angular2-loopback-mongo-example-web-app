import {Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PetService} from '../services/pet.service'

@Component({
    selector: 'create-pet-modal',
    templateUrl: './petCreate.modal.html',
    exportAs: 'childPetCreate',
    styleUrls: ['./pet.scss']
})

export class PetCreateModal implements OnInit{

  @ViewChild('createModal') createModal;
  petForm: FormGroup;
  formErrors = {
    'name': [],
    'animal': []
  };
  validationMessages = {
    'name': {
      'required':      'Name is required.'
    },
    'animal': {
      'required':      'Animal is required'
    }
  };

  constructor(
    private petService: PetService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.petForm = new FormGroup({
      name: new FormControl('', Validators.required),
      animal: new FormControl('', Validators.required)
    });
    this.subcribeToFormChanges();
  }

  subcribeToFormChanges(){
    const myFormValueChanges$ = this.petForm.valueChanges;
    myFormValueChanges$.subscribe(x =>{
      if (!this.petForm) { return; }
        const form = this.petForm;
        for (const field in this.formErrors) {
          // clear previous error message
          this.formErrors[field] = [];
          this.petForm[field] = '';
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
    this.petService.createPet(values)
    .then(res => {
      this.createModal.hide()
      })
  }

  show(){
    this.createModal.show();
  }
}
