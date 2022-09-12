import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostedJobDialog } from './complete-description/completeDescription.dialog';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  details(){
    this.dialog.open(PostedJobDialog);
  }
}
