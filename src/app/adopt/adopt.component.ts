import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {PersonService} from '../services/person.service'

@Component({
  selector: 'adopt',
  styleUrls: ['./adopt.scss'],
  templateUrl: './adopt.component.html'
})

export class AdoptComponent implements OnInit{

  people: Array<any> = [];

  constructor(
    private personService: PersonService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.personService.getPeople()
    .then(res => this.people = res.json())
  }

  myPets(personId){
    this.router.navigate(['/myPets']);
  }

  adopt(personId){
    this.router.navigate(['/assign']);
  }
}
