import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-job-seekers',
  templateUrl: './login-job-seekers.component.html',
  styleUrls: ['./login-job-seekers.component.css']
})
export class LoginJobSeekersComponent implements OnInit {

  LoginJobSeekersForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.LoginJobSeekersForm=this._fb.group({
       
      email:['',Validators.required],
      // email:['',[Validators.required,CustomValidators.emailCheckParam('gmail.com')]],
        password:['', Validators.required],
        
    })

  }
  submit(){
    console.log(this.LoginJobSeekersForm);
    // console.log(this.productForm.get('name'));
    // console.log(this.productForm.get('name')!.errors!['required']);
  
    
  }
}
