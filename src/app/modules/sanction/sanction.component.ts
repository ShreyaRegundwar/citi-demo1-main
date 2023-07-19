/*import { Component,OnInit } from '@angular/core';
import { UploadService } from '../upload.service';



@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.scss']
})

export class SanctionComponent implements OnInit {
  ExcelData: any;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.ExcelData = this.uploadService.getUploadedFile();
  }
}
*/

import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.scss']
})
export class SanctionComponent {
  excelData: any[];
  filteredData: any[];
  //selectedFilter: string = '';
  selectedStatusFilter: string = ''; // Add this line to declare the property
  transactionIdFilter: string = ''

  constructor(private uploadService: UploadService) {
    this.excelData = this.uploadService.getExcelData();
    this.filteredData = this.excelData;
  }

  applyTransactionIdFilter() {
    if (this.transactionIdFilter) {
      this.filteredData = this.excelData.filter(data => data.TransactionID.includes(this.transactionIdFilter));
    } else {
      this.filteredData = this.excelData;
    }
  }
}

