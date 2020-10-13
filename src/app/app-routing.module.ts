import { HeaderComponent } from './components/header/header.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component'

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';


const routes: Routes = [
  {path:'',component:CompanyComponent},
  {path:'companylist',component:CompanyComponent},
  {path:'dialogbox',component:DialogBoxComponent},
  {path:'createnew',component:HeaderComponent},
  {path:'update/:id',component:DialogBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
