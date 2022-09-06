import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSearchComponent } from './job-search.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDisplayComponent } from './job-display/job-display.component';



@NgModule({
  declarations: [
    JobSearchComponent,
    JobListComponent,
    JobDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JobSearchModule { }
