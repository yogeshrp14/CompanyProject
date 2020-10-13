import { Component, OnInit } from '@angular/core';
import {Company} from '../../models/company'
import { CompanyService } from './../../services/company.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  companyForm: NgForm
  title: string;
  companyId: any
  id: any
  model: Company
  companies:any
  name: string
  description: string;
  number: string
  email: string
  salary: string
  state: string
  city: string
  constructor(private companyService:CompanyService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.title="Add New Company"
  }


  getAllCompanies() {
    this.companyService.getAllCompany().subscribe({
      next: (result) => {
        this.companies = result
        console.log(this.companies)
      },
      error: (error) => { console.log(error) }
    })
  }


  SubmitData() {
    let newCompany = {
          name: this.name,
          description: this.description,
          number: this.number,
          email: this.email,
          salary: this.salary,
          state: this.state,
          city: this.city,
        }
        console.log(newCompany)
        this.companyService.addCompany(newCompany).subscribe({
          next: (result) => { console.log(result) },
          error: (error) => {
            console.log(error);
          }
        })
      this.router.navigate(['/companylist'])
      }


      // stateList: Array<any> = [
      //   { stateName: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Jalgaon'] },
      //   { stateName: 'Rajasthan', cities: ['Udaipur','Jaipur','Jaisalmer'] },
      //   { stateName: 'Gujrat', cities: ['Ahmedabad','Surat','Porbandar'] },

      // ];
      // cities: Array<any>;

      // changeCountry(count) {
      //   this.cities = this.stateList.find(con => con.name == count).cities;
      // }

}
