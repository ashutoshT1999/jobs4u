import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { CompaniesService } from 'src/app/Services/companies/companies.service';

@Component({
  selector: 'app-sign-up-job-seekers',
  templateUrl: './sign-up-job-seekers.component.html',
  styleUrls: ['./sign-up-job-seekers.component.css']
})
export class SignUpJobSeekersComponent implements OnInit {
  SignupJobSeekersForm!: FormGroup;
  pass1: string = '';
  pass2: string = '';
  errorPassword: boolean = false;
  userData: any[] = [];
  constructor(private _fb: FormBuilder, private _candidate: CandidatesService, private _company: CompaniesService, private _router: Router) { }
  ngOnInit(): void {
    this.SignupJobSeekersForm = this._fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required]

    })
    this._candidate.onLanding$.next(false);
  }

  submit(form: FormGroup) {
    if (form.valid) {
      // if (form.value.email == "sagar.singh@gmail.com" || form.value.email == "ashu.tiwari@gmail.com" || form.value.email == "anki.patel@gmail.com" || form.value.email == "dibs.ghosh@gmail.com") {

      //   this._candidate.userID(form.value.email);
      //   this._company.Loggedin$.next(true);
      //   this._candidate.getCandidatesDatabyAPI().subscribe((candidateData) => {
      //     this.userData = candidateData.filter(x => x.email == form.value.email);
      //     this._company.userName$.next(this.userData[0].firstName + " " + this.userData[0].middleName + " " + this.userData[0].lastName)

      //   })
      this._router.navigate(['/candidateEdit']);
    }

  }

}

