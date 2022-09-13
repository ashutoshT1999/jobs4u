import { Component, OnInit } from '@angular/core';
import { JobsServices } from 'src/app/Services/Jobs/jobs.service';

@Component({
  selector: 'app-job-display',
  templateUrl: './job-display.component.html',
  styleUrls: ['./job-display.component.css']
})
export class JobDisplayComponent implements OnInit {
  job:any={ 
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
  }

  constructor(private _jobService:JobsServices) { }

  ngOnInit(): void {
    this._jobService.displayJob$.subscribe(data => this.job=data);
  }

}
