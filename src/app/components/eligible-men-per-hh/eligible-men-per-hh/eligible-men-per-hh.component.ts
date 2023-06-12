import { Component, OnInit } from '@angular/core';
import { HouseholdService } from 'src/app/services/household.service';
import { lastValueFrom } from 'rxjs';
import * as FileSaver from 'file-saver';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-eligible-men-per-hh',
  templateUrl: './eligible-men-per-hh.component.html',
  styleUrls: ['./eligible-men-per-hh.component.scss']
}) 

export class EligibleMenPerHhComponent implements OnInit{
    minDate!: Date;
  maxDate!: Date;
  selectedDate!:Date;
  datadatewise:any[]=[];
  constructor(private householdService: HouseholdService,private datePipe: DatePipe) {}
                               
  datalist: any[] =[];           
  title = 'datatables';            
  dtOptions: any = {};           
  
  // for csv download
  cols: any[]=[];                
  selectedDatalist: any[]=[];    
  exportColumns :any[]=[];                           
  todaysDate: any;   
  ngOnInit() {  
    // for csv download   
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15);
    this.maxDate.setDate(this.maxDate.getDate() );    
    this.todaysDate=this.formatDate(this.maxDate);         
    this.cols = [                
      { field: 'state', header: 'State', customExportHeader: 'Datalist Code' },
      { field: 'noOfCompletedHhUrban', header: 'Number of Completed Households (Urban)' },
      { field: 'noOfDeFactoEligibleMenInCompletedHhUrban', header: 'Number of de Facto Eligible men in those HHs (Urban)' },
      { field: 'meanNoOfDeFactoEligibleMenPerHhUrban', header: 'Mean number of de Facto Eligible men per HHs (Urban)' },
      { field: 'noOfCompletedHhRural', header: 'Number of Completed Households (Rural)' },
      { field: 'noOfDeFactoEligibleMenInCompletedHhRural', header: 'Number of de Facto Eligible men in those HHs (Rural)' },
      { field: 'meanNoOfDeFactoEligibleMenPerHhRural', header: 'Mean number of de Facto Eligible men per HHs (Rural)' }
      

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
  async getdata()
  {
     this.datalist = await lastValueFrom(this.householdService.getAllEligibleMenPerHh());
     
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
            doc.save('eligible-men-per-hh.pdf');
        });
    });
}

exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.datalist);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'eligible_men_per_hh_');
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




