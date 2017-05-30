import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { QuestionService } from '../services/question.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionResolver implements Resolve<any> {

  category_title: any;

  constructor(private questionService: QuestionService, private http: Http ) { }

  resolve(route: ActivatedRouteSnapshot) {

    let category_slug = route.params['categorySlug'];

    this.http.get("./assets/categories.json")
      .map((res:any) => res.json())
      .subscribe(data => {
        for (let i of data.categories){
          if(i.slug == category_slug){
            this.category_title = i.title;
          }
        }
      });

    return new Promise((resolve, reject) => {

      this.questionService.getQuestionsBySlug(category_slug)
      .then(
        res => {
          return resolve({
            questions: res,
            category_title: this.category_title,
            category_slug: category_slug
          })
        },
        err => {
          console.log(err)
          return resolve(null)
        }
      )
    });
  }
}
