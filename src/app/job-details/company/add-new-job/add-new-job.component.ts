import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {
  keywords = new Set(['']);

  newJob!:FormGroup;
  constructor(private _fb:FormBuilder, private _router:Router) { }

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
      skills: ['']
    })
    
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      // this.newJob.get('skills')?!.errors('pristine')!;
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  submit(){
    console.log(this.newJob);
    
    if(this.newJob.valid){
      this._router.navigate(['/postedJobs']);
    }
  }

}
