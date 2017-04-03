import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PersonApi, Person } from '../../../sdk';
import 'rxjs/add/operator/toPromise';
const API_URL = "https://ionic2-loopback-mongo-api.herokuapp.com/api/";


@Injectable()
export class PersonService {
  constructor(
    private http: Http,
    private personApi: PersonApi
  ){}

  getPeople(){
    return this.personApi.find<Person>()
    .toPromise()
  }

  getPerson(personId){
    return this.personApi.findById<Person>(personId)
    .toPromise()
  }

  deletePerson(personId){
    return this.personApi.deleteById<Person>(personId)
    .toPromise()
  }

  getEnablePeople(){
    let query = {enabled: true};
    return this.personApi.find<Person>({where: query})
    .toPromise()
  }

  updatePerson(personId, values){
    let data = new Person();
    data.name = values.name;
    data.surname = values.lastname;
    data.age = values.age;
    data.enabled = values.able;
    return this.personApi.updateAttributes<Person>(personId, data)
    .toPromise()
  }

  createPerson(values){
    let data = new Person();
    data.name = values.name;
    data.surname = values.lastname;
    data.age = values.age;
    data.enabled = values.able;
    return this.personApi.create<Person>(data)
    .toPromise()
  }
}
