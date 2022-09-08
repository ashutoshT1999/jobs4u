import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

  }
  editCandidate = this._fb.group({
    id:'',
    password: [''],
    firstName: ['',[Validators.required]],
    middleName: [''],
    lastName: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    dob: ['',[Validators.required]],
    resume: [''],
    contactNumber: [,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    bio: ['',[Validators.required]],
    education: ['',[Validators.required]],
    location: ['',[Validators.required]],
  }) ;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
