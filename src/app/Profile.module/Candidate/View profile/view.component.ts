import { Component, OnInit } from '@angular/core';
import { ICandidate } from 'src/app/Models/candidate.interface';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userDataBySubject: ICandidate[] = [];
  constructor(private _candidate: CandidatesService) { }

  ngOnInit(): void {
    this._candidate.candidateIDsubject$.subscribe((data) => {
      this._candidate.getCandidatesDatabyAPI().subscribe((candidateData) => {
        this.userDataBySubject = candidateData.filter(x => x.email == data);
        console.log(this.userDataBySubject);
      })
    })
  }

}
