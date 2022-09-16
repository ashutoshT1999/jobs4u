import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CandidatesService } from './Services/candidates/candidates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jobs4u';
  onLanding:any=true;

  constructor(private _data: CandidatesService) {  

  }



  ngOnInit() {
    this._data.onLanding$.subscribe(data => {
      this.onLanding = data;
    })
    
  }
 

}
