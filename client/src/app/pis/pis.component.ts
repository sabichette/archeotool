import { Component, OnInit } from '@angular/core';
import { PiService } from '../pi.service';
import { PointOfInterest } from '../pointofinterest';
import { HttpBackend } from '@angular/common/http';

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

  // Dependency injection : This is how a service is injected into a component
  constructor(private PiService : PiService) { }

  addPi()
  {
    const newPi = {
      latitude: this.latitude,
      longitude: this.longitude,
      name: this.name
    }
    this.PiService.addPi(newPi).subscribe(pi => {
      this.pis.push(pi);
    });

    this.PiService.getPis()
                  .subscribe(retrievedPis => 
                    this.pis = retrievedPis);
  }

  deletePi(id:any) 
  {
    var pis = this.pis;
    this.PiService.deletePi(id).subscribe(data => {
                      if (data.n==1) {
                        for (var i = 0; i < pis.length; i ++) {
                          if (pis[i]._id == id) {
                            pis.splice(i,1);
                          }
                        }
                      }
                  });
  }

  // Called every time the component is loaded
  ngOnInit() {
    this.PiService.getPis()
                  .subscribe(retrievedPis => 
                    this.pis = retrievedPis);
  }

}
