import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { MaterialsModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,MaterialsModule, RouterModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
