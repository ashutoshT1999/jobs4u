import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOtherComponent } from './navbar-other.component';



@NgModule({
  declarations: [
    NavbarOtherComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarOtherComponent
  ]
})
export class NavbarOtherModule { }
