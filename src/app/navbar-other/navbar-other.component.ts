import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../Services/candidates/candidates.service';
import { CompaniesService } from '../Services/companies/companies.service';

@Component({
  selector: 'app-navbar-other',
  templateUrl: './navbar-other.component.html',
  styleUrls: ['./navbar-other.component.css']
})
export class NavbarOtherComponent implements OnInit {

  constructor(private _data:CandidatesService,private _data2:CompaniesService) { }

  ngOnInit(): void {
  }

  onCandidate(){
    this._data2.onCompanies$.next(false);
    this._data.onCandidate$.next(true);

  }
  onCompanies(){
    this._data2.onCompanies$.next(true);
    this._data.onCandidate$.next(false);
  
  }
  onLanding(){
    this._data.onLanding$.next(false);
  }
}
