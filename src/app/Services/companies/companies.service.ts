import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICompany } from "src/app/Models/company.interface";

@Injectable()
export class CompaniesService{

    companiesDataURL:string="api/companiesData";
    constructor(private _http:HttpClient){

    }
    
    getCompaniesDatabyAPI():Observable<ICompany[]>{
        return this._http.get<ICompany[]>(this.companiesDataURL);
    }
}