import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {
  jobApplicationForm!:FormGroup
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.jobApplicationForm = this._formBuilder.group({
      firstName:['', [Validators.required]],
      middleName:[''],
      lastName:['', [Validators.required]],
      email:['', [Validators.required]],
      contactNumber:[ , [Validators.required]],
      qualification:['', [Validators.required]],
      resume:['', [Validators.required]],
    })
    console.log(this.jobApplicationForm)
    console.log(this.jobApplicationForm.get('resume'))
  }
  apply(){
    console.log(this.jobApplicationForm)
    console.log(this.jobApplicationForm.get('resume'))
  }
}
