import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSearchComponent } from './job-search/job-search.component';
import { LandingPageComponent } from './Landing_page/landing-page.component';
<<<<<<< HEAD
import { LoginComponent } from './Login-and-Signup/login/login.component';
=======
>>>>>>> de4e5d05dff897267618ce455eaa13d8229d96f9
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', component:LandingPageComponent},
  {path:'search', component:JobSearchComponent},
<<<<<<< HEAD
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}, 
=======
  {path:'', redirectTo:'home', pathMatch:'full'},
>>>>>>> de4e5d05dff897267618ce455eaa13d8229d96f9
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
