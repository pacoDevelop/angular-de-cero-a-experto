import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: []
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = "";

  constructor(private serviceCountry: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.serviceCountry.cacheStore.byCountries.countries;
    this.initialValue = this.serviceCountry.cacheStore.byCountries.term;
  }

  searchByCountry(term: string) {
    this.isLoading = true;
    this.serviceCountry.searchCountry(term).subscribe(countries => {
      this.countries = countries
      this.isLoading = false
    });

  }
}
