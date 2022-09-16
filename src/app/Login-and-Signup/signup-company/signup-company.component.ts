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
  userData: any[] = [];

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
      this._company.Loggedin$.next(true);
      this._company.getCompaniesDatabyAPI().subscribe((companyData) => {

      })
      this._company.userName$.next(form.value.email);
      this._router.navigate(['/companyEdit']);
    }
  }
  addProduct() {
    const data = {
      email: this.SignupCompanyForm.value.email,
      password: this.SignupCompanyForm.value.password
    };
    this._company.createProduct(data).subscribe(response => {
      console.log(response);
    });
    this._company.getProducts().subscribe((companies) => {

      console.log("this is via HTTP" + companies);
    })
  }
}



