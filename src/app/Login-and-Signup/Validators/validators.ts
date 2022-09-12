import { AbstractControl } from "@angular/forms";
export class CustomValidators{

    static emailCheckParam(domainvalueToValidate:string) {
      
      return (control:AbstractControl) :{[key:string]:any}|null =>{
        console.log(control);
      const email:string= control.value;
      
      const domain= email.substring(email.lastIndexOf('@')+1);
      console.log(domain);
      if(domain.toLowerCase()===domainvalueToValidate)
      {
        return null;
      }
      else{
        return {'emailmismatch':true}
      }
    
      }
    
      }

      
    

}