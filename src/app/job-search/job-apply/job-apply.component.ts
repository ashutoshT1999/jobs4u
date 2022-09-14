import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {

  jobApplicationForm!:FormGroup;

  constructor(private _formBuilder:FormBuilder, private _router:Router) { }

  ngOnInit(): void {
    this.jobApplicationForm = this._formBuilder.group({
      firstName:['', [Validators.required]],
      middleName:[''],
      lastName:['', [Validators.required]],
      email:['', [Validators.required]],
      contactNumber:[ , [Validators.required, Validators.min(1000000000), Validators.max(9999999999) ]],
      qualification:['', [Validators.required]],
      resume:['', [Validators.required]],
    })
  }
  apply(){
    if(this.jobApplicationForm.status === 'INVALID') return;
  }

  back(){
    this._router.navigate(['/search']);
  }
}
