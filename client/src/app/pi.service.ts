import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { PointOfInterest } from './pointofinterest';
import 'rxjs/add/operator/map';

@Injectable()
export class PiService {

  constructor(private http: Http) { }

  // Retreiving all the points of interest
  getPis() {
    return this.http.get('http://localhost:3000/api/pis')
                    .map(res => res.json());
  }

  // Adding a point of interest
  addPi(newPi) {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/pi',newPi,{headers:headers})
                    .map(res => res.json());
  }

  // Removing a point of interest
  deletePi(id) {
    this.http.delete('http://localhost:3000/api/pi/'+id).map(res => res.json());
  }
}
