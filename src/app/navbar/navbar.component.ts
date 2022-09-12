import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../Services/candidates/candidates.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  onLanding:any=true;
  constructor(private _data:CandidatesService) { }

  ngOnInit(): void {
    this._data.onLanding$.subscribe(data=>{
      this.onLanding = data;
    })
  }

}
