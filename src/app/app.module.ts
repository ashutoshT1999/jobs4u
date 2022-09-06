import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { LoginAndSignupModule } from './Login-and-Signup/login-and-signup.module';
=======
import { LandingPageModule } from './Landing_page/landing-page.module';
import { NavbarModule } from './navbar/navbar.module';

>>>>>>> 79f0849376ee3c0899f621bc74cd3f980c218c04

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
<<<<<<< HEAD
    LoginAndSignupModule
=======
    LandingPageModule,
    NavbarModule
>>>>>>> 79f0849376ee3c0899f621bc74cd3f980c218c04
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
