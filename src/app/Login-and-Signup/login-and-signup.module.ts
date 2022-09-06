import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginJobSeekersComponent } from './login-job-seekers/login-job-seekers.component';



@NgModule({
  declarations: [LoginJobSeekersComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    ReactiveFormsModule
  ],
  exports:[LoginJobSeekersComponent]
})
export class LoginAndSignupModule { }
