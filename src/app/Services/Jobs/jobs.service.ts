import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { catchError, Observable, Subject, throwError } from "rxjs";
import { IJob } from "src/app/Models/job.interface";

@Injectable()
export class JobsServices implements OnInit{

  private job = {
    id: 1,          
    job_title: 'Design Engineer',          
    category: 'Engineering Design',          
    company_name: 'Jacobs Engineering India Pvt Ltd',          
    city: 'Mumbai',          
    country: 'India',          
    post_date: '2020-03-06',          
    job_type: 'Full Time, Permanent',          
    salary_offered: 'Not Disclosed',          
    valid_through: '2020-06-04',          
    html_job_description: `<section class="job-desc"><h2>Job description</h2> <div class="dang-inner-html"> <div> <b> About the opportunity </b> </div> <div> The individual must demonstrate highly effective collaboration internally and externally, have a passionate focus on success, commitment to continuous improvement and a relentless drive to succeed. The role will proactively develop, maintain and execute category and vendor strategies for our supplier portfolio and in collaboration with our business partners be primarily responsible for managing the cradle to grave vendor management lifecycle. The successful candidate must have strong analytical and communication skills and a proven ability to build relationships with business stakeholders across the organization to ensure alignment of objectives and priorities. The position will report to the Executive Director. </div> <ul> <li> Working Independently on Design and Drafting of Fire Protection system such as Fire Hydrants, Sprinkler / Spray system, Fire pump house, Fire Alarm Detection System </li> </ul> <ul> <li> Preparation of G.A, drawings, Piping and Equipment Layout, P ID s, Isometric Drawings and documentation as directed by Discipline Head or the Lead Engineer including generation of MTO s schedules etc. where applicable. </li> </ul> <ul> <li> Review of Contractor s IFC drawings and </li> </ul> <ul> <li> Design the fire protection system using Revit(3D) and Review of the same in Navisworks and guide the modeler for changes in the layout. </li> </ul> <ul> <li> Should be familiar with extraction of drawings from Revit/3D model. </li> </ul> <ul> <li> Co-ordinate with other disciplines for preparing clash free layouts, to ensure that other Design Groups are acquainted with the Group s requirements which affect them and to ensure that interface areas are adequately covered. </li> </ul> <ul> <li> Develop the fire protection system drawings to meet the statutory requirements. </li> </ul> <ul> <li> Ensure that all work follows Company Standards and good engineering practices </li> </ul> <ul> <li> To visit the sites and carry out modifications in drawings, collect input and give sketches for site routing, whenever required. </li> </ul> <ul> <li> Knowledge and experience in Revit (3D) AutoCAD software , X-reference is a must. </li> </ul> <ul> <li> Candidate should have knowledge of M.S. office (Word, Excel). </li> </ul> <ul> <li> Candidate should be well conversant with English language to communicate with colleagues / clients in India and overseas. </li> </ul> <ul> <li> Basic knowledge of NBC, IS standards w.r.t fire protection system and related safety requirements is a must. </li> </ul> <ul> <li> Knowledge of other 3D modelling software such as PDS / PDMS / SP3D would be an added advantage </li> </ul> <div> <b> About you </b> </div> <ul> <li> Minimum qualification is a Certificate in Draughting Trade. </li> </ul> <ul> <li> 9 to 10 years in design of fire protection system, preferably with Fire protection system Contractor. </li> </ul> </div> <div class="other-details"> <div class="details"> <label>Role</label><span><a href="https://www.naukri.com/design-engineer-jobs" target="_blank">Design Engineer</a><span class="comma">,</span></span> </div> <div class="details"> <label>Industry Type</label><span><a href="https://www.naukri.com/construction-jobs" target="_blank">Construction</a><span class="comma">,</span><a href="https://www.naukri.com/engineering-jobs" target="_blank"> Engineering</a><span class="comma">,</span><a href="https://www.naukri.com/cement-jobs" target="_blank"> Cement</a><span class="comma">,</span><a href="https://www.naukri.com/metals-jobs" target="_blank"> Metals</a><span class="comma">,</span></span> </div> <div class="details"> <label>Functional Area</label><span><a href="https://www.naukri.com/engineering-design-jobs" target="_blank">Engineering Design</a><span class="comma">,</span><a href="https://www.naukri.com/r-d-jobs" target="_blank"> R&amp;D</a><span class="comma">,</span></span> </div> <div class="details"> <label>Employment Type</label><span><span>Full Time, Permanent</span></span> </div> <div class="details"> <label>Role Category</label><span><span>Engineering Design</span></span> </div> </div> <div class="education"> <div class="heading">Education</div> <div class="details"> <label>UG :</label><span class="">Any Graduate in Any Specialization</span> </div> <div class="details"> <label>PG :</label><span class="">Medical-MS/MD in psychology</span> </div> </div> <div class="key-skill"> <div class="heading">Key Skills</div> <div> <a href="https://www.naukri.com/fire-alarm-jobs" target="_blank" class="chip clickable"><span>Fire alarm system</span></a><a href="https://www.naukri.com/3d-modeling-jobs" target="_blank" class="chip clickable"><span>3D modeling</span></a><a href="https://www.naukri.com/protection-system-jobs" target="_blank" class="chip clickable"><span>Protection system</span></a><a href="https://www.naukri.com/analytical-jobs" target="_blank" class="chip clickable"><span>Analytical</span></a><a href="https://www.naukri.com/revit-jobs" target="_blank" class="chip clickable"><span>REVIT</span></a><a href="https://www.naukri.com/autocad-jobs" target="_blank" class="chip clickable"><span>AutoCAD 3D</span></a><a href="https://www.naukri.com/fire-protection-jobs" target="_blank" class="chip clickable"><span>Fire protection</span></a><a href="https://www.naukri.com/continuous-improvement-jobs" target="_blank" class="chip clickable"><span>Continuous improvement</span></a><a href="https://www.naukri.com/ms-office-jobs" target="_blank" class="chip clickable"><span>MS Office</span></a><a target="_blank" class="chip non-clickable"><span>Design Engineer Mechanical</span></a> </div> </div> <div class="job-desc-footer"> <a href="//www.facebook.com/sharer.php?u=https://www.naukri.com/job-listings-Design-Engineer-Jacobs-Engineering-India-Pvt-Ltd-Mumbai-9-to-10-years-060320501046&amp;title=undefined" target="_blank"><em class="naukicon naukicon-facebook" title="Share This Job on Facebook"></em></a><a href="//twitter.com/share?url=https://www.naukri.com/job-listings-Design-Engineer-Jacobs-Engineering-India-Pvt-Ltd-Mumbai-9-to-10-years-060320501046&amp;title=undefined" target="_blank"><em class="naukicon naukicon-twitter" title="Share This Job on Twitter"></em></a><a href="//www.linkedin.com/shareArticle?mini=true&amp;url=https://www.naukri.com/job-listings-Design-Engineer-Jacobs-Engineering-India-Pvt-Ltd-Mumbai-9-to-10-years-060320501046&amp;title=undefined" target="_blank"><em class="naukicon naukicon-linkedin" title="Share This Job on Linkedin"></em></a> </div> <div class="lightbox job-desc-modal"> <div class="crossLayer"><span class="icon naukicon naukicon-CrossLayer"></span></div> <div class="drawer-content"></div> </div></section><div class="job-desc-footer"> <a href="//www.facebook.com/sharer.php?u=https://www.naukri.com/job-listings-Design-Engineer-Jacobs-Engineering-India-Pvt-Ltd-Mumbai-9-to-10-years-060320501046&amp;title=undefined" target="_blank"><em class="naukicon naukicon-facebook" title="Share This Job on Facebook"></em></a><a href="//twitter.com/share?url=https://www.naukri.com/job-listings-Design-Engineer-Jacobs-Engineering-India-Pvt-Ltd-Mumbai-9-to-10-years-060320501046&amp;title=undefined" target="_blank"><em class="naukicon naukicon-twitter" title="Share This Job on Twitter"></em></a><a href="//www.linkedin.com/shareArticle?mini=true&amp;url=https://www.naukri.com/job-listings-Design-Engineer-Jacobs-Engineering-India-Pvt-Ltd-Mumbai-9-to-10-years-060320501046&amp;title=undefined" target="_blank"><em class="naukicon naukicon-linkedin" title="Share This Job on Linkedin"></em></a> </div> <div class="lightbox job-desc-modal"> <div class="crossLayer"><span class="icon naukicon naukicon-CrossLayer"></span></div> <div class="drawer-content"></div> </div><div class="lightbox job-desc-modal-global"> <div class="crossLayer"><span class="icon naukicon naukicon-CrossLayer"></span></div> <div class="drawer-content"><div class="login-layer"> <div class="head">Login</div> <div class="social-media"> <div> <em class="fb-icon"></em><span>Facebook</span> </div> <div> <em class="google-icon"></em><span>Google</span> </div> </div> <div class="ensure-new">All your activity will remain private.</div> <div class="or-sec"><span class="or-text">or</span></div> <form autocomplete="on" name="login-form"> <div class=""></div> <div class="label">Email ID / Username</div> <input type="text" class="" maxlength="100" placeholder="Enter your active Email ID / Username"><div class="label">Password</div> <input type="password" class="" maxlength="40" placeholder="Enter your password"><div class="forgot-pass"><a href="https://www.naukri.com/nlogin/forgotpassword" target="_blank">Forgot Password?</a></div> <button type="submit" class="waves-effect waves-ripple btn login-btn">Login</button> </form> <div class="reg-now"> <label>Not a member as yet?</label> <a href="https://www.naukri.com/account/createaccount?othersrcp=16201&amp;err=1">Register Now</a> </div> </div></div> </div>`,          
  }

