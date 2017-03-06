import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
const API_URL = "https://ionic2-loopback-mongo-api.herokuapp.com/api/";


@Injectable()
export class PersonService {
  constructor(private http: Http) {}

  getPeople(){
  return this.http
  .get(API_URL + 'People')
  .toPromise()
}

getPerson(personId){
  return this.http
  .get(API_URL + 'People/' + personId)
  .toPromise()
}

deletePerson(personId){
  return this.http
  .delete(API_URL + 'People/' + personId)
  .toPromise()
}

getEnablePeople(){
  return this.http
  .get(API_URL + 'People?filter={"where":{"enabled":true}}')
  .toPromise()
}

updatePerson(personId, values){
  return this.http
  .put(API_URL + 'People/' + personId, {
    name: values.name,
    surname: values.lastname,
    age: values.age ,
    enabled: values.able
  })
  .toPromise()
}

createPerson(values){
  return this.http
  .post(API_URL + 'People', {
    name: values.name,
    surname: values.lastname,
    age: values.age ,
    enabled: values.able
  })
  .toPromise()
}
}
