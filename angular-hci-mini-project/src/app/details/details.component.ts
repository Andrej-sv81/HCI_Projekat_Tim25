import { Component, Input } from '@angular/core';
import { Country } from '../country-details-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() deviceXs!: boolean;
  @Input() country!: Country;

  test(){

    console.log(this.country);
  }
}
