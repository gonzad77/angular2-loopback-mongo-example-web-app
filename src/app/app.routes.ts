import { Routes } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { PetComponent } from './pet/pet.component';
import { AdoptComponent } from './adopt/adopt.component';
import { AssignComponent } from './assign/assign.component';
import { MyPetsComponent } from './myPets/myPets.component';
import { PersonResolver } from './person/person.resolver';



export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person', component: PersonComponent },
    // { path: 'updatePerson/:id', component: UpdatePersonComponent, resolve: {person: PersonResolver} },
  { path: 'pet', component: PetComponent },
  { path: 'adopt', component: AdoptComponent },
  { path: 'assign', component: AssignComponent },
  { path: 'myPets', component: MyPetsComponent },
];
