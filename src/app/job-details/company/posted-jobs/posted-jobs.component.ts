import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dialog(){
    alert("HI!");
  }
}
