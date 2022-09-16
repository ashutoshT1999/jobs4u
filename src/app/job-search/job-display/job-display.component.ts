import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJob } from 'src/app/Models/job.interface';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { JobsServices } from 'src/app/Services/Jobs/jobs.service';

@Component({
  selector: 'app-job-display',
  templateUrl: './job-display.component.html',
  styleUrls: ['./job-display.component.css']
})
export class JobDisplayComponent implements OnInit {
  
  job:IJob={ 
    id: 0,
    job_title: "",
    category: "",
    company_name: "",
    city: "",
    country: "",
    post_date: "",
    job_type: "",
    salary_offered: "",
    valid_through: "",
    job_description: '',
    required_skills: '',
    html_job_description:``
  };

  constructor(private _router:Router, private _jobService:JobsServices) { }

  ngOnInit(): void {
    
    this._jobService.displayJob$.subscribe(data => this.job=data);
  }

}
