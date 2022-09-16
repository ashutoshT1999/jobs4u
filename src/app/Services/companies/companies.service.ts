import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { ICompany } from "src/app/Models/company.interface";
import { EditCompanyComponent } from "src/app/Profile.module/Company/Edit profile/edit-company.component";

@Injectable()
export class CompaniesService implements CanDeactivate<EditCompanyComponent>, OnInit,OnDestroy {
    companyIDsubject$ = new BehaviorSubject("");
    companiesDataURL: string = "api/companiesData";
    onCompanies$ = new BehaviorSubject(false);
    Loggedin$ = new BehaviorSubject(false);
    userName$ = new BehaviorSubject("");
    constructor(private _http: HttpClient) {

    }
    ngOnInit(): void {
        this.onCompanies$.next(true);
    }
    ngOnDestroy(): void {
        this.onCompanies$.next(false);
    }

    getCompaniesDatabyAPI(): Observable<ICompany[]> {
        return this._http.get<ICompany[]>(this.companiesDataURL);
    }
    userID(user: string) {
        this.companyIDsubject$.next(user);

    }
    canDeactivate(component: EditCompanyComponent): Observable<boolean> | Promise<boolean> | boolean {

        if (component.editCompany.dirty && !component.isSubmitted) return confirm("Are you sure you want to discard the changes ?");
        else return true;

    }
    getProducts(): Observable<any> {
        return this._http.get<any>(this.companiesDataURL);
    }

    createProduct(companies: any): Observable<any> {
        companies.id = 0;
        return this._http.post<any>(this.companiesDataURL, companies);
    }

}