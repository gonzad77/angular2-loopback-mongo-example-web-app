import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AnswerResolver implements Resolve<any> {

  question: any;

  constructor(
    private answerService: AnswerService,
    private questionService: QuestionService
  ) { }


  resolve(route: ActivatedRouteSnapshot) {

    let questionId = route.params['questionId'];

    this.questionService.getQuestion(questionId)
    .then( res => {
      this.question = res;
    })

    return new Promise((resolve, reject) => {

      this.answerService.getAnswers(questionId)
      .then(
        res => {
          return resolve({
            answers: res,
            question: this.question[0].question,
            questionId: questionId
          })
        },
        err => {
          console.log(err)
          return resolve(null)
        }
      )
    });
  }
}
