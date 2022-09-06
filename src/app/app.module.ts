import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageModule } from './Landing_page/landing-page.module';
import { NavbarModule } from './navbar/navbar.module';
import { PostedJobsComponent } from './jobDetails/company/posted-jobs/posted-jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    PostedJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    LandingPageModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
