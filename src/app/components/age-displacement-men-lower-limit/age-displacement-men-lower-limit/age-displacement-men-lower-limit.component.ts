import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';
import { lastValueFrom } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-age-displacement-men-lower-limit',
    templateUrl: './age-displacement-men-lower-limit.component.html',
    styleUrls: ['./age-displacement-men-lower-limit.component.scss'],
})
export class AgeDisplacementMenLowerLimitComponent {
    todaysDate: any;
    constructor(private householdService: HouseholdService,private datePipe: DatePipe) {}
    minDate!: Date;
    maxDate!: Date;
    selectedDate!:Date;
    datadatewise:any[]=[];
    datalist: any[] = [];
    title = 'datatables';
    dtOptions: any = {};

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
                field: 'age_12',
                header: '12 Mens Age(12-18 years)',
            },
            {
                field: 'age_13',
                header: '13 Mens Age(12-18 years)',
            },
            {
                field: 'age_14',
                header: '14 Mens Age(12-18 years)',
            },
            {
                field: 'age_15',
                header: '15 Mens Age(12-18 years)',
            },
            {
                field: 'age_16',
                header: '12 Mens Age(12-18 years)',
            },
            {
                field: 'age_17',
                header: '17 Mens Age(12-18 years)',
            },
            {
                field: 'age_18',
                header: '18 Mens Age(12-18 years)',
            },
            {
                field: 'numberOfMen',
                header: 'Number of Men',
            },
            {
                field: 'ageRatio',
                header: 'Age Ratio',
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
            this.householdService.getAllAgeDisplacementMenLowerLimit()
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
                doc.save('age-displacement-men-lower-limit.pdf');
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
            this.saveAsExcelFile(excelBuffer, 'age-displacement-men-lower-limit_');
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
            fileName + new Date().getTime() + EXCEL_EXTENSION
        );
    }
}
