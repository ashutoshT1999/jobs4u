import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JobsServices } from 'src/app/Services/Jobs/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobList = [
    { 
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
  ];
  @Output()
  resultFoundEvent:EventEmitter<boolean>=new EventEmitter<boolean>()
  
  constructor(private _jobService:JobsServices) { }

  ngOnInit(): void {
    this._jobService.getJobList().subscribe(dataList=> {
      this.jobList=dataList
    });
  }

  showDetails(job:any){
    this._jobService.displayJob$.next(job);
  }

  filterJob(title:string,location:string){
    this._jobService.getJobList().subscribe(dataList=> {
      this.jobList=dataList.filter((obj:any)=>(title === obj.category || title === 'all') && (location === obj.inferred_city || location === 'all'));
      if(this.jobList.length) {
        this.resultFoundEvent.emit(true);
      this._jobService.displayJob$.next(this.jobList[0]);

      }
      else this.resultFoundEvent.emit(false);
    });
  }

}
