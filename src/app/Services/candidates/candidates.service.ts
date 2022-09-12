import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { ICandidate } from "src/app/Models/candidate.interface";
import { EditComponent } from "src/app/Profile.module/Candidate/Edit profile/edit.component";

@Injectable()
export class CandidatesService implements CanDeactivate<EditComponent> {
    candidateIDsubject$ = new Subject;
    onLanding$= new Subject;
    candidatesDataURL: string = "api/candidatesData";
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