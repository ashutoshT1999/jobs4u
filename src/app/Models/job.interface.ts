export interface IJob{
  id: number;
  job_title: string;
  company_name: string;
  category: string;
  city: string;
  country: string;
  post_date: string;
  job_type: string;
  valid_through: string;
  isClosed?: boolean;
  salary_offered: string;
  description?: string;
  roleAndResponsibility?:string;
  numberofOpenings?:number;
  job_description: string;
  required_skills: string;
  experienceRequired?: number;
  totalApplicationCount?: number;
  html_job_description: string;
}