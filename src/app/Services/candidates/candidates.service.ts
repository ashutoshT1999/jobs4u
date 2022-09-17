import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { BehaviorSubject, Observable, retry, Subject } from "rxjs";
import { ICandidate } from "src/app/Models/candidate.interface";
import { EditComponent } from "src/app/Profile.module/Candidate/Edit profile/edit.component";

@Injectable()
export class CandidatesService implements CanDeactivate<EditComponent> {
    candidateIDsubject$ = new BehaviorSubject("");
    onLanding$ = new BehaviorSubject(true);
    onCandidate$ = new BehaviorSubject(false);
    CandidateDataSignUp$ = new Subject();
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

        if (component.editCandidate.dirty && !component.isSubmitted) return confirm("Are you sure you want to discard the changes ?");
        else return true;

    }

    getProducts(): Observable<ICandidate[]> {
        return this._http.get<ICandidate[]>(this.candidatesDataURL);
    }

    createProduct(candidate: any): Observable<any> {
        candidate.id = 0;
        return this._http.post<any>(this.candidatesDataURL, candidate);
    }

    editProduct(candidate: ICandidate): Observable<any> {
        return this._http.put(this.candidatesDataURL, candidate);
    }

}