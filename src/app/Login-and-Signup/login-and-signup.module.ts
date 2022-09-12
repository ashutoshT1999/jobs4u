import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpJobSeekersComponent } from './sign-up-job-seekers/sign-up-job-seekers.component';
import { SignupCompanyComponent } from './signup-company/signup-company.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [ SignUpJobSeekersComponent, SignupCompanyComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[ LoginComponent, SignUpJobSeekersComponent,  SignupCompanyComponent]
})
export class LoginAndSignupModule { }
