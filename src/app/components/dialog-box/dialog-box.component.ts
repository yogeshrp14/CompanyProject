import { CompanyService } from './../../services/company.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company, UsersData } from 'src/app/models/company';

``
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  companyForm: NgForm
  title: string;
  companyId: any
  id: any
  model: Company
  companies: any
  name: string
  description: string;
  number: string
  email: string
  salary: string
  state: string
  city: string

  //selectedCompany: any
  selectedCompany: any = { name: "", description: "",number: "",email: "",salary: "",state: "",city: "", };
  constructor(private fb: FormBuilder, private router: Router, private routes: ActivatedRoute, private companyService: CompanyService) {

  }

  ngOnInit(): void {

    this.title = ' Update Company';

    this.routes.paramMap.subscribe((params: ParamMap) => {
      this.companyId = params.get('id')
      console.log(this.companyId)
    })

    this.getCompanyById(this.companyId);


  }
  ////////Get ALL COMPANIES
  // getAllCompanies() {
  //   this.companyService.getAllCompany().subscribe({
  //     next: (result) => {
  //       this.companies = result
  //       console.log(this.companies)
  //     },
  //     error: (error) => { console.log(error) }
  //   })


  //   // this.renderCompany()
  // }
  /////////////////




  getCompanyById(companyId) {
    this.companyService.getById(companyId).subscribe(
      (result) => {
        let res: any = result;
        this.selectedCompany= res;
        // this.selectedCompany.name = res.name;
        // this.selectedCompany.description = res.description;
        // this.selectedCompany.number = res.number;
        // this.selectedCompany.email = res.email;
        // this.selectedCompany.salary = res.salary;
        // this.selectedCompany.state = res.state;
        // this.selectedCompany.city = res.city;

        //this.selectedCompany = result
        console.log(this.selectedCompany);
      }
    )
  }

  updateCompany(companyForm:NgForm) {
    // let updatedInfo = {
    //   "name": this.name,
    //   "description": this.description,
    //   "number": this.number,
    //   "email": this.email,
    //   "salary": this.salary,
    //   "state": this.state,
    //   "city": this.city,
    // }

    let updatedCompany = companyForm.value;
    console.log("updatedCompany-"+updatedCompany)
    this.companyService.updateCompany(this.companyId, updatedCompany).subscribe({
      next: (message) => {
        console.log(message);
      }
    })
    console.log(companyForm.value);
    this.router.navigate(['/companylist'])
  }


  // updateCompany() {
  //   let updatedInfo = {
  //     name: this.name,
  //     description: this.description,
  //     number: this.number,
  //     email: this.email,
  //     salary: this.salary,
  //     state: this.state,
  //     city: this.city,
  //   }
  //   console.log(updatedInfo)
  //   this.companyService.updateCompany(this.companyId, updatedInfo).subscribe({
  //     next: (message) => {
  //       console.log(message);
  //     }
  //   })
  // }








}
