import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from 'src/app/Models/dialogData.interface';

@Component({
  selector: 'app-posted-dialog',
  templateUrl: './completeDescription.dialog.html',
  styleUrls: ['./completeDescription.dialog.css']
})

export class PostedJobDialog implements OnInit {

    constructor(public dialogRef: MatDialogRef<PostedJobDialog>,
      @Inject(MAT_DIALOG_DATA) public data: IDialogData,) {}

    ngOnInit(): void {
        
    }

}