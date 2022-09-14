import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './Candidate/Edit profile/edit.component';
import { ViewComponent } from './Candidate/View profile/view.component';
import { MaterialsModule } from '../material/material.module';
import { EditCompanyComponent } from './Company/Edit profile/edit-company.component';
import { ViewCompanyComponent } from './Company/View profile/view-company.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EditComponent,
    ViewComponent,
    EditCompanyComponent,
    ViewCompanyComponent
  ],
  imports: [
    CommonModule, MaterialsModule, RouterModule
  ],
  exports: [
    EditComponent,
    ViewComponent,
    EditCompanyComponent,
    ViewCompanyComponent

  ]
})
export class ProfileModule { }
