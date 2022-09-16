import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatesService } from '../Services/candidates/candidates.service';
import { CompaniesService } from '../Services/companies/companies.service';

@Component({
  selector: 'app-navbar-other',
  templateUrl: './navbar-other.component.html',
  styleUrls: ['./navbar-other.component.css']
})
export class NavbarOtherComponent implements OnInit {

  userName: string | null = "";
  onCandidate:any=false;
  onCompany:any=false;
  constructor(private _data: CandidatesService, private _data2: CompaniesService,private _router:Router) { }
  loggedin: any = false;
  ngOnInit(): void {
    this._data2.Loggedin$.subscribe(x => {
      this.loggedin = x;
    })

    this._data2.userName$.subscribe(x => {
      this.userName = x;

    })
   this._data.onCandidate$.subscribe(x=>{
    this.onCandidate = x;
   })
   this._data2.onCompanies$.subscribe(x=>{
    this.onCompany = x
   })
  }
  onLanding() {
    this._data.onLanding$.next(true);

  }
  loggedOut() {

    this._data2.Loggedin$.next(false);
  }
  routeView(){
     if(this.onCandidate){
        this._router.navigate(['/candidateView'])
     }
     else if(this.onCompany){
      this._router.navigate(['companyView']);
     }
  }
}
