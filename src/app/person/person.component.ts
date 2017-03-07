import {Component, OnInit, ViewContainerRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {PersonService} from '../services/person.service';
// import { PersonUpdateModal } from './personUpdate.modal';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'person',
  styleUrls: ['./person.scss'],
  templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit{

  // @ViewChild('lgModal') lgModal : ModalDirective;

  people: Array<any> = [];
  busy: Promise<any>;

  constructor(
    private personService: PersonService,
    private router: Router,
    private viewContainerRef:ViewContainerRef
  ){}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.busy = this.personService.getPeople()
    .then(res => this.people = res.json())
  }

  create(){
    this.router.navigate(['/createPerson']);
  }

  delete(personId){
    this.personService.deletePerson(personId)
    .then(res => this.getPeople());
  };

}
