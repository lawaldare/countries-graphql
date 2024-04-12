import { CountryComponent } from './country/country.component';
import { Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';

export const routes: Routes = [
  {
    path: 'countries',
    component: CountriesComponent,
  },
  {
    path: 'country/:code',
    component: CountryComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'countries' },
];
