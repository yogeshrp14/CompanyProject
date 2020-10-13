import { DialogBoxComponent } from './../dialog-box/dialog-box.component';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Company } from './../../models/company';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: any;
  title: string
  description: any;
  searchText:string
  p:number=1
  key:string=name;
  reverse:boolean=false

  constructor(private companyService: CompanyService, private router: Router) { }
  ngOnInit() {
    this.title = 'Companies'
    this.getAllCompanies()
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
  
  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe({
      next: (message) => { console.log(message) },
      error: (error) => {
        console.log(error);
      }

    })
    this.getAllCompanies()
  }
  edit(id){
    this.router.navigate(['/update',id])
    // this.companyService.getById(id).subscribe(
    //   (result) => {
    //     console.log(result);
    //           }
    // )


  }



sort(key){
this.key=key
this.reverse=!this.reverse
}

}


