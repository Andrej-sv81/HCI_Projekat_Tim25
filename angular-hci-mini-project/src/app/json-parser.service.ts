import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonParserService {

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get('assets/all.json'); 
  }
}
