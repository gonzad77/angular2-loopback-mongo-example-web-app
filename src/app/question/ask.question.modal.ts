import {Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { QuestionService } from '../services/question.service'
import 'rxjs/add/operator/map';

@Component({
  selector: 'create-modal',
  templateUrl: './ask.question.modal.html',
  exportAs: 'childCreate',
  styleUrls: ['./question.scss']
})

export class AskQuestionComponent implements OnInit{

  @ViewChild('createModal') createModal;
  askForm: FormGroup;
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

  cancel(){
   this.createModal.hide();
 }

 onSubmit(values){
  
 }

 show(){
   this.createModal.show();
 }
}
