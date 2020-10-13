import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }
  constructor(private http: HttpClient) { }
  getCompanyUrl = "http://localhost:3000/company/getcompanies"
  postCompanyUrl = "http://localhost:3000/company/postcompany"

  getAllCompany() {
    return this.http.get(this.getCompanyUrl, this.httpOptions)
  }

  addCompany(newCompany) {
    return this.http.post(this.postCompanyUrl, newCompany, this.httpOptions)
  }

  updateCompany(id, data) {
    return this.http.put("http://localhost:3000/company/update/" + id, data, this.httpOptions)
  }
  deleteCompany(id) {
    return this.http.delete("http://localhost:3000/company/delete/" + id, this.httpOptions)
  }
  getById(id) {
    return this.http.get("http://localhost:3000/company/getcompany/" + id, this.httpOptions)
  }

}
