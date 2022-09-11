import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-edit-jobs',
  templateUrl: './edit-jobs.component.html',
  styleUrls: ['./edit-jobs.component.css']
})
export class EditJobsComponent implements OnInit {
  keywords = new Set(['']);

  newJob!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.keywords.delete('');
    this.newJob = this._fb.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      designation: ['', Validators.required],
      category: [''],
      lastDate: ['', Validators.required],
      ctc: ['', Validators.required],
      description: ['', [Validators.required]],
      numberOfOpenings:['', Validators.required],
      skills: ['', [Validators.required]]
    })
    
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  submit(){
    
    console.log(this.newJob);
  }

}
