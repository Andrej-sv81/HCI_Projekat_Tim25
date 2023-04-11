import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../country-details-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() deviceXs!: boolean;
  @Input() country!: Country;
  @Output("closeDetails") closeDetails: EventEmitter<any> = new EventEmitter();
  close(){

  }

  onCloseDetails(){
    this.closeDetails.emit();
  };
}
