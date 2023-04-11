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
  @Input() deviceXs!: boolean;
  cols: number = 3;
  constructor(){
    if(this.deviceXs){
      this.cols=1
    }else{
      this.cols=3
    }
  }
  onShowDetails(name: string){
    this.getDetails.emit(name);
  }
}
