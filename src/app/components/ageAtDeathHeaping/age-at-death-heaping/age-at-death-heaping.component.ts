import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-age-at-death-heaping',
  templateUrl: './age-at-death-heaping.component.html',
  styleUrls: ['./age-at-death-heaping.component.scss']
})
export class AgeAtDeathHeapingComponent implements OnInit{
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
      { field: 'eightM', header: '8M. [Age at death (in months) ]' },
      { field: 'nineM', header: '9M. [Age at death (in months) ]' },
      { field: 'tenM', header: '10M. [Age at death (in months) ]' },
      { field: 'elevenM', header: '11M. [Age at death (in months) ]' },
      { field: 'twelveM', header: '12M. [Age at death (in months) ]' },
      { field: 'reportedAs1Year', header: 'Reported as one year [Age at death (in months) ]' },
      { field: 'thirteenM', header: '13M. [Age at death (in months) ]' },
      { field: 'fourteenM', header: '14M. [Age at death (in months) ]' },
      { field: 'fifteenM', header: '15M. [Age at death (in months) ]' },
      { field: 'sixteenM', header: '16M. [Age at death (in months) ]' },
      { field: 'total8_16M', header: 'Total 8-16 Months (including 1 year)' },
      { field: 'twelveMonthsRatio', header: 'Twelve Months Ratio (including 1 year)' }
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
     this.datalist = await lastValueFrom(this.householdService.getAllAgeAtDeathHeaping());
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
            doc.save('Age-At-Death-Heaping.pdf');
        });
    });
}

exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.datalist);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'Age-At-Death-Heaping-');
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


