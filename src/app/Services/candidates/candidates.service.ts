import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICandidate } from "src/app/Models/candidate.interface";

@Injectable()
export class CandidatesService {

    candidatesDataURL: string = "api/candidatesData";
    constructor(private _http: HttpClient) {

    }

    getCandidatesDatabyAPI(): Observable<ICandidate[]> {
        return this._http.get<ICandidate[]>(this.candidatesDataURL);

    }
}