import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICandidate } from 'src/app/Models/candidate.interface';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userDataBySubject: ICandidate[] = [{
    id: 0,
    password: '',
    firstName: '',
    middleName: '',
    lastName: '',
    bio: '',
    location: '',
    education: '',
    email: '',
    dob: '',
    resume: undefined,
    contactNumber: 0,
    appliedJobs: []
  }];
  userData: any;
  constructor(private _candidate: CandidatesService) { }

  ngOnInit(): void {

      this._candidate.candidateIDsubject$.subscribe((data) => {
        this._candidate.getCandidatesDatabyAPI().subscribe((candidateData) => {
          this.userDataBySubject = candidateData.filter(x => x.email == data);

        })
      })
  
    
      this._candidate.CandidateDataSignUp$.subscribe(x => {
        this.userData = x;
        console.log(this.userData);
      })

    this._candidate.onCandidate$.next(true);
  }


}
