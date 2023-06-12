import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-childrens-height-teamwise',
  templateUrl: './childrens-height-teamwise.component.html',
  styleUrls: ['./childrens-height-teamwise.component.scss']
})
export class ChildrensHeightTeamwiseComponent 
{
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
  //console.log("called state init");
  this.cols = [                
    { field: 'team', header: 'Team', customExportHeader: 'Datalist Code' },
    { field: 'measured', header: 'Measured [Result of height measured]' },
    { field: 'childNotPresent', header: 'Child Not Present [Result of height measured]' },
    { field: 'refused', header: 'Refused [Result of height measured]' },
    { field: 'other', header: 'Other [Result of height measured]' },
    { field: 'missing', header: 'Missing [Result of height measured]' },
    { field: 'total', header: 'Total' },
    { field: 'numberOfChildren', header: 'Number Of Children < 5' },
    { field: 'heightOutOfRange', header: 'Height Out Of Range [Among children measured]' },
    { field: 'dateOfBirthIncomplete', header: 'Date Of Birth Incomplete [Among children measured]' },
    { field: 'childrenWithValidData', header: 'Children With Valid Data' },
    { field: 'heightForAgeZScoreOutOfRange', header: 'Height For Age Z Score Out Of Range' },
      
  
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
  this.datalist = await lastValueFrom(this.householdService.getAllChildrensHeightTeamwise(this.stateId));
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
          doc.save('childrens-height-teamwise.pdf');
      });
  });
}

exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.datalist);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'childrens-height-teamwise_');
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + new Date().getTime() + EXCEL_EXTENSION);
}


}
