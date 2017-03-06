import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {PersonService} from '../services/person.service'

@Component({
  selector: 'person',
  styleUrls: ['./person.scss'],
  templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit{

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

  create(){
    this.router.navigate(['/createPerson']);
  }

  update(person){
    this.router.navigate(['/updatePerson'])
  }

  delete(personId){
    this.personService.deletePerson(personId)
    .then(res => this.getPeople())
  }
}
