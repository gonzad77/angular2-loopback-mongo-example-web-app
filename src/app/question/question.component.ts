import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'question',
  styleUrls: ['./question.scss'],
  templateUrl: './question.component.html'
})

export class QuestionComponent implements OnInit{

  categories : Array<any>;

  constructor(
    private router: Router,
    public http: Http,
  ){
  }

  ngOnInit(): void {
    this.http.get("./assets/categories.json")
      .map((res:any) => res.json())
      .subscribe(data => this.categories = data.categories);
  }

  openDetails(params){
    this.router.navigate(['/answer',{question: params} ]);
  }
}
