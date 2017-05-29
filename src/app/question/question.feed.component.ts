import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { QuestionService } from '../services/question.service'
import 'rxjs/add/operator/map';

@Component({
  selector: 'question',
  styleUrls: ['./question.scss'],
  templateUrl: './question.feed.component.html'
})

export class QuestionFeedComponent implements OnInit{

  questions: Array<any>;
  questionSlug: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public questionService: QuestionService
  ){
  }

  ngOnInit(): void {
    this.questionSlug = this.route.snapshot.params['questionSlug'];
    this.questionService.getQuestionsBySlug(this.questionSlug).
    then( res => {
      this.questions = res;
      console.log(res);
    })
  }

  openDetails(params){
    this.router.navigate(['/answer',{questionId: params} ]);
  }

  ask(){
    this.router.navigate(['/ask',{questionSlug: this.questionSlug}])
  }
}
