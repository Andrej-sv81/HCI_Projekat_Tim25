import { Component, OnInit } from '@angular/core';
import { JsonParserService } from './json-parser.service';
import { MediaChange, MediaObserver} from '@angular/flex-layout'
import { filter, pipe } from "rxjs"
import { Country } from './country-details-model';
import { CountrySimple } from './country-simple-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Amazing Geography';
  countires: any[] = [];
  countiresFiltered: any[] = []
  deviceXs!: boolean;
  country!: Country;
  countryList: CountrySimple[] = [];
  showDetails: boolean = false;
  showCountries: boolean = false;
  
  constructor(private jsonParser: JsonParserService, public mediaObserver: MediaObserver){
      mediaObserver
      .asObservable()
      .pipe(filter((change: MediaChange[]) => change[0].mqAlias == 'xs'))
      .subscribe(() => {
          this.deviceXs = true;
          console.log(true);
      });

      mediaObserver
      .asObservable()
      .pipe(filter((change: MediaChange[]) => change[0].mqAlias != 'xs'))
      .subscribe(() => {
          this.deviceXs = false;
          console.log(false)
      });

    

  }

  ngOnInit(){
    this.jsonParser.getJsonData().subscribe(
      data => {
        this.countires = data;
        const list = JSON.stringify(this.countires);
        localStorage.setItem('list', list);
      },
      error => {
        console.error('Error retrieving JSON data:', error);
      }
    )
  }

  getDetails(name: string){
    const country: Country = {
      name: '',
      flag: '',
      population: 0,
      area: 0,
      capital: '',
      languages: '',
      latitude: 0,
      longitude: 0,
      continents: '',
      timezones: '',
      map: ''
    };
    for(let item of this.countires){
      if(item.name.common == name){
        country.name = item.name.common;
        country.flag = item.flags.png;
        country.population = item.population;
        country.area = item.area;
        country.capital = item.capital[0];
        country.languages = Object.values(item.languages);
        country.latitude = item.latlng[0];
        country.longitude = item.latlng[1];
        country.continents = item.continents;
        country.timezones = item.timezones;
        country.map = item.maps.openStreetMaps;
        break;
      }
    }
    this.country = country;
    console.log(this.country);
    this.showDetails = true;
    this.showCountries = false;
    this.countryList = [];
  }

  closeDetails(){
    this.showDetails = false;
    const country: Country = {
      name: '',
      flag: '',
      population: 0,
      area: 0,
      capital: '',
      languages: '',
      latitude: 0,
      longitude: 0,
      continents: '',
      timezones: '',
      map: ''
    };
    this.country = country;
  }

  getAll(startsWithString: string) {
    this.countiresFiltered = this.countires.filter(item => item.name.common.toLowerCase().includes(startsWithString.toLowerCase()));
    console.log(this.countiresFiltered);
    for(let item of this.countiresFiltered){
      this.countryList.push({name: item.name.common,
                              flag: item.flags.png});
    }
    this.showCountries = true;
  }
}


