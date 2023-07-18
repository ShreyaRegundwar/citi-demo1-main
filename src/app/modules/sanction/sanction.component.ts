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

  constructor(private uploadService: UploadService) {
    // Retrieve the ExcelData from the shared service
    this.excelData = this.uploadService.getExcelData();
  }

  // Rest of the code...
}
