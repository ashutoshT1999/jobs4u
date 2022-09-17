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
  userData: any[] = [];
  Loggedin: boolean = true;
  constructor(private _fb: FormBuilder, private _candidate: CandidatesService, private _company: CompaniesService, private _route: Router) { }
  ngOnInit(): void {
    this.LoginForm = this._fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    })

    this._candidate.onLanding$.next(false);

  }
  submitLoginForm(form: FormGroup) {
    if (form.valid) {
      if (form.value.email == "sagar.singh@gmail.com" || form.value.email == "ashu.tiwari@gmail.com" || form.value.email == "anki.patel@gmail.com" || form.value.email == "dibs.ghosh@gmail.com") {

        this._candidate.userID(form.value.email);
        this._company.Loggedin$.next(true);
        this._candidate.getCandidatesDatabyAPI().subscribe((candidateData) => {
          this.userData = candidateData.filter(x => x.email == form.value.email);
          this._company.userName$.next(this.userData[0].firstName + " " + this.userData[0].middleName + " " + this.userData[0].lastName)

        })
        this._route.navigate(['/candidateView']);
      }
      else if (form.value.email == "Globallogic.company@gmail.com" || form.value.email == "Learnify-Me.company@gmail.com" || form.value.email == "hitachi.company@gmail.com") {
        this._company.userID(form.value.email);
        this._company.Loggedin$.next(true);
        this._company.getCompaniesDatabyAPI().subscribe((companyData) => {
          this.userData = companyData.filter(x => x.emailID == form.value.email);
          this._company.userName$.next(this.userData[0].companyName);

        })
        this._route.navigate(['/companyView']);
      }
      else {
        this.Loggedin = false;
      }
    }
  }



}
