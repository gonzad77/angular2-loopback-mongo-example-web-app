import {Component, ViewChild, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PetService} from '../services/pet.service'

@Component({
    selector: 'update-pet-modal',
    templateUrl: './petUpdate.modal.html',
    exportAs: 'childPetUpdate',
    styleUrls: ['./pet.scss']
})

export class PetUpdateModal implements OnInit{

  @ViewChild('updateModal') updateModal;
  @Input() pet: any;
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
      name: new FormControl(this.pet.name, Validators.required),
      animal: new FormControl(this.pet.animal, Validators.required)
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
    this.updateModal.hide();
  }

  onSubmit(values){
    let petId = this.pet.id;
    this.petService.updatePet(petId,values)
    .then(res => {
      this.updateModal.hide()

      })
  }

  show(){
    this.updateModal.show();
  }
}
