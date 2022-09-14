import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { CompaniesService } from 'src/app/Services/companies/companies.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  onCandidate: any = false;
  onCompany: any = false;
  constructor(private _fb: FormBuilder, private _candidate: CandidatesService, private _company: CompaniesService, private _route: Router) { }
  ngOnInit(): void {
    this.LoginForm = this._fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    })

    this._candidate.onLanding$.next(false);

    this._candidate.onCandidate$.subscribe(x => {
      this.onCandidate = x;
    })
    this._company.onCompanies$.subscribe(x => {
      this.onCompany = x;
    })


  }
  submitLoginForm(form: FormGroup) {
    if (form.valid) {
      if (form.value.email == "sagar.singh@gmail.com" || form.value.email == "ashu.tiwari@gmail.com" || form.value.email == "anki.patel@gmail.com" || form.value.email == "dibs.ghosh@gmail.com") {

        this._candidate.userID(form.value.email);
        this._candidate.getCandidatesDatabyAPI().subscribe((candidateData) => {
          this._company.userData = candidateData.filter(x => x.email == form.value.email);
        })
        this._route.navigate(['/candidateView']);
      }
      else {
        this._company.userID(form.value.email);
        this._company.getCompaniesDatabyAPI().subscribe((companyData) => {
          this._company.userData = companyData.filter(x => x.emailID == form.value.email);
        })
        this._route.navigate(['/companyView']);
      }
    }
  }


  loggedin() {
    this._company.Loggedin$.next(true);
  }



}
