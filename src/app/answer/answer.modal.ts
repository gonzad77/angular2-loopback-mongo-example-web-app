import {Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { AnswerService } from '../services/answer.service'
import 'rxjs/add/operator/map';

@Component({
  selector: 'create-modal-answer',
  templateUrl: './answer.modal.html',
  exportAs: 'childCreate',
  styleUrls: ['./answer.scss']
})

export class AnswerModal implements OnInit{

  @ViewChild('createModal') createModal;
  answerForm: FormGroup;
  questionId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public answerService: AnswerService
  ){
  }

  ngOnInit(): void {
    this.answerForm = new FormGroup({
      answer: new FormControl('', Validators.required)
    })
  }

  onSubmit(values){
    let data : any = {};
    data.answer = values.answer;
    data.questionId = this.questionId;
    this.answerService.createAnswer(data)
    .then( res => {
      this.createModal.hide();
      console.log(res);
    })

  }

  show(questionId){
   this.createModal.show();
   this.questionId = questionId;
  }

}
