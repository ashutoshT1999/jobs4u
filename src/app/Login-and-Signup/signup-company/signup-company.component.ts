import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/validators';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.css']
})
export class SignupCompanyComponent implements OnInit {

  SignupCompanyForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.SignupCompanyForm=this._fb.group({
       
      
        email:['',[Validators.required,CustomValidators.emailCheckParam('gmail.com')]],
        password:['', Validators.required, Validators.maxLength(8), Validators.minLength(8)],
        password2:['', Validators.required],

        
    })

  }
  submit(){
  }

}
