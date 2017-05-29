import { Routes } from '@angular/router';

import { QuestionCategoryComponent } from './question/question.category.component';
import { QuestionFeedComponent } from './question/question.feed.component';
import { AskQuestionComponent } from './question/ask.question.component';
import { AnswerComponent } from './answer/answer.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: QuestionCategoryComponent },
  { path: 'questions', component: QuestionFeedComponent },
  { path: 'ask', component: AskQuestionComponent },
  { path: 'answer', component: AnswerComponent }
];
