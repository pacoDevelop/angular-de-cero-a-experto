import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: []
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion: Region = 'Africa';
  public isLoading: boolean = false;

  constructor(private serviceCountry: CountriesService) { }


  ngOnInit(): void {
    this.countries = this.serviceCountry.cacheStore.byRegion.countries;
    this.selectedRegion = this.serviceCountry.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.serviceCountry.searchRegion(region).subscribe(countries => {
      this.countries = countries
      this.isLoading = false
      this.selectedRegion = region;
    });

  }
}
