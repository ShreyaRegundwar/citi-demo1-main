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
import { BREAKPOINTS } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UploadComponent,
    SanctionComponent,


    
  ],
  imports: [
    CommonModule,
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
    MatIconModule
  ],providers: [
    UploadService
  ]
})
export class DefaultModule { }
