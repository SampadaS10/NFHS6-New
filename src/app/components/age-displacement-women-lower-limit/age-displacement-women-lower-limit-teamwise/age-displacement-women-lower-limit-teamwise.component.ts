import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-age-displacement-women-lower-limit-teamwise',
  templateUrl: './age-displacement-women-lower-limit-teamwise.component.html',
  styleUrls: ['./age-displacement-women-lower-limit-teamwise.component.scss']
})
export class AgeDisplacementWomenLowerLimitTeamwiseComponent 
{
  constructor(
    private householdService: HouseholdService,
    private route: ActivatedRoute,private datePipe: DatePipe
) {}
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
stateId!: string | null;
stateName!: string | null;
ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15);
    this.maxDate.setDate(this.maxDate.getDate() );  
    this.todaysDate=this.formatDate(this.maxDate);
    // for csv download
    this.cols = [
        {
            field: 'team',
            header: 'team',
            customExportHeader: 'Datalist Code',
        },
        {
            field: 'age_12',
            header: '12',
        },
        {
            field: 'age_13',
            header: '13',
        },
        {
            field: 'age_14',
            header: '14',
        },
        {
            field: 'age_15',
            header: '15',
        },
        {
            field: 'age_16',
            header: '16',
        },
        {
            field: 'age_17',
            header: '17',
        },
        {
            field: 'age_18',
            header: '18',
        },
        {
            field: 'numberOfWomen',
            header: 'numberOfWoman',
        },
        {
            field: 'ageRatio',
            header: 'ageRatio',
        },
    ];
    this.exportColumns = this.cols.map((col) => ({
        title: col.header,
        dataKey: col.field,
    }));
    this.stateId = this.route.snapshot.paramMap.get('stateId');
    this.stateName = this.route.snapshot.paramMap.get('stateName');
    // console.log(this.exportColumns);
    this.getdata();
    console.log(this.datalist);
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
        this.householdService.getAllAgeDisplacementWomenLowerLimitTeamwise(this.stateId)
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
            doc.save('age-displacement-women-lower-limit-teamwise.pdf');
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
        this.saveAsExcelFile(excelBuffer, 'age-displacement-women-lower-limit-teamwise_');
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
