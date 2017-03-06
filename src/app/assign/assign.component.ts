import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service'

@Component({
  selector: 'assign',
  styleUrls: ['./assign.scss'],
  templateUrl: './assign.component.html'
})

export class AssignComponent implements OnInit{

  pets: Array<any> = [];

  constructor(
    private petService: PetService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.petService.getNotAssignedPets()
    .then(res => this.pets = res.json())
  }

  assign(petId){
    //get personId from params
    let personId = '';
    this.petService.assignPet(petId, personId)
    .then(res => { this.router.navigate(['/adopt'])})
  }
}
