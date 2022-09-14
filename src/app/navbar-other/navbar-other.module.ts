import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOtherComponent } from './navbar-other.component';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavbarOtherComponent
  ],
  imports: [
    CommonModule,RouterModule,MaterialsModule
  ],
  exports:[
    NavbarOtherComponent
  ]
})
export class NavbarOtherModule { }
