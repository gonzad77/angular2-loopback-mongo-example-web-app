import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'question',
  styleUrls: ['./question.scss'],
  templateUrl: './question.feed.component.html'
})

export class QuestionFeedComponent implements OnInit{

  questions: Array<any>;
  categoryTitle: string;
  categorySlug: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public questionService: QuestionService,
    public answerService: AnswerService
  ){
  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.questions = data.questions;
        this.categoryTitle = data.category_title;
        this.categorySlug = data.category_slug;
      }
    })
  }

  getQuestions(){
    this.questionService.getQuestionsBySlug(this.categorySlug)
    .then( res => {
      this.questions = res;
    })
  }

  openDetails(params){
    // this.router.navigate(['/answer',{questionId: params} ]);
  }

  delete(questionId){
    this.questionService.deleteQuestion(questionId)
    .then(res => this.getQuestions());

    this.answerService.getAnswers(questionId)
    .then(answers => {
      for(let answer of answers){
        this.answerService.deleteAnswer(answer.id);
      }
    })
  }

  addPositiveVote(question){
    let data = question;
    data.positiveVotes += 1;
    data.categorySlug = this.categorySlug;
    this.questionService.updateQuestion(data)
    .then(res => console.log(res))
  }

  addNegativeVote(question){
    let data = question;
    data.negativeVotes += 1;
    data.questionSlug = this.categorySlug;
    this.questionService.updateQuestion(data)
    .then(res => console.log(res))
  }
}
