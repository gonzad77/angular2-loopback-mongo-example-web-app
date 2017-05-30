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

export class AskQuestionModal implements OnInit{

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
    this.askForm = new FormGroup({
      question: new FormControl('', Validators.required)
    })
    this.questionSlug = this.route.params['questionSlug'];
  }

  onSubmit(values){
    
  }

  show(){
   this.createModal.show();
  }

}
