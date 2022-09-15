import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { CompaniesService } from 'src/app/Services/companies/companies.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  isSubmitted:boolean=false;
  userData:any[]=[];
  constructor(private _fb: FormBuilder, private _route: Router,private _snackBar: MatSnackBar,private _company:CompaniesService) {
  }

  ngOnInit(): void {
    this._company.companyIDsubject$.subscribe((data) => {
      this._company.getCompaniesDatabyAPI().subscribe((companyData) => {
        this.userData = companyData.filter(x => x.emailID == data);
        this.setDefault();
      })
    })
  }

  editCompany = this._fb.group({
    companyName: ['', [Validators.required]],
    companyType: ['', [Validators.required]],
    companyOffices: ['', [Validators.required]],
    hiringDomains: ['', [Validators.required]],
    emailID: ['', [Validators.required, Validators.email]],
    contactInfo: ['', [Validators.required]],
    aboutCompany: ['', [Validators.required]],
  })
  email = new FormControl('', [Validators.required, Validators.email]);

  openSnackBar() { 
    if(this.editCompany.valid){
      this._snackBar.open("Data saved succesfully.","OK");  
      this.isSubmitted = true;  
    }
    else{
      this._snackBar.open("Please fill all the form details carefully","OK"); 
      this.isSubmitted = false;
    }
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  routeView(){
    if(this.editCompany.valid){
      this._route.navigate(["/companyView"]);
    }
  }
  setDefault() {
 
    let details = {
      companyName: this.userData[0].companyName,
      companyType:  this.userData[0].companyType,
      companyOffices:  this.userData[0].companyOffices,
      hiringDomains:  this.userData[0].hiringDomains,
      emailID:  this.userData[0].emailID,
      contactInfo:  this.userData[0].contactInfo,
      aboutCompany:  this.userData[0].aboutCompany,
    };
 
    this.editCompany.setValue(details);
  }

  CompanyOffices: string[] = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"];
}
