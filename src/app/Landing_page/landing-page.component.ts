import { Component, OnDestroy, OnInit } from '@angular/core';
import { CandidatesService } from '../Services/candidates/candidates.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit,OnDestroy {

  constructor(private _data:CandidatesService) { }

  ngOnInit(): void {
    this._data.onLanding$.next(true);
  }
  
  ngOnDestroy():void{
    this._data.onLanding$.next(false);
  }

}
