import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'question',
  styleUrls: ['./question.scss'],
  templateUrl: './question.category.component.html'
})

export class QuestionCategoryComponent implements OnInit{

  categories : Array<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public http: Http,
  ){
  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.categories = data.categories;
      }
    })
  }

  openDetails(params){
    this.router.navigate(['/questions',{categorySlug: params} ]);
  }
}
