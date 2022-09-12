import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,NgbModule,
    MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDialogModule, MatDatepickerModule,MatNativeDateModule,
    MatTableModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule, MatToolbarModule,MatChipsModule,MatDividerModule, MatAutocompleteModule,
    MatCardModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatDialogModule, MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,
    MatTableModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule, MatToolbarModule,MatChipsModule,MatDividerModule, MatAutocompleteModule,
    MatCardModule
  ]
})
export class MaterialsModule { }
