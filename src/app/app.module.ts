import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginAndSignupModule } from './Login-and-Signup/login-and-signup.module';
import { LandingPageModule } from './Landing_page/landing-page.module';
import { NavbarModule } from './navbar/navbar.module';
import { JobSearchModule } from './job-search/job-search.module';
import { JobDetailsModule } from './job-details/job-details.module';
import { ProfileModule } from './Profile.module/profile.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataSourceService } from './Data/data.service';
import { CompaniesService } from './Services/companies/companies.service';
import { CandidatesService } from './Services/candidates/candidates.service';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { NavbarOtherModule } from './navbar-other/navbar-other.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    LoginAndSignupModule,
    LandingPageModule,
    NavbarModule,
    JobDetailsModule,
    JobSearchModule,
    ProfileModule, PageNotFoundModule,
    HttpClientModule,NavbarOtherModule,
    HttpClientInMemoryWebApiModule.forRoot(DataSourceService),
  ],
  providers: [CompaniesService, CandidatesService, DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
