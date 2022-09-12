import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { CustomValidators } from '../Validators/validators';

@Component({
  selector: 'app-sign-up-job-seekers',
  templateUrl: './sign-up-job-seekers.component.html',
  styleUrls: ['./sign-up-job-seekers.component.css']
})
export class SignUpJobSeekersComponent implements OnInit {
  SignupJobSeekersForm!:FormGroup;
 
  constructor(private _fb:FormBuilder,private _candidate:CandidatesService) {}   
  ngOnInit(): void {
    this.SignupJobSeekersForm=this._fb.group({

        email:['',[Validators.required,CustomValidators.emailCheckParam('gmail.com')]],
        password:['', Validators.required, Validators.minLength(8)],
        password2:['', Validators.required]

        
    })
    this._candidate.onLanding$.next(false);
  }
  submit(){
  }
}
