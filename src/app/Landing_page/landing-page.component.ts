import { Component, OnDestroy, OnInit } from '@angular/core';
import { CandidatesService } from '../Services/candidates/candidates.service';
import { Router } from '@angular/router';
import { CompaniesService } from '../Services/companies/companies.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  constructor(private _data: CandidatesService, private _router: Router, private _data2: CompaniesService) { }
  ngOnInit(): void {
    this._data.onLanding$.next(true);

    
  }

  ngOnDestroy(): void {
    this._data.onLanding$.next(false);

  }
  onCandidate() {
    this._data.onCandidate$.next(true);

  }
  onCompanies() {
    this._data2.onCompanies$.next(true);

  }



}
