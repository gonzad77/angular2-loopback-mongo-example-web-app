import { Routes } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { PetComponent } from './pet/pet.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person', component: PersonComponent },
  { path: 'pet', component: PetComponent },
];
