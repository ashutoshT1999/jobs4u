import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { CustomValidators } from '../Validators/validators';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.css']
})
export class SignupCompanyComponent implements OnInit {

  SignupCompanyForm!:FormGroup;
  constructor(private _fb:FormBuilder,private _candidate:CandidatesService) { }

  ngOnInit(): void {
    this.SignupCompanyForm=this._fb.group({
       
      
        email:['',[Validators.required,CustomValidators.emailCheckParam('gmail.com')]],
        password:['', Validators.required, Validators.maxLength(8), Validators.minLength(8)],
        password2:['', Validators.required],

        
    })
    this._candidate.onLanding$.next(false);

  }
  submit(){
  }

}
