import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';
import { DatePipe } from '@angular/common';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-childrens-weight-heaping-second-decimal-teamwise',
  templateUrl: './childrens-weight-heaping-second-decimal-teamwise.component.html',
  styleUrls: ['./childrens-weight-heaping-second-decimal-teamwise.component.scss']
})
export class ChildrensWeightHeapingSecondDecimalTeamwiseComponent 
{
  minDate!: Date;
  maxDate!: Date;
  selectedDate!:Date;
  datadatewise:any[]=[];
  constructor(private householdService: HouseholdService,private datePipe: DatePipe,private route:ActivatedRoute) {}
  todaysDate: any;                           
  datalist: any[] =[];           
  title = 'datatables';            
  dtOptions: any = {};           
  
  // for csv download
  cols: any[]=[];                
  selectedDatalist: any[]=[];    
  exportColumns :any[]=[];  
  stateId!: string | null ;
stateName!: string | null ;                         
  ngOnInit() {  
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15);
    this.maxDate.setDate(this.maxDate.getDate() ); 
    this.todaysDate=this.formatDate(this.maxDate);
    // for csv download               
    this.cols = [                
      { field: 'state', header: 'State', customExportHeader: 'Datalist Code' },
      { field: 'c_0', header: '0' },
      { field: 'c_1', header: '1' },
      { field: 'c_2', header: '2' },
      { field: 'c_3', header: '3' },
      { field: 'c_4', header: '4' },
      { field: 'c_5', header: '5' },
      { field: 'c_6', header: '6' },
      { field: 'c_7', header: '7' },
      { field: 'c_8', header: '8' },
      { field: 'c_9', header: '9' },
      { field: 'totalPercent', header: 'Total' },
      { field: 'percentWithFirstDecimal_0_or_5', header: 'Percent With First Decimal 0 to 5' },
      { field: 'numberOfChildrenWithValidWeightData', header: 'Number Of Children <5 With Valid Weight Data' }
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
     this.datalist = await lastValueFrom(this.householdService.getAllChildrensWeightHeapingSecondDecimalTeamwise(this.stateId));
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
            doc.save('childrens-weight-heaping-second-decimal-teamwise.pdf');
        });
    });
}

exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.datalist);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'childrens-weight-heaping-second-decimal-teamwise_');
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
