import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ICompany } from "src/app/Models/company.interface";
import { EditCompanyComponent } from "src/app/Profile.module/Company/Edit profile/edit-company.component";

@Injectable()
export class CompaniesService implements CanDeactivate<EditCompanyComponent>,OnInit {
    companyIDsubject$ = new Subject;
    companiesDataURL: string = "api/companiesData";
    onCompanies$= new BehaviorSubject(false);
    constructor(private _http: HttpClient) {

    }
    ngOnInit(): void {
        this.onCompanies$.next(true);
    }

    getCompaniesDatabyAPI(): Observable<ICompany[]> {
        return this._http.get<ICompany[]>(this.companiesDataURL);
    }
    userID(user: string) {
        this.companyIDsubject$.next(user);
    }
    canDeactivate(component: EditCompanyComponent): Observable<boolean> | Promise<boolean> | boolean {

        if (component.editCompany.dirty) return confirm("Are you sure you want to discard the changes ?");
        else return true;

    }

}