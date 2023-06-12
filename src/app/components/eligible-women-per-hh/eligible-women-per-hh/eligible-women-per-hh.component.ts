import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-eligible-women-per-hh',
    templateUrl: './eligible-women-per-hh.component.html',
    styleUrls: ['./eligible-women-per-hh.component.scss'],
})
export class EligibleWomenPerHhComponent {
    constructor(private householdService: HouseholdService,private datePipe: DatePipe) {}
    minDate!: Date;
    maxDate!: Date;
    selectedDate!:Date;
    datadatewise:any[]=[];
    datalist: any[] = [];
    title = 'datatables';
    dtOptions: any = {};
    todaysDate: any;   
    // for csv download
    cols: any[] = [];
    selectedDatalist: any[] = [];
    exportColumns: any[] = [];
    ngOnInit() {
        this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15);
    this.maxDate.setDate(this.maxDate.getDate() );
    this.todaysDate=this.formatDate(this.maxDate);
        // for csv download
        this.cols = [
            {
                field: 'state',
                header: 'State',
                customExportHeader: 'Datalist Code',
            },
            {
                field: 'noOfCompletedHhUrban',
                header: 'Number of Completed Households (Urban)',
            },
            {
                field: 'noOfDeFactoEligibleWomenInCompletedHhUrban',
                header: 'Number of de facto eligible women in those HHs (Urban)',
            },
            {
                field: 'meanNoOfDeFactoEligibleWomenPerHhUrban',
                header: 'Mean number of de facto eligible women per HH (Urban)',
            },
            {
                field: 'noOfCompletedHhRural',
                header: 'Number of Completed Households (Rural)',
            },
            {
                field: 'noOfDeFactoEligibleWomenInCompletedHhRural',
                header: 'Number of de facto eligible women in those HHs (Rural)',
            },
            {
                field: 'meanNoOfDeFactoEligibleWomenPerHhRural',
                header: 'Mean number of de facto eligible women per HH (Rural)',
            },
        ];
        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field,
        }));
        // console.log(this.exportColumns);
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
    async getdata() {
        this.datalist = await lastValueFrom(
            this.householdService.getAllEligibleWomenPerHh()
        );
        //this.householdService.getAllEligibleMenPerHh().then()
        //console.log(this.datalist);
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
        if(sum==0){
            return 0;
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
                doc.save('women-per-hh.pdf');
            });
        });
    }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.datalist);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, 'datalist');
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE =
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE,
        });
        FileSaver.saveAs(
            data,
            fileName + '_women-per-hh_' + new Date().getTime() + EXCEL_EXTENSION
        );
    }
}
