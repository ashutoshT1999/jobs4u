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
  constructor(private _fb:FormBuilder, private _router:Router, private _job:JobsServices) { }
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
        job_title: this.newJob.value.job_title.toString(),
        company_name: 'GlobalLogic PVT LTD',
        category: this.newJob.value.category.toString(),
        city: this.newJob.value.city.toString(),
        country: this.newJob.value.country.toString(),
        post_date: date.getDate().toString(),
        job_type: '',
        valid_through: this.newJob.value.valid_through,
        salary_offered: this.newJob.value.salary_offered,
        job_description: this.newJob.value.description,
        required_skills: '',
        html_job_description: ''
      }
      console.log(job);
      
      if(this._job.createEmployeebyApi(job as IJob))
        setTimeout(() => (this._router.navigate(['/postedJobs'])), 2000);
    }
  }

}
