import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { UploadComponent } from 'src/app/modules/upload/upload.component';
import { UploadService } from 'src/app/modules/upload.service';
import { SanctionComponent } from 'src/app/modules/sanction/sanction.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from 'src/app/search.pipe';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UploadComponent,
    SanctionComponent,
    SearchPipe
   


    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    Ng2SearchPipeModule
  ],providers: [
    UploadService
  ]
})
export class DefaultModule { }
