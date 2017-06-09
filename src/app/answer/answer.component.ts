import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AnswerService} from '../services/answer.service'

@Component({
  selector: 'answer',
  styleUrls: ['./answer.scss'],
  templateUrl: './answer.component.html'
})

export class AnswerComponent {

  answers: any;
  questionId: any;
  question: any;

  constructor(
    private answerService: AnswerService,
    private router: Router,
    private route: ActivatedRoute,
  ){
  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        console.log(data)
        this.answers = data.answers;
        this.questionId = data.questionId;
        this.question = data.question;
      }
    })
  }

  getAnswers(){
    this.answerService.getAnswers(this.questionId)
    .then( res => this.answers = res)
  }

  delete(answerId){
    this.answerService.deleteAnswer(answerId)
    .then( res => this.getAnswers())
  }

  addPositiveVote(answer){
    let data = answer;
    data.positiveVotes += 1;
    data.questionId = this.questionId;
    this.answerService.updateAnswer(data)
    .then(res => console.log(res))
  }

  addNegativeVote(answer){
    let data = answer;
    data.negativeVotes += 1;
    data.questionId = this.questionId;
    this.answerService.updateAnswer(data)
    .then(res => console.log(res))
  }

  refreshAnswers(){
    this.getAnswers();
  }

}
