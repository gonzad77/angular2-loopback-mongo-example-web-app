import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import {PersonService} from '../services/person.service';
import {PetService} from '../services/pet.service';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'person',
  styleUrls: ['./person.scss'],
  templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit{

  people: Array<any> = [];
  busy: Promise<any>;

  constructor(
    private personService: PersonService,
    private petService: PetService,
    private router: Router,
    public toaster: ToastsManager,
    private viewContainerRef:ViewContainerRef
  ){
    this.toaster.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.busy = this.personService.getPeople()
    .then(res => this.people = res.json())
  }

  updatePets(personId){
    this.petService.getPetsByOwner(personId)
    .then(res => {
      let pets = res.json();
      for (let pet of pets){
        this.petService.setOwnerNull(pet.id)
        .then(result => this.getPeople())
      }
    });
  }

  delete(personId){
    this.personService.deletePerson(personId)
    .then(res => {
      this.updatePets(personId);
    });
  };

  onHidden(data: any) {
    this.getPeople();
    this.toaster.success(data.message, 'Success!',
    {
      dismiss: 'auto',
      toastLife: 3000
    })

   }

}
