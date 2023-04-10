import { Component, OnInit } from '@angular/core';
import { JsonParserService } from './json-parser.service';
import { MediaChange, MediaObserver} from '@angular/flex-layout'
import { filter } from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-hci-mini-project';
  countires: any[] = [];
  deviceXs!: boolean;
  
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
}


