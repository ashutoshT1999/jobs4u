import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class DataSourceService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    return {
      candidatesData: [
        { id: 1, password: "password", firstName: "Sagar", middleName: "", lastName: "Singh", email: "sagar.singh@gmail.com", dob: "01/01/1999", resume: "", contactNumber: "9454764215", bio: "Sagar Singh opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Melanie has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. Melanie has managed projects at TechPoint International, Cyberry, and Induster, where she was a finalist for the PMI® Project of the Year. Melanie holds an MBA from Dartmouth University and a current PMP® certification.", education: "Graduated in Computer Science & Engineering", location: "Nagpur,Maharastra" },
        { id: 2, password: "password", firstName: "Ashutosh", middleName: "", lastName: "Tiwari", email: "ashu.tiwari@gmail.com", dob: "01/01/1999", resume: "", contactNumber: "9454764215", bio: "Ashutosh Tiwari opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Melanie has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. Melanie has managed projects at TechPoint International, Cyberry, and Induster, where she was a finalist for the PMI® Project of the Year. Melanie holds an MBA from Dartmouth University and a current PMP® certification.", education: "Graduated in Computer Science & Engineering", location: "Kanpur,Uttar Pradesh" },
        { id: 3, password: "password", firstName: "Ankita", middleName: "Kumari", lastName: "Patel", email: "anki.patel@gmail.com", dob: "01/01/1999", resume: "", contactNumber: "9454764215", bio: "Ankita Kumari Patel opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Melanie has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. Melanie has managed projects at TechPoint International, Cyberry, and Induster, where she was a finalist for the PMI® Project of the Year. Melanie holds an MBA from Dartmouth University and a current PMP® certification.", education: "Graduated in Computer Science & Engineering", location: "Bihar" },
        { id: 4, password: "password", firstName: "Dibyendu", middleName: "", lastName: "Ghosh", email: "dibs.ghosh@gmail.com", dob: "01/01/1999", resume: "", contactNumber: "9454764215", bio: "Dibyendu Ghosh opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Melanie has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. Melanie has managed projects at TechPoint International, Cyberry, and Induster, where she was a finalist for the PMI® Project of the Year. Melanie holds an MBA from Dartmouth University and a current PMP® certification.", education: "Graduated in Computer Science & Engineering", location: "Kolkata,West Bengal" }
      ],
      companiesData: [
        {
          id: 1,
          password: "password",
          companyName: "GlobalLogic Pvt Limited",
          companyType: ["Engineering", "IT & Networking"],
          companyOffices: ["Pune", "Bangalore", "Nagpur", "Noida"],
          hiringDomains: ["Engineering", "IT & Networking", "Lifestyle"],
          emailID: "Globallogic.company@gmail.com",
          contactInfo: "9454752314",
          aboutCompany: "GlobalLogic, a Hitachi Group Company, is a leader in digital product engineering. We help our clients design and build innovative products, platforms, and digital experiences for the modern world. By integrating our strategic design, complex engineering, and vertical industry expertise with Hitachi’s Operating Technology and Information Technology capabilities, we help our clients imagine what’s possible and accelerate their transition into tomorrow’s digital businesses. Headquartered in Silicon Valley, GlobalLogic operates design studios and engineering centers around the world, extending our deep expertise to customers in the automotive, communications, financial services, healthcare & life sciences, media and entertainment, manufacturing, semiconductor, and technology industries.",
          jobPosted: [""],
        },
        {
          id: 2,
          password: "password",
          companyName: "Learnify-Me Pvt Limited",
          companyType: ["Engineering", "IT & Networking"],
          companyOffices: ["Pune", "Bangalore", "Nagpur", "Noida"],
          hiringDomains: ["Engineering", "IT & Networking", "Lifestyle"],
          emailID: "Learnify-Me.company@gmail.com",
          contactInfo: "9454752314",
          aboutCompany: "Learnify-Me, is a leader in digital product engineering. We help our clients design and build innovative products, platforms, and digital experiences for the modern world. By integrating our strategic design, complex engineering, and vertical industry expertise with Hitachi’s Operating Technology and Information Technology capabilities, we help our clients imagine what’s possible and accelerate their transition into tomorrow’s digital businesses. Headquartered in Silicon Valley, GlobalLogic operates design studios and engineering centers around the world, extending our deep expertise to customers in the automotive, communications, financial services, healthcare & life sciences, media and entertainment, manufacturing, semiconductor, and technology industries.",
          jobPosted: [""],
        },
        {
          id: 3,
          password: "password",
          companyName: "Hitachi Pvt Limited",
          companyType: ["Engineering", "IT & Networking"],
          companyOffices: ["Pune", "Bangalore", "Nagpur", "Noida"],
          hiringDomains: ["Engineering", "IT & Networking", "Lifestyle"],
          emailID: "hitachi.company@gmail.com",
          contactInfo: "9454752314",
          aboutCompany: "Hitachi, is a leader in digital product engineering. We help our clients design and build innovative products, platforms, and digital experiences for the modern world. By integrating our strategic design, complex engineering, and vertical industry expertise with Hitachi’s Operating Technology and Information Technology capabilities, we help our clients imagine what’s possible and accelerate their transition into tomorrow’s digital businesses. Headquartered in Silicon Valley, GlobalLogic operates design studios and engineering centers around the world, extending our deep expertise to customers in the automotive, communications, financial services, healthcare & life sciences, media and entertainment, manufacturing, semiconductor, and technology industries.",
          jobPosted: [""],
        }

      ],
      jobs: {}
    }
  }

}