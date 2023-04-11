import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Country } from '../country-details-model';
import * as L from 'leaflet';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements AfterViewInit{

  @Input() deviceXs!: boolean;
  @Input() country!: Country;
  @Output("closeDetails") closeDetails: EventEmitter<any> = new EventEmitter();

  ngAfterViewInit(): void{
      this.initMap();
  }


  initMap() {
    const map = L.map('mapContainer')
    .setView([this.country.latitude, this.country.longitude], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);
  }



  onCloseDetails(){
    this.closeDetails.emit();
  };
}
