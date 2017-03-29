import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PersonComponent } from './person/person.component';
import { PetComponent } from './pet/pet.component';
import { AuthComponent } from './auth/auth.component';
import { PersonService } from './services/person.service';
import { PetService } from './services/pet.service';
import { PersonUpdateModal  } from './person/personUpdate.modal';
import { PetCreateModal  } from './pet/petCreate.modal';
import { PetUpdateModal  } from './pet/petUpdate.modal';
import { MyPetsModal  } from './person/myPets.modal';
import { AdoptModal  } from './person/adopt.modal';
import { AuthSignupModal  } from './auth/authSignup.modal';
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
    AuthComponent,
    PersonUpdateModal,
    PetCreateModal,
    PetUpdateModal,
    MyPetsModal,
    AdoptModal,
    AuthSignupModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
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
