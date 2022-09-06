export interface IJob{
  id:number;
  title:string;
  location:string;
  designation?:string;
  description:string;
  category:string;
  dateOfPosting:string;
  isClosed:boolean;
  ctc:number;
  lastDateToApply:string;
  experienceRequired:number;
}