import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {PetService} from '../services/pet.service'

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
    private router: Router
  ){}

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
}
