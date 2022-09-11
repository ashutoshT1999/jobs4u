import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageModule } from './Landing_page/landing-page.module';
import { NavbarModule } from './navbar/navbar.module';
import { JobDetailsModule } from './job-details/job-details.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    LandingPageModule,
    NavbarModule,
    JobDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
