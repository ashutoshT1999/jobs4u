import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  isSubmitted: boolean = false;
  userData: any[] = [];
  valueChange:boolean=false;

  constructor(private _fb: FormBuilder, private _route: Router, private _snackBar: MatSnackBar, private _candidate: CandidatesService) { }
  openSnackBar() {
    if (this.editCandidate.valid) {
      this._snackBar.open("Data saved succesfully.", "OK");
      this.isSubmitted = true;
      this.submit(this.editCandidate);
    }
    else {
      this._snackBar.open("Please fill all the form details carefully", "OK");
      console.log(this.editCandidate);
      this.isSubmitted = false;
    }
  }

  ngOnInit(): void {
    this._candidate.candidateIDsubject$.subscribe((data) => {
      this._candidate.getCandidatesDatabyAPI().subscribe((candidateData) => {
        this.userData = candidateData.filter(x => x.email == data);
        this.setDefault();

      })
    })

  }

  editCandidate = this._fb.group({
    id: [''],
    password: [''],
    firstName: ['', [Validators.required]],
    middleName: [''],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    dob: ['', [Validators.required]],
    resume: [''],
    contactNumber: [, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    bio: ['', [Validators.required]],
    education: ['', [Validators.required]],
    location: ['', [Validators.required]],
  });
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  routeView() {
    this._route.navigate(["/candidateView"]);
  }
  setDefault() {

    let details = {
      id: '',
      password: '',
      firstName: this.userData[0].firstName,
      middleName: this.userData[0].middleName,
      lastName: this.userData[0].lastName,
      bio: this.userData[0].bio,
      location: this.userData[0].location,
      education: this.userData[0].education,
      email: this.userData[0].email,
      dob: this.userData[0].dob,
      resume: '',
      contactNumber: this.userData[0].contactNumber,
    };

    this.editCandidate.setValue(details);
  }
  submit(form: FormGroup) {
    this._candidate.CandidateDataSignUp$.next(form.value);
  }
}

