import { Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'question', pathMatch: 'full' },
  { path: 'question', component: QuestionComponent },
  { path: 'answer', component: AnswerComponent },
];
