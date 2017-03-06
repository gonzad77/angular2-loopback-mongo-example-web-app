import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'createPet',
  styleUrls: ['./createPet.scss'],
  templateUrl: './createPet.component.html'
})

export class CreatePetComponent {

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
    this.router.navigate(['/pet']);
  }

  onSubmit(values){
    this.petService.createPet(values)
    .then(res => this.router.navigate(['/pet']))
  }
}
