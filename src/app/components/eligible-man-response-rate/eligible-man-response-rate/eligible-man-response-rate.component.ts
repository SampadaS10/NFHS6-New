import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-eligible-man-response-rate',
  templateUrl: './eligible-man-response-rate.component.html',
  styleUrls: ['./eligible-man-response-rate.component.scss']
})
export class EligibleManResponseRateComponent implements OnInit{
  constructor(private householdService: HouseholdService,private datePipe: DatePipe) {}
  minDate!: Date;
  maxDate!: Date;
  selectedDate!:Date;
  datadatewise:any[]=[];                           
  datalist: any[] =[];           
  title = 'datatables';            
  dtOptions: any = {};           
  
  // for csv download
  cols: any[]=[];                
  selectedDatalist: any[]=[];    
  exportColumns :any[]=[];       
  todaysDate: any;                    
  ngOnInit() {  
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15);
    this.maxDate.setDate(this.maxDate.getDate() );  
    this.todaysDate=this.formatDate(this.maxDate);
    // for csv download               
    this.cols = [                
      { field: 'state', header: 'State', customExportHeader: 'Datalist Code' },
      { field: 'completed', header: 'Number of Completed Households (Result of individual interview )' },
      { field: 'notAtHome', header: 'Number of men not at home (Result of individual interview )' },
      { field: 'postponed', header: 'Number of men postponed (Result of individual interview )' },
      { field: 'refused', header: 'Number of men refused (Result of individual interview )' },
      { field: 'partlyCompleted', header: 'Number of men partly completed (Result of individual interview )' },
      { field: 'incapacited', header: 'Number of men incapacited(Result of individual interview )' },
      { field: 'other', header: 'others (Result of individual interview )' },
      { field: 'percentVal', header: 'percentage ' },
      { field: 'numberVal', header: 'number ' }
    
    ];
  this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
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
     this.datalist = await lastValueFrom(this.householdService.getAllEligibleMenResponseRate());
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
            doc.save('ELIGIBLE-MEN-RESOPNSE-RATE.pdf');
        });
    });
}

exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.datalist);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'ELIGIBLE-MEN-RESOPNSE-RATE-');
    });
}

saveAsExcelFile(buffer: any, fileName: string): void 
{
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], 
    {

        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + new Date().getTime() + EXCEL_EXTENSION);
 }


}
