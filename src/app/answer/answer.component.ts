import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import {AnswerService} from '../services/answer.service'
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'answer',
  styleUrls: ['./answer.scss'],
  templateUrl: './answer.component.html'
})

export class AnswerComponent {

  constructor(
    private answerService: AnswerService,
    private router: Router,
    public toaster: ToastsManager,
    private viewContainerRef:ViewContainerRef
  ){
    this.toaster.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit(): void {

  }

}
