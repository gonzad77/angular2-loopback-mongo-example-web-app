import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PetApi, Pet } from '../../../sdk';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PetService {

  constructor(
    public http: Http,
    public petApi: PetApi
  ) {}

  getPets(){
    return this.petApi.find<Pet>()
    .toPromise();
  }

  getPet(petId){
    return this.petApi.findById<Pet>(petId)
    .toPromise()
  }

  getPetsByOwner(ownerId){
    let query = {
      ownerId: ownerId
    }
    return this.petApi.find<Pet>({where: query})
    .toPromise()
  }

  deletePet(petId){
    return this.petApi.deleteById<Pet>(petId)
    .toPromise()
  }

  updatePet(petId, values){
    let data = new Pet();
    data.name= values.name;
    data.animal= values.animal;
    return this.petApi.updateAttributes<Pet>(petId, data)
    .toPromise();
  }

  updatePets(personId){
   let query = {ownerId: personId};
   let data = new Pet();
   data.ownerId = null;
   return this.petApi.updateAll<Pet>({where: query}, data)
   .toPromise()
 }

 getNotAssignedPets(){
   let query = { or: [{ownerId: {exists: false}},{ownerId:null}]};
   return this.petApi.find<Pet>({where: query})
   .toPromise()
 }

 assignPet(petId, personId){
   let data = new Pet();
   data.ownerId = personId
   return this.petApi.updateAttributes<Pet>(petId, data)
   .toPromise()
 }

 createPet(values){
   let pet = new Pet({
     name: values.name,
     animal: values.animal
   })
   return this.petApi.create<Pet>(pet)
   .toPromise()
 }

 setOwnerNull(petId){
   let data = new Pet();
   data.ownerId = null;
   return this.petApi.updateAttributes<Pet>(petId, data)
   .toPromise()
 }
}
