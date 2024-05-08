import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private serviceCountry: CountriesService) { }


  searchByCapital(term: string) {
    console.log('Desde ByCapitalPage', term);
    this.serviceCountry.searchCapital(term).subscribe(countries => this.countries = countries);

  }

}
