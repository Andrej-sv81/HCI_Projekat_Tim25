import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable, map, startWith } from 'rxjs';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  names: any[] = [];
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  countryControl = new FormControl('');
  @Input() deviceXs!: boolean;
  @Output("getDetails") getDetails: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(){
    const stringList = localStorage.getItem('list');
    if(stringList !== null){
      this.names = JSON.parse(stringList);
    }
    for(let name of this.names){
      this.options.push(name.name.common)
    }
  }

  constructor() {
    this.filteredOptions = this.countryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value === null ? '':value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(name => name.toLowerCase().includes(filterValue));
  }


  dugme():void{
    if(this.countryControl !== undefined &&
       this.countryControl.value !== null &&
        this.options.includes(this.countryControl.value)){
      this.getDetails.emit(this.countryControl.value);
    }else{
      this.getDetails.emit('');
    }
  }
}
