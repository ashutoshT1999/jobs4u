import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MaterialsModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,MaterialsModule,RouterModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
