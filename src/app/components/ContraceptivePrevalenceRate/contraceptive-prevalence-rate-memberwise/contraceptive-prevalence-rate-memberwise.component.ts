import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contraceptive-prevalence-rate-memberwise',
  templateUrl: './contraceptive-prevalence-rate-memberwise.component.html',
  styleUrls: ['./contraceptive-prevalence-rate-memberwise.component.scss']
})
export class ContraceptivePrevalenceRateMemberwiseComponent implements OnInit{
  minDate!: Date;
    maxDate!: Date;
    selectedDate!:Date;
    datadatewise:any[]=[];
  constructor(
    private householdService: HouseholdService,
    private route: ActivatedRoute,private datePipe: DatePipe
  ) {}

  datalist: any[]=[];
  title = 'datatables';
  // dtOptions: any = {};
  stateId!: string | null;
  stateName!: string | null;
  teamNo!: string | null;
  teamName!: string | null;
  todaysDate: any;
// for csv download
  cols: any[]=[];                
selectedDatalist: any[]=[];    
exportColumns :any[]=[];
  
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
  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15);
    this.maxDate.setDate(this.maxDate.getDate() );
    this.todaysDate=this.formatDate(this.maxDate);  
   // for csv download               
   this.cols = [                
    { field: 'member', header: 'Member', customExportHeader: 'Datalist Code' },
    { field: 'anyMethod', header: 'Any Method' },
    { field: 'numberVal', header: 'Number of Women' }
  ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

    this.stateId = this.route.snapshot.paramMap.get('stateId');
    this.stateName = this.route.snapshot.paramMap.get('stateName');
    this.teamNo = this.route.snapshot.paramMap.get('teamNo');
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log(this.stateId);
    console.log(this.stateName);

    this.householdService.getAllContraceptivePrevalenceRateMemberwise(this.stateId,this.teamNo).subscribe(
      (datalist) => {
        console.log(datalist);
        this.datalist = datalist;
        console.log(this.maxDate )
        const newdate=this.formatDate(this.maxDate); 
        console.log(newdate)
        for(const item of this.datalist)
        {
          if(newdate ==item.date)
          {
            this.datadatewise.push(item);
          }
        }
        console.log(this.datadatewise)
      }, 
    );
   
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
          doc.save('Contraceptive-Prevalence-Rate-memberwise.pdf');
      });
  });
}

exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.datalist);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Contraceptive-Prevalence-Rate-memberwise-');
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


