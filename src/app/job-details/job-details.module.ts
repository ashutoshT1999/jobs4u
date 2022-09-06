import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostedJobsComponent } from './company/posted-jobs/posted-jobs.component';
import { EditJobsComponent } from './company/edit-jobs/edit-jobs.component';
import { AddNewJobComponent } from './company/add-new-job/add-new-job.component';
import { AppliedJobsComponent } from './candidate/applied-jobs/applied-jobs.component';



@NgModule({
  declarations: [
    PostedJobsComponent,
    EditJobsComponent,
    AddNewJobComponent,
    AppliedJobsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JobDetailsModule { }
