import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
const API_URL = "https://ionic2-loopback-mongo-api.herokuapp.com/api/";

@Injectable()
export class PetService {

  constructor(public http: Http) {}

  getPets(){
    return this.http
    .get(API_URL + 'Pets')
    .toPromise()
  }

  getPet(petId){
    return this.http
    .get(API_URL + 'Pets/' + petId)
    .toPromise()
  }

  getPetsByOwner(ownerId){
    return this.http
    .get(API_URL + 'Pets/?filter={"where":{"ownerId":"'+ ownerId + '"}}')
    .toPromise()
  }

  deletePet(petId){
    return this.http
    .delete(API_URL + 'Pets/' + petId)
    .toPromise()
  }

  updatePet(petId, values){
    return this.http
    .put(API_URL + 'Pets/' + petId, {
      name: values.name,
      animal: values.animal
      })
    .toPromise()
  }

  updatePets(personId){
    let id = "" + personId + "";
    return this.http
    .post(API_URL + 'Pets/update?where[ownerId]=' + id,
    {
      ownerId: null
    })
    .toPromise()
  }

  getNotAssignedPets(){
    return this.http
    .get(API_URL + 'Pets?filter={"where": {"or":[{"ownerId":{"exists": false}},{"ownerId":null}]}}')
    .toPromise()
  }

  assignPet(petId, personId){
    return this.http
    .put(API_URL + 'Pets/' + petId,{
      ownerId: personId
    })
    .toPromise()
  }

  createPet(values){
    return this.http
    .post(API_URL + 'Pets', {
      name: values.name,
      animal: values.animal
      })
    .toPromise()
  }

  setOwnerNull(petId){
    return this.http
    .put(API_URL + 'Pets/' + petId,{
      ownerId: null
    })
    .toPromise()
  }
}
