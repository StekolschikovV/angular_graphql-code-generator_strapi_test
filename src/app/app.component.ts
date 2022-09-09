import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {PagesGQL, PagesQuery, TestsGQL, TestsQuery} from "graphql/generated";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages$: Observable<PagesQuery['pages']>
  tests$: Observable<TestsQuery['tests']>

  constructor(pagesGQL: PagesGQL, testsGQL: TestsGQL) {
    this.pages$ = pagesGQL.watch().valueChanges.pipe(map(result => result.data.pages))
    this.tests$ = testsGQL.watch().valueChanges.pipe(map(result => result.data.tests))
    // this.tests$.subscribe( e => console.log(e.data[0].attributes.img.data))
    testsGQL.fetch({
      "start": 2
    }).subscribe( e => console.log(e))
  }
}
