import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { IJob } from 'src/app/Models/job.interface';
import { JobsServices } from 'src/app/Services/Jobs/jobs.service';

@Component({
  selector: 'app-edit-jobs',
  templateUrl: './edit-jobs.component.html',
  styleUrls: ['./edit-jobs.component.css']
})
export class EditJobsComponent implements OnInit {
  keywords = new Set(['']);
  jobOptions: string[] = ['software Developer', 'Sales Executive', 'Networking', 'Software Tester', 'Teacher', 'Marketing Executive','Engineering Design', 'Accounts', 'Journalism', 'Hotels', 'Medical', "Sales", "Production","Financial Services","IT Software - Application Programming", "ITES", "Executive Assistant"];
  newJob!:FormGroup;
  jobID:number = -1;
  jobDetails:IJob = {
    id: 0,
    job_title: '',
    company_name: '',
    category: '',
    city: '',
    country: '',
    post_date: '',
    job_type: '',
    valid_through: '',
    salary_offered: '',
    job_description: '',
    required_skills: '',
    html_job_description: ''
  }
  constructor(private _fb:FormBuilder, private _routed:ActivatedRoute, private _job:JobsServices) { }

  ngOnInit(): void {
    this.keywords.delete('');
    this.newJob = this._fb.group({
      job_title: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      category: [''],
      valid_through: ['', Validators.required],
      salary_offered: ['', Validators.required],
      description: ['', [Validators.required]],
      numberOfOpenings:['', Validators.required],
      required_skills: ['', [Validators.required]],
      roleAndResponsibility: ['', Validators.required]
    })
    
    this.jobID = Number(this._routed.snapshot.queryParamMap.get('id'));
    // console.log(this.jobID);

    this._job.getJobList().subscribe((list) => {
      this.jobDetails = list.find(x => x.id == this.jobID)!;
      this.newJob.patchValue(this.jobDetails);
    })
    
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  submit(){
    
    console.log(this.newJob.value.category);
  }

}
