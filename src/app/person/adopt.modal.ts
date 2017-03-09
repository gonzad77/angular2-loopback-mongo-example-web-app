import {Component, ViewChild, Input, Output, EventEmitter, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PetService} from '../services/pet.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'adopt-modal',
    templateUrl: './adopt.modal.html',
    exportAs: 'childAdopt',
    styleUrls: ['./person.scss']
})

export class AdoptModal implements OnInit{
  @Input() personId;
  @Output() onClose = new EventEmitter<any>();
  @ViewChild('adoptModal') adoptModal;
  pets: Array<any> = [];

  constructor(
    private petService: PetService
  ){}

  ngOnInit(): void {
    this.petService.getNotAssignedPets()
    .then(res => this.pets = res.json())
  }

  show(){
    this.adoptModal.show();
  }

  assign(petId){
    this.petService.assignPet(petId, this.personId)
    .then(res => {
      this.onClose.emit({message: 'Pet was assigned'});
      this.adoptModal.hide();
    })
  }
}
