import { Component } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

const GET_PAGES = gql`
  query Pages {
    pages {
      data{
        id
        attributes{
          title
        }
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gq4';
  constructor(private apollo: Apollo) {

    this.apollo.watchQuery<any>({
      query: GET_PAGES
    })
      .valueChanges
      .subscribe(({ data, loading, error }) => {

        console.log(data);
      });
  }
}
