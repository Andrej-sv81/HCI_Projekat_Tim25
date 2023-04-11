import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountrySimple } from '../country-simple-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  @Input() countryList!: CountrySimple[];
  @Output("getDetails") getDetails: EventEmitter<any> = new EventEmitter();

  onShowDetails(name: string){
    this.getDetails.emit(name);
  }
}
