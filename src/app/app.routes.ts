import { Routes } from '@angular/router';

import { QuestionCategoryComponent } from './question/question.category.component';
import { QuestionFeedComponent } from './question/question.feed.component';
import { QuestionResolver } from './question/question.resolver';
import { CategoryResolver } from './question/category.resolver';
import { AnswerComponent } from './answer/answer.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: QuestionCategoryComponent, resolve: { data: CategoryResolver} },
  { path: 'questions', component: QuestionFeedComponent, resolve: { data: QuestionResolver } },
  { path: 'answer', component: AnswerComponent }
];
