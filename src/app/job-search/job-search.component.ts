import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { JobsServices } from '../Services/Jobs/jobs.service';
import { JobListComponent } from './job-list/job-list.component';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  jobControl = new FormControl('');
  locationControl = new FormControl('');

  jobOptions: string[] = ['software Developer', 'Sales Executive', 'Networking', 'Software Tester', 'Teacher', 'Marketing Executive','Engineering Design', 'Accounts', 'Journalism', 'Hotels', 'Medical', "Sales", "Production","Financial Services","IT Software - Application Programming", "ITES", "Executive Assistant"];
  locationOptions: string[] = ['Noida', 'Delhi', 'Nagpur', 'Mumbai', 'Pune', 'Bengaluru', 'Kolkata', 'Hyderabad', 'Chennai', 'Jaipur', 'Indore', 'Gurgao', 'Ahemdabad'];
  
  filteredJobOptions!: Observable<string[]>;
  filteredLocationOptions!: Observable<string[]>;

  hideResults:boolean = true;
  
  @ViewChild('jobList')
  private jobListReference!: JobListComponent;

  // private jobListReference!:JobListComponent;
  // @ViewChild('jobList', { static: false }) set content(content: JobListComponent){
  //   if(content) this.jobListReference = content
  // }

  // constructor(private _jobService:JobsServices){}

  ngOnInit() {    
    
    // this._jobService.getJobList().subscribe(dataList=> {
    //   this.jobOptions = dataList.map((job:any)=>job.category)
    //   this.locationOptions = dataList.map((job:any)=> `${job.inferred_city}, ${job.inferred_state}`)

    //   this.filteredJobOptions = this.jobControl.valueChanges.pipe(
    //     startWith(''),
    //     map(value => this._filter('job', value || '')),
    //   );
    
    //   this.filteredLocationOptions = this.locationControl.valueChanges.pipe(
    //     startWith(''),
    //     map(value => this._filter('location',value || '')),
    //   );

    // });

    this.filteredJobOptions = this.jobControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter('job', value || '')),
    );
   
    this.filteredLocationOptions = this.locationControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter('location',value || '')),
    );
  }

  private _filter(flag: string, value: string): string[] {
    const filterValue = value.toLowerCase();
    if(flag === 'job')
      return this.jobOptions.filter(option => option.toLowerCase().includes(filterValue));    
    return this.locationOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  search(){
    this.hideResults = false;
    let title = this.jobControl.value?this.jobControl.value:'all'
    let location = this.locationControl.value?this.locationControl.value:'all'
    this.jobListReference.filterJob(title,location)
  }

  showResult(value:boolean){
    this.hideResults = !value
  }

}
