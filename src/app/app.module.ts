import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PersonComponent } from './person/person.component';
import { PetComponent } from './pet/pet.component';
import { PersonService } from './services/person.service';
import { PetService } from './services/pet.service';
import { PersonUpdateModal  } from './person/personUpdate.modal';
import { PersonCreateModal  } from './person/personCreate.modal';
import { PetCreateModal  } from './pet/petCreate.modal';
import { PetUpdateModal  } from './pet/petUpdate.modal';
import { MyPetsModal  } from './person/myPets.modal';
import { AdoptModal  } from './person/adopt.modal';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {BusyModule} from 'angular2-busy';
import { ModalModule } from 'ng2-bootstrap/modal';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { SDKBrowserModule } from '../../sdk/index';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PetComponent,
    PersonUpdateModal,
    PersonCreateModal,
    PetCreateModal,
    PetUpdateModal,
    MyPetsModal,
    AdoptModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    BusyModule,
    ModalModule.forRoot(),
    ToastModule.forRoot(),
    SDKBrowserModule.forRoot()
  ],
  providers: [
    PersonService,
    PetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
