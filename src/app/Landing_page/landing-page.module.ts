import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MaterialsModule } from '../material/material.module';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,MaterialsModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
