import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CountriesService } from './countries.service';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesComponent, CountryComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'countries';
}
