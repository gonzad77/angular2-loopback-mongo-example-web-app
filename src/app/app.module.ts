import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PersonComponent } from './person/person.component';
import { PetComponent } from './pet/pet.component';
import { AdoptComponent } from './adopt/adopt.component';
import { AssignComponent } from './assign/assign.component';
import { MyPetsComponent } from './myPets/myPets.component';
import { PersonService } from './services/person.service';
import { PetService } from './services/pet.service';
import { PersonResolver } from './person/person.resolver';
import { PersonUpdateModal  } from './person/personUpdate.modal';
import { PersonCreateModal  } from './person/personCreate.modal';
import { PetCreateModal  } from './pet/petCreate.modal';
import { PetUpdateModal  } from './pet/petUpdate.modal';




import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {BusyModule} from 'angular2-busy';
import { ModalModule } from 'ng2-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PetComponent,
    AdoptComponent,
    AssignComponent,
    MyPetsComponent,
    PersonUpdateModal,
    PersonCreateModal,
    PetCreateModal,
    PetUpdateModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    BusyModule,
    ModalModule.forRoot()
  ],
  providers: [
    PersonService,
    PetService,
    PersonResolver
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
