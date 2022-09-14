import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.css']
})
export class SignupCompanyComponent implements OnInit,OnDestroy {

  SignupCompanyForm!:FormGroup;
  constructor(private _fb:FormBuilder,private _candidate:CandidatesService) { }
  
  ngOnInit(): void {
    this.SignupCompanyForm=this._fb.group({
       
      
        email:['',[Validators.required,Validators.email]],
        password:['', Validators.required],
        password2:['', Validators.required],

        
    })
    this._candidate.onLanding$.next(false);

  }
  ngOnDestroy(): void {
  }

  submit(){ 
  }

}
