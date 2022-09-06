import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MaterialsModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,MaterialsModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
