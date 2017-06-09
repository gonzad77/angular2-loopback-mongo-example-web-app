import {Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { AnswerService } from '../services/answer.service';
import { Answer } from '../../../sdk';
import 'rxjs/add/operator/map';

@Component({
  selector: 'update-modal-answer',
  templateUrl: './update.answer.modal.html',
  exportAs: 'childUpdate',
  styleUrls: ['./answer.scss']
})

export class UpdateAnswerModal implements OnInit{

  @ViewChild('updateModal') updateModal;
  answerForm: FormGroup;
  answer : Answer = new Answer();

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
    let data = this.answer;
    data.answer = values.answer;
    console.log(data);
    this.answerService.updateAnswer(data)
    .then( res => {
      this.updateModal.hide();
      console.log(res);
    })

  }

  show(answer){
   this.updateModal.show();
   this.answer = answer;
   this.answerForm = new FormGroup({
     answer: new FormControl(this.answer.answer, Validators.required)
   })
  }

}
