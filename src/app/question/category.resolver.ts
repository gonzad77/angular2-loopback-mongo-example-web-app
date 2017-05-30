import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryResolver implements Resolve<any> {

  constructor(private http: Http ) { }

  resolve() {

    return new Promise((resolve, reject) => {

      this.http.get("./assets/categories.json")
      .map((res:any) => res.json())
      .subscribe(data => {
        if(data){
          return resolve({
            categories: data.categories
          })
        }
        else{
          return resolve(null)
        }
      })
    });
  }
}
