import { Routes } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { CreatePersonComponent } from './createPerson/createPerson.component'
import { CreatePetComponent } from './createPet/createPet.component'
import { PetComponent } from './pet/pet.component';
import { AdoptComponent } from './adopt/adopt.component';
import { UpdatePersonComponent } from './updatePerson/updatePerson.component'
import { UpdatePetComponent } from './updatePet/updatePet.component'
import { AssignComponent } from './assign/assign.component'
import { MyPetsComponent } from './myPets/myPets.component'



export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person', component: PersonComponent },
  { path: 'createPerson', component: CreatePersonComponent},
  { path: 'updatePerson', component: UpdatePersonComponent },
  { path: 'updatePet', component: UpdatePetComponent },
  { path: 'createPet', component: CreatePetComponent},
  { path: 'pet', component: PetComponent },
  { path: 'adopt', component: AdoptComponent },
  { path: 'assign', component: AssignComponent },
  { path: 'myPets', component: MyPetsComponent },
];
