import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class JobsServices implements OnInit{

  private job = {
    "uniq_id": "684476acc383849c09af42808bf112bc",
    "crawl_timestamp": "2020-02-11 03:28:15 +0000",
    "url": "https://www.naukri.com/job-listings-Area-Sales-Manager-INLAND-WORLD-LOGISTICS-PVT-LTD-Bengaluru-Hyderabad-Indore-4-to-9-years-010220004134",
    "job_title": "Area Sales Manager",
    "category": "Sales",
    "company_name": "INLAND WORLD LOGISTICS PVT LTD",
    "city": "Indore",
    "country": "India",
    "post_date": "2020-02-01",
    "job_description": "&lt;div&gt; Dear Candidate,&lt;/div&gt; &lt;div&gt; &lt;br&gt; &lt;/div&gt; &lt;div&gt; We have urgent opening for Area Sales Manager, in our company.&lt;/div&gt; &lt;div&gt; &lt;br&gt; &lt;/div&gt; &lt;b&gt; Responsibilities:&lt;br&gt; &lt;/b&gt; &lt;ul&gt; &lt;li&gt; Maintaining and developing relationships with existing customers&lt;/li&gt; &lt;li&gt; Visiting potential customers for new business&lt;/li&gt; &lt;li&gt; Making accurate, rapid cost calculations&lt;/li&gt; &lt;li&gt; Providing customers with quotations&lt;/li&gt; &lt;li&gt; Negotiating the terms of an agreement and closing sales&lt;/li&gt; &lt;li&gt; Gathering market and customer information&lt;/li&gt; &lt;li&gt; Representing the organization at trade exhibitions, events and demonstrations&lt;/li&gt; &lt;li&gt; Recording sales and other related information and sending copies to the manager&lt;/li&gt; &lt;li&gt; Reviewing of own sales performance&lt;/li&gt; &lt;li&gt; Team handling &lt;/li&gt; &lt;/ul&gt; &lt;div&gt; &lt;/div&gt; &lt;div&gt; &lt;b&gt; Key Skill: &lt;/b&gt; &lt;/div&gt; &lt;div&gt; &lt;ul&gt; &lt;li&gt; Excellent Interpersonal Skills, Influencing Skills &amp; Positive Attitude&lt;/li&gt; &lt;/ul&gt; &lt;/div&gt; &lt;div&gt; &lt;b&gt; Experience and Qualifications:&lt;/b&gt; &lt;br&gt; &lt;ul&gt; &lt;li&gt; Experience : 4-9 yrs&lt;/li&gt; &lt;li&gt; Location : Hyderabad, Banglore, Indore &lt;/li&gt; &lt;li&gt; Graduate or Above&lt;/li&gt; &lt;li&gt; Must have own bike and possess valid driving licence&lt;/li&gt; &lt;/ul&gt; &lt;div&gt; &lt;b&gt; Regard,&lt;/b&gt; &lt;/div&gt; &lt;/div&gt; &lt;div&gt; Ankita Ghogale&lt;/div&gt; &lt;div&gt; ankita.g@iwlpl.in | 022-61837318&lt;/div&gt;",
    "job_type": "Full Time, Permanent",
    "salary_offered": "₹ 2,50,000 - 5,50,000 P.A.",
    "job_board": "naukri_com",
    "geo": "India",
    "job_post_lang": "en",
    "valid_through": "2020-05-01",
    "inferred_iso2_lang_code": "en",
    "inferred_iso3_lang_code": "eng",
    "contact_email": "ankita.g@iwlpl.in",
    "site_name": "naukri_com_job_board_common_setup_pc_jobspikr",
    "html_job_description": "<section class=\"job-desc\"><h2>Job description</h2> <div class=\"dang-inner-html\"> <div> Dear Candidate,</div> <div> <br> </div> <div> We have urgent opening for Area Sales Manager, in our company.</div> <div> <br> </div> <b> Responsibilities:<br> </b> <ul> <li> Maintaining and developing relationships with existing customers</li> <li> Visiting potential customers for new business</li> <li> Making accurate, rapid cost calculations</li> <li> Providing customers with quotations</li> <li> Negotiating the terms of an agreement and closing sales</li> <li> Gathering market and customer information</li> <li> Representing the organization at trade exhibitions, events and demonstrations</li> <li> Recording sales and other related information and sending copies to the manager</li> <li> Reviewing of own sales performance</li> <li> Team handling </li> </ul> <div> </div> <div> <b> Key Skill: </b> </div> <div> <ul> <li> Excellent Interpersonal Skills, Influencing Skills &amp; Positive Attitude</li> </ul> </div> <div> <b> Experience and Qualifications:</b> <br> <ul> <li> Experience : 4-9 yrs</li> <li> Location : Hyderabad, Banglore, Indore </li> <li> Graduate or Above</li> <li> Must have own bike and possess valid driving licence</li> </ul> <div> <b> Regard,</b> </div> </div> <div> Ankita Ghogale</div> <div> ankita.g@iwlpl.in | 022-61837318</div> </div> <div class=\"other-details\"> <div class=\"details\"> <label>Role</label><span><a href=\"https://www.naukri.com/branch-manager-jobs\" target=\"_blank\">Branch Manager</a><span class=\"comma\">,</span></span> </div> <div class=\"details\"> <label>Industry Type</label><span><a href=\"https://www.naukri.com/courier-transportation-freight-warehousing-jobs\" target=\"_blank\">Courier / Transportation / Freight / Warehousing</a><span class=\"comma\">,</span></span> </div> <div class=\"details\"> <label>Functional Area</label><span><a href=\"https://www.naukri.com/sales-jobs\" target=\"_blank\">Sales</a><span class=\"comma\">,</span><a href=\"https://www.naukri.com/retail-jobs\" target=\"_blank\"> Retail</a><span class=\"comma\">,</span><a href=\"https://www.naukri.com/business-development-jobs\" target=\"_blank\"> Business Development</a><span class=\"comma\">,</span></span> </div> <div class=\"details\"> <label>Employment Type</label><span><span>Full Time, Permanent</span></span> </div> <div class=\"details\"> <label>Role Category</label><span><span>Retail Sales</span></span> </div> </div> <div class=\"education\"> <div class=\"heading\">Education</div> <div class=\"details\"> <label>UG :</label><span class=\"\">Graduation Not Required, Any Graduate in Any Specialization</span> </div> <div class=\"details\"> <label>PG :</label><span class=\"\">Post Graduation Not Required, Any Postgraduate in Any Specialization</span> </div> <div class=\"details\"> <label>Doctorate :</label><span class=\"\">Doctorate Not Required, Any Doctorate in Any Specialization</span> </div> </div> <div class=\"key-skill\"> <div class=\"heading\">Key Skills</div> <div> <a href=\"https://www.naukri.com/area-sales-jobs\" target=\"_blank\" class=\"chip clickable\"><span>area sales</span></a><a href=\"https://www.naukri.com/new-business-jobs\" target=\"_blank\" class=\"chip clickable\"><span>new business</span></a><a href=\"https://www.naukri.com/team-handling-jobs\" target=\"_blank\" class=\"chip clickable\"><span>team handling</span></a><a href=\"https://www.naukri.com/area-sales-manager-jobs\" target=\"_blank\" class=\"chip clickable\"><span>Area Sales Manager</span></a><a href=\"https://www.naukri.com/sales-jobs\" target=\"_blank\" class=\"chip clickable\"><span>sales</span></a> </div> </div> <div class=\"job-desc-footer\"> <a href=\"//www.facebook.com/sharer.php?u=https://www.naukri.com/job-listings-Area-Sales-Manager-INLAND-WORLD-LOGISTICS-PVT-LTD-Bengaluru-Hyderabad-Indore-4-to-9-years-010220004134&amp;title=undefined\" target=\"_blank\"><em class=\"naukicon naukicon-facebook\" title=\"Share This Job on Facebook\"></em></a><a href=\"//twitter.com/share?url=https://www.naukri.com/job-listings-Area-Sales-Manager-INLAND-WORLD-LOGISTICS-PVT-LTD-Bengaluru-Hyderabad-Indore-4-to-9-years-010220004134&amp;title=undefined\" target=\"_blank\"><em class=\"naukicon naukicon-twitter\" title=\"Share This Job on Twitter\"></em></a><a href=\"//www.linkedin.com/shareArticle?mini=true&amp;url=https://www.naukri.com/job-listings-Area-Sales-Manager-INLAND-WORLD-LOGISTICS-PVT-LTD-Bengaluru-Hyderabad-Indore-4-to-9-years-010220004134&amp;title=undefined\" target=\"_blank\"><em class=\"naukicon naukicon-linkedin\" title=\"Share This Job on Linkedin\"></em></a> </div> <div class=\"lightbox job-desc-modal\"> <div class=\"crossLayer\"><span class=\"icon naukicon naukicon-CrossLayer\"></span></div> <div class=\"drawer-content\"></div> </div></section><div class=\"job-desc-footer\"> <a href=\"//www.facebook.com/sharer.php?u=https://www.naukri.com/job-listings-Area-Sales-Manager-INLAND-WORLD-LOGISTICS-PVT-LTD-Bengaluru-Hyderabad-Indore-4-to-9-years-010220004134&amp;title=undefined\" target=\"_blank\"><em class=\"naukicon naukicon-facebook\" title=\"Share This Job on Facebook\"></em></a><a href=\"//twitter.com/share?url=https://www.naukri.com/job-listings-Area-Sales-Manager-INLAND-WORLD-LOGISTICS-PVT-LTD-Bengaluru-Hyderabad-Indore-4-to-9-years-010220004134&amp;title=undefined\" target=\"_blank\"><em class=\"naukicon naukicon-twitter\" title=\"Share This Job on Twitter\"></em></a><a href=\"//www.linkedin.com/shareArticle?mini=true&amp;url=https://www.naukri.com/job-listings-Area-Sales-Manager-INLAND-WORLD-LOGISTICS-PVT-LTD-Bengaluru-Hyderabad-Indore-4-to-9-years-010220004134&amp;title=undefined\" target=\"_blank\"><em class=\"naukicon naukicon-linkedin\" title=\"Share This Job on Linkedin\"></em></a> </div> <div class=\"lightbox job-desc-modal\"> <div class=\"crossLayer\"><span class=\"icon naukicon naukicon-CrossLayer\"></span></div> <div class=\"drawer-content\"></div> </div><div class=\"lightbox job-desc-modal-global\"> <div class=\"crossLayer\"><span class=\"icon naukicon naukicon-CrossLayer\"></span></div> <div class=\"drawer-content\"><div class=\"login-layer\"> <div class=\"head\">Login</div> <div class=\"social-media\"> <div> <em class=\"fb-icon\"></em><span>Facebook</span> </div> <div> <em class=\"google-icon\"></em><span>Google</span> </div> </div> <div class=\"ensure-new\">All your activity will remain private.</div> <div class=\"or-sec\"><span class=\"or-text\">or</span></div> <form autocomplete=\"on\" name=\"login-form\"> <div class=\"\"></div> <div class=\"label\">Email ID / Username</div> <input type=\"text\" class=\"\" maxlength=\"100\" placeholder=\"Enter your active Email ID / Username\"><div class=\"label\">Password</div> <input type=\"password\" class=\"\" maxlength=\"40\" placeholder=\"Enter your password\"><div class=\"forgot-pass\"><a href=\"https://www.naukri.com/nlogin/forgotpassword\" target=\"_blank\">Forgot Password?</a></div> <button type=\"submit\" class=\"waves-effect waves-ripple btn login-btn\">Login</button> </form> <div class=\"reg-now\"> <label>Not a member as yet?</label> <a href=\"https://www.naukri.com/account/createaccount?othersrcp=16201&amp;err=1\">Register Now</a> </div> </div></div> </div>",
    "domain": "naukri_com",
    "postdate_yyyymmdd": "20200201",
    "has_expired": "false",
    "last_expiry_check_date": "2020.02.11",
    "latest_expiry_check_date": "2020-02-11",
    "duplicate_status": "NA",
    "postdate_in_indexname_format": "2020.02.01",
    "inferred_city": "Indore",
    "inferred_state": "Madhya pradesh",
    "inferred_country": "India",
    "fitness_score": 10
  }

  displayJob$ = new Subject<any>;

  jobURL:string = 'api/jobs';

  constructor(private _http:HttpClient){}
  ngOnInit(): void {

  }

  getJob(){
    return this.job;
  }

  getJobList():Observable<any>{
    return this._http.get<any>(this.jobURL)
  }

}