import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,NgbModule,
    MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDialogModule, MatDatepickerModule,MatNativeDateModule, MatIconModule,
    MatTableModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule, MatToolbarModule,MatChipsModule,MatDividerModule, MatAutocompleteModule,
    MatCardModule,MatSnackBarModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatDialogModule, MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule, MatIconModule,
    MatTableModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule, MatToolbarModule,MatChipsModule,MatDividerModule, MatAutocompleteModule,
    MatCardModule,MatSnackBarModule
  ]
})
export class MaterialsModule { }
