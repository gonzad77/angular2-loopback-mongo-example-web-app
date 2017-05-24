import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {BusyModule} from 'angular2-busy';
import { ModalModule } from 'ng2-bootstrap/modal';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { SDKBrowserModule } from '../../sdk/index';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent
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
    QuestionService,
    AnswerService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
