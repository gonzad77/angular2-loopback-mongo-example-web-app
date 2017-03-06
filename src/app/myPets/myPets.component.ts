import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service'

@Component({
  selector: 'myPets',
  styleUrls: ['./myPets.scss'],
  templateUrl: './myPets.component.html'
})

export class MyPetsComponent implements OnInit{

  pets: Array<any> = [];

  constructor(
    private petService: PetService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getPetsByOwner();
  }

  getPetsByOwner(){
    //get personId from params
    let personId = '';
    this.petService.getPetsByOwner(personId)
    .then(res => {this.pets = res.json()});
  }

  setFree(petId){
    this.petService.setOwnerNull(petId)
    .then(res => this.getPetsByOwner())
  }
}
