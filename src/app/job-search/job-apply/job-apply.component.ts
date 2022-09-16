import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICandidate } from 'src/app/Models/candidate.interface';
import { IJob } from 'src/app/Models/job.interface';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { CompaniesService } from 'src/app/Services/companies/companies.service';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {

  jobApplicationForm!:FormGroup;
  candidateDetails:any;
  isLoggedIn:boolean=false;
  jobData:IJob= {
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
    html_job_description: '',
    totalApplicationCount: 0
  }
  constructor(private _formBuilder:FormBuilder, private _router:Router, private _route:ActivatedRoute,
    private _candidate:CandidatesService, private _company:CompaniesService, private _http:HttpClient) { }

  ngOnInit(): void {

    this._company.Loggedin$.subscribe(data => this.isLoggedIn = data);

    this._candidate.candidateIDsubject$.subscribe((data) => {
      this._candidate.getCandidatesDatabyAPI().subscribe((candidateData) => {
        this.candidateDetails = candidateData.find(x => x.email == data)!;
        this.jobApplicationForm.patchValue({
          firstName: this.candidateDetails.firstName,
          lastName: this.candidateDetails.lastName,
          email: this.candidateDetails.email,
          contactNumber: this.candidateDetails.contactNumber,
        })
      })
    });

    this.jobApplicationForm = this._formBuilder.group({
      firstName:['', [Validators.required]],
      middleName:[''],
      lastName:['', [Validators.required]],
      email:['', [Validators.required]],
      contactNumber:[ , [Validators.required, Validators.min(1000000000), Validators.max(9999999999) ]],
      qualification:['', [Validators.required]],
      resume:['', [Validators.required]],
    });

    if(this.isLoggedIn){
      
      console.log('in if',this.candidateDetails, this.isLoggedIn);
    }
    else {
      this._router.navigate(['/login'])
    }
  }


  apply(){
    if(this.jobApplicationForm.status === 'INVALID') return;
    else {
      let id = +this._route.snapshot.paramMap.get('id')!;
      
      if(id) {
        // updating job
        this._http.get<IJob>('api/jobs/'+id)!.subscribe((data:IJob)=>{
          console.log('data',data);
          this.jobData = data;
          this.jobData.totalApplicationCount =  1 + data.totalApplicationCount!;
          console.log("job data ",this.jobData)
          this._http.put('api/jobs/'+this.jobData.id, this.jobData,{
            headers:new HttpHeaders({ 'Content-Type':'application/json' })
          }).subscribe(data=>console.log(data));
        })
        // updating candidate details 
        this._http.get<ICandidate>('api/candidatesData/'+this.candidateDetails.id)
        .subscribe((data:ICandidate)=>{
          data.appliedJobs.push(id);
          this._http.put('api/candidatesData/'+this.candidateDetails.id,data, {
            headers: new HttpHeaders({'Content-Type':'application/json'})
          }).subscribe(data=>console.log(data))
        })
        setTimeout(()=>{
          this._http.get('api/jobs/'+id)!.subscribe((data:any)=>console.log("another j",data))
        },2000)
        setTimeout(()=>{
          this._http.get('api/candidatesData/'+this.candidateDetails.id)!.subscribe((data:any)=>console.log("another c",data))
        },2000)
        
      }
    }
  }

  back(){
    this._router.navigate(['/search']);
  }
}
