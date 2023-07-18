import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UploadComponent } from './modules/upload/upload.component';
import { SanctionComponent } from './modules/sanction/sanction.component';

const routes: Routes = [{
  path : '',
  component : DefaultComponent ,
  children : [{
    path : '',
    component : DashboardComponent
  },{
    path : 'Upload',
    component : UploadComponent
  },{
    path :'Sanction',
    component : SanctionComponent
  }

  
]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
