import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from '../services/question.service'
import 'rxjs/add/operator/map';

@Component({
  selector: 'question',
  styleUrls: ['./question.scss'],
  templateUrl: './ask.question.component.html'
})

export class AskQuestionComponent implements OnInit{

  questionSlug: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public questionService: QuestionService
  ){
  }

  ngOnInit(): void {
    this.questionSlug = this.route.params['questionSlug'];
  }
}
