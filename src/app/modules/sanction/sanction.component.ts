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
  selectedFilter: string = '';

  constructor(private uploadService: UploadService) {
    this.excelData = this.uploadService.getExcelData();
    this.filteredData = this.excelData;
  }

  applyFilters() {
    if (this.selectedFilter === '') {
      this.filteredData = this.excelData; // No filter selected, show all the table data
    } else {
      this.filteredData = this.excelData.filter(data => data.Status === this.selectedFilter);
    }
  }
}

