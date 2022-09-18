import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICandidate } from 'src/app/Models/candidate.interface';
import { ICompany } from 'src/app/Models/company.interface';
import { IJob } from 'src/app/Models/job.interface';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { CompaniesService } from 'src/app/Services/companies/companies.service';
import { JobsServices } from 'src/app/Services/Jobs/jobs.service';
import { PostedJobDialog } from './complete-description/completeDescription.dialog';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {
  userDataBySubject: ICompany = {
    id: 0,
    password: '',
    companyName: '',
    companyType: [],
    companyOffices: [],
    hiringDomains: [],
    emailID: '',
    contactInfo: '',
    aboutCompany: '',
    jobPosted: []
  };

  jobData: IJob[] = [] ;


  constructor(private dialog:MatDialog, private _companyData: CompaniesService, private _jobs:JobsServices, private _route:Router) { }

  ngOnInit(): void {
    this._companyData.companyIDsubject$.subscribe((data) => {
      this._companyData.getCompaniesDatabyAPI().subscribe((candidateData) => {
        this.userDataBySubject = candidateData.find(x => x.emailID == data)!;
        console.log(this.userDataBySubject);
      })
    })

    this._jobs.getJobList().subscribe((list) => {
      console.log(list);
      this.jobData = list.filter(x => this.userDataBySubject.jobPosted.includes(x.id))
      console.log(this.jobData);
    })
    console.log("outside: " + this.jobData);

  }

  details(jobName:string, companyName:string, city:string, country:string, category:string, salary:string, validThrough:string){
    this.dialog.open(PostedJobDialog, {
      data: {
        jobName: jobName,
        companyName: companyName,
        city: city,
        country: country,
        category: category,
        salary:salary,
        validThrough: validThrough
      }
    });
  }

  routeEdit(id:number){
    this._route.navigate(['/postedJobs/edit'], {queryParams: {id:id}});
  }

  closeJob(id:number){
    //this.jobData.find(x => x.id == id)?.isClosed = !this.jobData.find(x => x.id == id)?.isClosed!;
  }
}
