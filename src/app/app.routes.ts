import { Routes } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { PetComponent } from './pet/pet.component';
import { AuthComponent } from './auth/auth.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'person', component: PersonComponent },
  { path: 'pet', component: PetComponent },
  { path: 'login', component: AuthComponent}
];
