import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private householdService: HouseholdService,private route : Router)
     {
      
     }
     
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
     
  
     
  changeValue(indicators:string)
     {
        this.householdService.changeValue(indicators);
     }


}
