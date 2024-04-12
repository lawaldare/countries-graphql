import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {
  public readonly countries$: Observable<Country[]> = this.cs.getCountries();
  constructor(private cs: CountriesService) {}
}
