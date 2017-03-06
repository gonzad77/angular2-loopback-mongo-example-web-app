import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PersonComponent } from './person/person.component';
import { CreatePersonComponent } from './createPerson/createPerson.component';
import { UpdatePersonComponent } from './updatePerson/updatePerson.component';
import { UpdatePetComponent } from './updatePet/updatePet.component';
import { PetComponent } from './pet/pet.component';
import { CreatePetComponent } from './createPet/createPet.component'
import { AdoptComponent } from './adopt/adopt.component';
import { AssignComponent } from './assign/assign.component';
import { MyPetsComponent } from './myPets/myPets.component';
import { PersonService } from './services/person.service';
import { PetService } from './services/pet.service';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PetComponent,
    AdoptComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
    UpdatePetComponent,
    CreatePetComponent,
    AssignComponent,
    MyPetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    PersonService,
    PetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
