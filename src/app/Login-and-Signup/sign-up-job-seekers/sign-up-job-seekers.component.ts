import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';

@Component({
  selector: 'app-sign-up-job-seekers',
  templateUrl: './sign-up-job-seekers.component.html',
  styleUrls: ['./sign-up-job-seekers.component.css']
})
export class SignUpJobSeekersComponent implements OnInit,OnDestroy {
  SignupJobSeekersForm!:FormGroup;
 
  constructor(private _fb:FormBuilder,private _candidate:CandidatesService) {}   
  ngOnInit(): void {
    this.SignupJobSeekersForm=this._fb.group({

        email:['',[Validators.required,Validators.email]],
        password:['', Validators.required],
        password2:['', Validators.required]

        
    })
    this._candidate.onLanding$.next(false);
  }
  ngOnDestroy(){
  }
  submit(){
  }
}
