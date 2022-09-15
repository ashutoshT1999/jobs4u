import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { CompaniesService } from 'src/app/Services/companies/companies.service';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.css']
})
export class SignupCompanyComponent implements OnInit, OnDestroy {

  SignupCompanyForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _candidate: CandidatesService, private _company: CompaniesService, private _router: Router) { }

  ngOnInit(): void {
    this.SignupCompanyForm = this._fb.group({


      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],


    })
    this._candidate.onLanding$.next(false);

  }
  ngOnDestroy(): void {
  }


  submit(form: FormGroup) {
    if (form.valid) {
      this._router.navigate(['/companyEdit']);
      this._company.Loggedin$.next(true);
    }

  }
}
