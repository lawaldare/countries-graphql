import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_COUNTRIES, GET_COUNTRY } from './graphql.operations';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private apollo: Apollo) {}

  public getCountries() {
    return this.apollo
      .watchQuery({ query: GET_COUNTRIES })
      .valueChanges.pipe(map((result: any) => result?.data?.countries));
  }

  public getCountry(code: string) {
    return this.apollo
      .watchQuery({
        query: GET_COUNTRY,
        variables: { codeName: code },
      })
      .valueChanges.pipe(map((result: any) => result?.data?.country));
  }
}
