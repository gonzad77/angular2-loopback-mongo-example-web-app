import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AnswerService} from '../services/answer.service'

@Component({
  selector: 'answer',
  styleUrls: ['./answer.scss'],
  templateUrl: './answer.component.html'
})

export class AnswerComponent {

  question: any;

  constructor(
    private answerService: AnswerService,
    private router: Router,
    private route: ActivatedRoute,
  ){
  }

  ngOnInit(): void {
    this.question = this.route.params['questionSlug'];
    console.log()

  }

}
