import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { IJob } from 'src/app/Models/job.interface';
import { JobsServices } from 'src/app/Services/Jobs/jobs.service';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {
  keywords = new Set(['']);

  newJob!:FormGroup;
  constructor(private _fb:FormBuilder, private _router:Router, private _job:JobsServices, private _http:HttpClient) { }
  jobOptions: string[] = ['software Developer', 'Sales Executive', 'Networking', 'Software Tester', 'Teacher', 'Marketing Executive','Engineering Design', 'Accounts', 'Journalism', 'Hotels', 'Medical', "Sales", "Production","Financial Services","IT Software - Application Programming", "ITES", "Executive Assistant"];

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
    
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      // this.newJob.get('skills')?!.errors('pristine')!;
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  submit(){
    console.log(this.newJob);
    
    if(this.newJob.valid){
      var date = new Date();
      var job:IJob ={
        id: 21,
        isClosed: false,
        job_title: this.newJob.value.job_title.toString(),
        company_name: 'GlobalLogic Pvt Limited.',
        category: this.newJob.value.category,
        city: this.newJob.value.city.toString(),
        country: this.newJob.value.country.toString(),
        post_date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
        job_type: '',
        description: this.newJob.value.description,
        roleAndResponsibility: this.newJob.value.description,
        valid_through: this.newJob.value.valid_through,
        salary_offered: this.newJob.value.salary_offered,
        job_description: this.newJob.value.description,
        required_skills: '',
        html_job_description: ''
      }
      console.log(job);
      
      this._http.post<IJob>('api/jobs',job,
        {
            headers:new HttpHeaders({
                'Content-Type':'application/json'
            })
        }).subscribe(Data => console.log(Data));
        setTimeout(()=>{
          (this._router.navigate(['/postedJobs']))
        },2000)
    }
  }
 }
