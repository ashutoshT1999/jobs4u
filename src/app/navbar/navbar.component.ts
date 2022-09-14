import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../Services/candidates/candidates.service';
import { CompaniesService } from '../Services/companies/companies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _data:CandidatesService,private _data2:CompaniesService) { }

  ngOnInit(): void {
  
  }

  onCandidate(){
    this._data.onCandidate$.next(true);

  }
  onCompanies(){
    this._data2.onCompanies$.next(true);
  
  }

}
