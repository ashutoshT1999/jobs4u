import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../Services/candidates/candidates.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _data:CandidatesService) { }

  ngOnInit(): void {
    this._data.onLanding$.next(true);
  }

}
