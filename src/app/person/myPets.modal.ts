import {Component, ViewChild, Input, Output, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PetService} from '../services/pet.service';

@Component({
    selector: 'myPets-modal',
    templateUrl: './myPets.modal.html',
    exportAs: 'childMyPets',
    styleUrls: ['./person.scss']
})

export class MyPetsModal implements OnInit{
  @Input() personId;
  @Output() onClose = new EventEmitter<any>();
  @ViewChild('myPetsModal') myPetsModal;
  pets: Array<any> = [];

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.petService.getPetsByOwner(this.personId)
    .then(res => {this.pets = res});
  }

  setFree(petId){
    this.petService.setOwnerNull(petId)
    .then(res => {
      this.onClose.emit({message: 'Pet was set free'});
      this.myPetsModal.hide();
    })
  }

  show(){
    this.myPetsModal.show();
  }
}
