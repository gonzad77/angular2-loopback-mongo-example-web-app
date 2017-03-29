import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import {PersonService} from '../services/person.service';
import { PetService } from '../services/pet.service';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'person',
  styleUrls: ['./person.scss'],
  templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit{

  people: Array<any> = [];
  user: any;
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
    let env = this;
    this.personService.getPersonLogged()
    .then(function(res){
      console.log(res);
      env.user = res;
    }, function(err){
      console.log(err);
    })
  }

  getPeople(){
    this.busy = this.personService.getPeople()
    .then(res => {
      debugger
      this.people = res
    })
  }

  delete(personId){
    this.personService.deletePerson(personId)
    .then(res => {
      this.getPeople();
      debugger;
      this.petService.updatePets(personId)
      .then(result => console.log('pets updated'));
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
