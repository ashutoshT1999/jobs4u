import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOtherComponent } from './navbar-other.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarOtherComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    NavbarOtherComponent
  ]
})
export class NavbarOtherModule { }