  displayJob$ = new Subject<any>;

  jobURL:string = 'api/jobs';

  constructor(private _http:HttpClient){}

  ngOnInit(): void {
  }

  getJob(){
    return this.job;
  }

  getJobList():Observable<IJob[]>{
    return this._http.get<IJob[]>(this.jobURL)
  }

  createEmployeebyApi(_job:IJob){
    console.log(_job);  
      let httpheaders=new HttpHeaders()  
      .set('Content-type','application/Json');  
      let options={  
        headers:httpheaders 
      };  
      return this._http.post<IJob>(this.jobURL,_job,options);  
    // this._http.post<IJob>(this.jobURL,_job,
    //     {
    //         headers:new HttpHeaders({
    //             'Content-Type':'application/json'
    //         })
    //     })
    //     .pipe(catchError(this.handleError));
        setTimeout(() => (console.log("timeout")), 1000);
        this.getJobList().subscribe((data) =>{
          console.log(data);
          
        })
        return true;
}

updateEmployeebyApi(_job:IJob){
  console.log(_job);
  this._http.put<IJob>(`${this.jobURL}/${_job.id}`,_job,
      {
          headers:new HttpHeaders({
              'Content-Type':'application/json'
          })
      })
      .pipe(catchError(this.handleError));

}

DeleteEmployeebyApi(id:number){
  
  this._http.delete(`${this.jobURL}/${id}`)
      .pipe(catchError(this.handleError));

}

  private handleError(errorResponse:HttpErrorResponse){
    console.log(errorResponse);

   if(errorResponse.error  instanceof ErrorEvent)
   {
       console.log(errorResponse.message);
       // Client side error
   }
   else
   {
       console.log(errorResponse.message);
       // server side
   }
   //return new ErrorObservable('')
    return throwError(()=>{
    return 'Something wrong occur!!';
 });
 

}

}