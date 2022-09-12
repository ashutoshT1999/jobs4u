import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSearchComponent } from './job-search/job-search.component';
import { LandingPageComponent } from './Landing_page/landing-page.component';
import { LoginComponent } from './Login-and-Signup/login/login.component';
import { SignUpJobSeekersComponent } from './Login-and-Signup/sign-up-job-seekers/sign-up-job-seekers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'search', component: JobSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'candidateSignup', component: SignUpJobSeekersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
