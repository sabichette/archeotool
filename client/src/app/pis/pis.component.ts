import { Component, OnInit } from '@angular/core';
import { PiService } from '../pi.service';
import {PointOfInterest} from '../pointofinterest';

@Component({
  selector: 'app-pis',
  templateUrl: './pis.component.html',
  styleUrls: ['./pis.component.css'],
  providers: [PiService]
})
export class PisComponent implements OnInit {

  pis: PointOfInterest[];
  pi: PointOfInterest;
  latitude : number;
  longitude: number;
  name: string;

  constructor(private PiService : PiService) { }

  ngOnInit() {
    this.PiService.getPis().subscribe(retrievedPis => this.pis = retrievedPis);
  }

}
