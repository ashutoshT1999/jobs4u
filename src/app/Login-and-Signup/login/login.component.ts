import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm=this._fb.group({
       
       email:['',[Validators.required,CustomValidators.emailCheckParam('gmail.com')]],
        password:['', Validators.required],
        
    })

  }
  submit(){
  
  }


}
