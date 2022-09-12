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
      job_title:'',
      company_name:'',
      html_job_description:'',
      salary_offered:'',
      category:'',
      inferred_city:''
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
    console.log(title, location)

    this._jobService.getJobList().subscribe(dataList=> {
      this.jobList=dataList.filter((obj:any)=>(title === obj.category || title === 'all') && (location === obj.inferred_city || location === 'all'));
      if(this.jobList.length) this.resultFoundEvent.emit(true);
      else this.resultFoundEvent.emit(false);
    });
  }

}
