import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobsComponent } from './job-details/candidate/applied-jobs/applied-jobs.component';
import { AddNewJobComponent } from './job-details/company/add-new-job/add-new-job.component';
import { EditJobsComponent } from './job-details/company/edit-jobs/edit-jobs.component';
import { PostedJobsComponent } from './job-details/company/posted-jobs/posted-jobs.component';
import { JobApplyComponent } from './job-search/job-apply/job-apply.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { LandingPageComponent } from './Landing_page/landing-page.component';
import { LoginComponent } from './Login-and-Signup/login/login.component';
import { SignUpJobSeekersComponent } from './Login-and-Signup/sign-up-job-seekers/sign-up-job-seekers.component';
import { SignupCompanyComponent } from './Login-and-Signup/signup-company/signup-company.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditComponent } from './Profile.module/Candidate/Edit profile/edit.component';
import { ViewComponent } from './Profile.module/Candidate/View profile/view.component';
import { EditCompanyComponent } from './Profile.module/Company/Edit profile/edit-company.component';
import { ViewCompanyComponent } from './Profile.module/Company/View profile/view-company.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'search', component: JobSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'candidateSignup', component: SignUpJobSeekersComponent },
  { path: 'companySignup', component: SignupCompanyComponent },
  { path: 'candidateView',component: ViewComponent },
  { path: 'companyView',component: ViewCompanyComponent },
  { path: 'candidateEdit',component: EditComponent },
  { path: 'companyEdit',component: EditCompanyComponent },
  { path: 'postedJobs', component: PostedJobsComponent},
  { path: 'postedJobs/edit', component:EditJobsComponent},
  { path: 'appliedJobs', component:AppliedJobsComponent},
  { path: 'newJob', component: AddNewJobComponent},
  { path: 'job/apply/:id', component: JobApplyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
