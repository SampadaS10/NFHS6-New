import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-birth-displacement-memberwise',
  templateUrl: './birth-displacement-memberwise.component.html',
  styleUrls: ['./birth-displacement-memberwise.component.scss']
})
export class BirthDisplacementMemberwiseComponent implements OnInit{
  constructor(
    private householdService: HouseholdService,
    private route: ActivatedRoute,private datePipe: DatePipe
  ) {}
  minDate!: Date;
    maxDate!: Date;
    selectedDate!:Date;
    datadatewise:any[]=[];
  datalist: any[]=[];
  title = 'datatables';
  // dtOptions: any = {};
  stateId!: string | null;
  stateName!: string | null;
  teamNo!: string | null;
  teamName!: string | null;

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
    this.cols = [                
      { field: 'member', header: 'member', customExportHeader: 'Datalist Code' },
      { field: 'year_2014', header: '2014 (Year of birth)' },
      { field: 'year_2015', header: '2015 (Year of birth)' },
      { field: 'year_2016', header: '2016 (Year of birth)' },
      { field: 'year_2017', header: '2017 (Year of birth)' },
      { field: 'year_2018', header: '2018 (Year of birth)' },
      { field: 'year_2019', header: '2019 (Year of birth)' },
      { field: 'year_2020', header: '2020 (Year of birth)' },
      { field: 'year_2021', header: '2021 (Year of birth)' },
      { field: 'year_2022', header: '2022 (Year of birth)' },
      { field: 'year_2023', header: '2023 (Year of birth)' },
      { field: 'missing', header: 'Missing (Year of birth)' },
      { field: 'numberOfBirths', header: 'number Of Births ' },
      { field: 'birthYearRatio_2018_2017', header: 'Birth Year Ratio 2018-2017 ' },
    
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

    this.stateId = this.route.snapshot.paramMap.get('stateId');
    this.stateName = this.route.snapshot.paramMap.get('stateName');
    this.teamNo = this.route.snapshot.paramMap.get('teamNo');
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log(this.stateId);
    console.log(this.stateName);

    this.householdService.getAllBirthDisplacementMemberwise(this.stateId,this.teamNo).subscribe(
      (datalist) => {
        console.log(datalist);
        this.datalist = datalist;
        const newdate=this.formatDate(this.maxDate); 
    console.log(newdate)
    for(const item of this.datalist)
    {
      if(newdate ==item.date)
      {
        this.datadatewise.push(item);
      }
    }
      },

    
    );
    
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
          doc.save('Birth-Displacement-memberwise.pdf');
      });
  });
}

exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.datalist);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Birth-Displacement-memberwise');
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
