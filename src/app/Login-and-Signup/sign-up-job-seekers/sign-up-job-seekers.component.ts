import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';

@Component({
  selector: 'app-sign-up-job-seekers',
  templateUrl: './sign-up-job-seekers.component.html',
  styleUrls: ['./sign-up-job-seekers.component.css']
})
export class SignUpJobSeekersComponent implements OnInit {
  SignupJobSeekersForm!:FormGroup;
  pass1:string='';
  pass2:string='';
  errorPassword:boolean=false;
  constructor(private _fb:FormBuilder,private _candidate:CandidatesService) {}   
  ngOnInit(): void {
    this.SignupJobSeekersForm=this._fb.group({
      
        email:['',[Validators.required,Validators.email]],
        password:['', Validators.required],
        password2:['', Validators.required]

    })
    this._candidate.onLanding$.next(false);
  }
// ngOnChanges():void{
  
//   this.SignupJobSeekersForm.get('password')?.valueChanges.subscribe(x=>{
//     this.pass1=x;
//   })
//   this.SignupJobSeekersForm.get('password2')?.valueChanges.subscribe(x=>{
//     this.pass2=x;
//     if(this.pass1!==this.pass2){
//       this.errorPassword=true;
//     }
//     else{
//       this.errorPassword=false;
//     }
//     console.log(this.errorPassword, this.pass1, this.pass2);
//   })


// }

  submit(){

  }

  // isSamePassword(){
  //   if(this.pass1==this.pass2){
  //     console.log("true");
  //     console.log(this.pass1);
  //     this.errorPassword=true;
  //   }
  //   else{
  //     console.log("false");
  //     console.log(this.pass2);
  //     this.errorPassword=false;
  //   }
  // }
}
