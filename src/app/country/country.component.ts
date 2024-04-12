import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Observable, mergeMap } from 'rxjs';
import { Country } from '../country.model';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent {
  public country$: Observable<Country> = this.route.params.pipe(
    mergeMap((params) => this.cs.getCountry(params['code']))
  );

  constructor(private route: ActivatedRoute, private cs: CountriesService) {}
}
