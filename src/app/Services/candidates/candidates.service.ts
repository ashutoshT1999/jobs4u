import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ICandidate } from "src/app/Models/candidate.interface";
import { EditComponent } from "src/app/Profile.module/Candidate/Edit profile/edit.component";

@Injectable()
export class CandidatesService implements CanDeactivate<EditComponent>, OnInit {
    candidateIDsubject$ = new Subject;
    onLanding$ = new BehaviorSubject(true);
    onLanding: string | null = "true";
    onCandidate$ = new BehaviorSubject(false);
    candidatesDataURL: string = "api/candidatesData";
    
    ngOnInit(): void {
       
    }
    constructor(private _http: HttpClient) {

    }

    getCandidatesDatabyAPI(): Observable<ICandidate[]> {
        return this._http.get<ICandidate[]>(this.candidatesDataURL);

    }
    userID(user: string) {
        this.candidateIDsubject$.next(user);
    }

    canDeactivate(component: EditComponent): Observable<boolean> | Promise<boolean> | boolean {

        if (component.editCandidate.dirty) return confirm("Are you sure you want to discard the changes ?");
        else return true;

    }



}