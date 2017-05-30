import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { QuestionCategoryComponent } from './question/question.category.component';
import { QuestionFeedComponent } from './question/question.feed.component';
import { AskQuestionModal } from './question/ask.question.modal';
import { AnswerComponent } from './answer/answer.component';
import { QuestionResolver } from './question/question.resolver';
import { CategoryResolver } from './question/category.resolver';
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
    QuestionFeedComponent,
    QuestionCategoryComponent,
    AskQuestionModal,
    AnswerComponent
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
    SDKBrowserModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    QuestionService,
    AnswerService,
    QuestionResolver,
    CategoryResolver
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
