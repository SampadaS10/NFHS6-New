import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';


@Component({
  selector: 'app-birth-weight-healthcard-teamwise',
  templateUrl: './birth-weight-healthcard-teamwise.component.html',
  styleUrls: ['./birth-weight-healthcard-teamwise.component.scss']
})
export class BirthWeightHealthcardTeamwiseComponent implements OnInit {
  constructor(private householdService: HouseholdService,
    private route:ActivatedRoute,private datePipe: DatePipe
    ) {}
    minDate!: Date;
    maxDate!: Date;
    selectedDate!:Date;
    datadatewise:any[]=[];

datalist: any[]=[];
title = 'datatables';
dtOptions: any = {};
// for csv download
cols: any[]=[];                
selectedDatalist: any[]=[];    
exportColumns :any[]=[]; 
todaysDate: any;
stateId!: string | null ;
stateName!: string | null ;
ngOnInit() {
  this.minDate = new Date();
  this.maxDate = new Date();
  this.minDate.setDate(this.minDate.getDate() - 15);
  this.maxDate.setDate(this.maxDate.getDate() );  
  this.todaysDate=this.formatDate(this.maxDate);
  console.log("called state init");
  this.cols = [                
    { field: 'member', header: 'member', customExportHeader: 'Datalist Code' },
    { field: 'card', header: 'Card' },
    { field: 'recall', header: 'Recall' },
    { field: 'count', header: 'Count' }
    
  
  ];
this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

this.stateId=this.route.snapshot.paramMap.get('stateId');
this.stateName=this.route.snapshot.paramMap.get('stateName');
console.log(this.stateId);
console.log(this.stateName);

this.getdata();
}

formatDate(date: Date): string {
  return this.datePipe.transform(date, 'yyyy-MM-dd')!;
}
async datewise()
{
  this.datadatewise=[];
  const newdate=this.formatDate(this.selectedDate) 
  for(const item of this.datalist)
  {
    if(newdate==item.date)
    {
      this.datadatewise.push(item);
    }
  }
  console.log(this.datadatewise)
}
async getdata(){
  this.datalist = await lastValueFrom(this.householdService.getAllBirthWeightHealthcardTeamwise(this.stateId));
  const newdate=this.formatDate(this.maxDate); 
  console.log(newdate)
  for(const item of this.datalist)
  {
    if(newdate ==item.date)
    {
      this.datadatewise.push(item);
    }
  }
}
calculateSum(column: string): number {
  let sum = 0;
  for (const item of this.datadatewise) {
    sum += item[column];
  }
  return sum;
}

calculateAverage(column: string): number {
  const sum = this.calculateSum(column);
  return sum / this.datadatewise.length;
}
exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('l', 'px', 'a3');
          (doc as any).autoTable(this.exportColumns, this.datalist);
          doc.save('Birth-Weight-Healthcard-teamwise.pdf');
      });
  });
}

exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.datalist);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Birth-Weight-Healthcard-teamwise_');
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName  + new Date().getTime() + EXCEL_EXTENSION);
}
}

