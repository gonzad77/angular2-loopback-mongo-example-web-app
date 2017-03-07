import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { PersonService } from "../services/person.service";

@Injectable()
export class PersonResolver implements Resolve<any> {

  constructor(
    private personService: PersonService
  ){}

  resolve(route: ActivatedRouteSnapshot){
    let personId = route.params['id'];

    return new Promise((resolve, reject) =>{
      this.personService.getPerson(personId)
      .then(res => resolve(res.json()));
    });
  }
}
