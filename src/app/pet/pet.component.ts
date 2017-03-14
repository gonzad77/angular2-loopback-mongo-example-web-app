import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import {PetService} from '../services/pet.service'
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'pet',
  styleUrls: ['./pet.scss'],
  templateUrl: './pet.component.html'
})

export class PetComponent {

  pets: Array<any> = [];
  busy: Promise<any>;

  constructor(
    private petService: PetService,
    private router: Router,
    public toaster: ToastsManager,
    private viewContainerRef:ViewContainerRef
  ){
    this.toaster.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(){
    this.busy = this.petService.getPets()
    .then(res => this.pets = res.json())
  }

  update(pet){
    this.router.navigate(['/updatePet'])
  }

  delete(petId){
    this.petService.deletePet(petId)
    .then(res => this.getPets())
  }

  onHidden(data:any){
    this.getPets();
    this.toaster.success(data.message, 'Success!',
    {
      dismiss: 'auto',
      toastLife: 3000
    })
  }
}
