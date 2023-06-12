import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { TimelineModule } from 'primeng/timeline';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';

import { EligibleMenPerHhComponent } from './components/eligible-men-per-hh/eligible-men-per-hh/eligible-men-per-hh.component';
import { EligibleMenPerHhTeamwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-teamwise/eligible-men-per-hh-teamwise.component';
import { EligibleMenPerHhMemberwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-memberwise/eligible-men-per-hh-memberwise.component';
//import { EligibleWomenPerHhComponent } from './components/eligible-women-per-hh/eligible-women-per-hh/eligible-women-per-hh.component';
//import { EligibleWomenPerHhTeamwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-teamwise/eligible-women-per-hh-teamwise.component';
//import { EligibleWomenPerHhMemberwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-memberwise/eligible-women-per-hh-memberwise.component';
import { EligibleWomenPerHhComponent } from './components/eligible-women-per-hh/eligible-women-per-hh/eligible-women-per-hh.component';
import { EligibleWomenPerHhTeamwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-teamwise/eligible-women-per-hh-teamwise.component';
import { EligibleWomenPerHhMemberwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-memberwise/eligible-women-per-hh-memberwise.component';
//import { RouteReuseStrategy } from '@angular/router';
//import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy.service';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HhVisitsComponent } from './components/hh-visits/hh-visits/hh-visits.component';
import { HhVisitsTeamwiseComponent } from './components/hh-visits/hh-visits-teamwise/hh-visits-teamwise.component';
import { HhVisitsMemberwiseComponent } from './components/hh-visits/hh-visits-memberwise/hh-visits-memberwise.component';
import { HhcompletionRateComponent } from './components/hhcompletion-rate/hhcompletion-rate/hhcompletion-rate.component';
import { HhcompletionRateTeamwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-teamwise/hhcompletion-rate-teamwise.component';
import { HhcompletionRateMemberwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-memberwise/hhcompletion-rate-memberwise.component';
import { AgeDisplacementMenLowerLimitComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit/age-displacement-men-lower-limit.component';
import { AgeDisplacementMenLowerLimitTeamwiseComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit-teamwise/age-displacement-men-lower-limit-teamwise.component';
import { AgeDisplacementMenLowerLimitMemberwiseComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit-memberwise/age-displacement-men-lower-limit-memberwise.component';
import { AgeDisplacementMenUpperLimitComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit/age-displacement-men-upper-limit.component';
import { AgeDisplacementMenUpperLimitTeamwiseComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit-teamwise/age-displacement-men-upper-limit-teamwise.component';
import { AgeDisplacementMenUpperLimitMemberwiseComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit-memberwise/age-displacement-men-upper-limit-memberwise.component';
import { AgeDisplacementWomenLowerLimitComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit/age-displacement-women-lower-limit.component';
import { AgeDisplacementWomenLowerLimitTeamwiseComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit-teamwise/age-displacement-women-lower-limit-teamwise.component';
import { AgeDisplacementWomenLowerLimitMemberwiseComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit-memberwise/age-displacement-women-lower-limit-memberwise.component';
import { AgeDisplacementWomenUpperLimitComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit/age-displacement-women-upper-limit.component';
import { AgeDisplacementWomenUpperLimitTeamwiseComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit-teamwise/age-displacement-women-upper-limit-teamwise.component';
import { AgeDisplacementWomenUpperLimitMemberwiseComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit-memberwise/age-displacement-women-upper-limit-memberwise.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EligibleWomanResponseRateComponent } from './components/eligible-women-response-rate/eligible-woman-response-rate/eligible-woman-response-rate.component';
// import { EligibleWomenResponseRateComponent } from './components/eligible-women-response-rate/eligible-women-response-rate/eligible-women-response-rate.component';
import { EligibleWomenResponseRateTeamwiseComponent } from './components/eligible-women-response-rate/eligible-women-response-rate-teamwise/eligible-women-response-rate-teamwise.component';
import { EligibleWomenResponseRateMemberwiseComponent } from './components/eligible-women-response-rate/eligible-women-response-rate-memberwise/eligible-women-response-rate-memberwise.component';
import { EligibleManResponseRateComponent } from './components/eligible-man-response-rate/eligible-man-response-rate/eligible-man-response-rate.component';
import { EligibleManResponseRateMemberwiseComponent } from './components/eligible-man-response-rate/eligible-man-response-rate-memberwise/eligible-man-response-rate-memberwise.component';
import { EligibleManResponseRateTeamwiseComponent } from './components/eligible-man-response-rate/eligible-man-response-rate-teamwise/eligible-man-response-rate-teamwise.component';
import { Women1549VisitsComponent } from './components/women1549Visits/women1549-visits/women1549-visits.component';
import { Women1549VisitsMemberwiseComponent } from './components/women1549Visits/women1549-visits-memberwise/women1549-visits-memberwise.component';
import { Women1549VisitsTeamwiseComponent } from './components/women1549Visits/women1549-visits-teamwise/women1549-visits-teamwise.component';
import { Men1554VisitsComponent } from './components/men1554Visits/men1554-visits/men1554-visits.component';
import { Men1554VisitsMemberwiseComponent } from './components/men1554Visits/men1554-visits-memberwise/men1554-visits-memberwise.component';
import { Men1554VisitsTeamwiseComponent } from './components/men1554Visits/men1554-visits-teamwise/men1554-visits-teamwise.component';
import { HhRelationsModuleComponent } from './components/hhRelationsModule/hh-relations-module/hh-relations-module.component';
import { HhRelationsModuleTeamwiseComponent } from './components/hhRelationsModule/hh-relations-module-teamwise/hh-relations-module-teamwise.component';
import { HhRelationsModuleMemberwiseComponent } from './components/hhRelationsModule/hh-relations-module-memberwise/hh-relations-module-memberwise.component';
import { ContraceptivePrevalenceRateComponent } from './components/ContraceptivePrevalenceRate/contraceptive-prevalence-rate/contraceptive-prevalence-rate.component';
import { ContraceptivePrevalenceRateTeamwiseComponent } from './components/ContraceptivePrevalenceRate/contraceptive-prevalence-rate-teamwise/contraceptive-prevalence-rate-teamwise.component';
import { ContraceptivePrevalenceRateMemberwiseComponent } from './components/ContraceptivePrevalenceRate/contraceptive-prevalence-rate-memberwise/contraceptive-prevalence-rate-memberwise.component';
import { VaccinationHealthCardsComponent } from './components/VaccinationHealthCards/vaccination-health-cards/vaccination-health-cards.component';
import { VaccinationHealthCardsTeamwiseComponent } from './components/VaccinationHealthCards/vaccination-health-cards-teamwise/vaccination-health-cards-teamwise.component';
import { VaccinationHealthCardsMemberwiseComponent } from './components/VaccinationHealthCards/vaccination-health-cards-memberwise/vaccination-health-cards-memberwise.component';
import { BirthDisplacementComponent } from './components/birthDisplacement/birth-displacement/birth-displacement.component';
import { BirthDisplacementTeamwiseComponent } from './components/birthDisplacement/birth-displacement-teamwise/birth-displacement-teamwise.component';
import { BirthDisplacementMemberwiseComponent } from './components/birthDisplacement/birth-displacement-memberwise/birth-displacement-memberwise.component';
import { TooltipModule } from "primeng/tooltip";
import { SexRatioOfChildrenComponent } from './components/sexRatioOfChildren/sex-ratio-of-children/sex-ratio-of-children.component';
import { SexRatioOfChildrenTeamwiseComponent } from './components/sexRatioOfChildren/sex-ratio-of-children-teamwise/sex-ratio-of-children-teamwise.component';
import { SexRatioOfChildrenMemberwiseComponent } from './components/sexRatioOfChildren/sex-ratio-of-children-memberwise/sex-ratio-of-children-memberwise.component';
import { WomensHeightComponent } from './components/womensHeight/womens-height/womens-height.component';
import { WomensHeightTeamwiseComponent } from './components/womensHeight/womens-height-teamwise/womens-height-teamwise.component';
import { WomensHeightMemberwiseComponent } from './components/womensHeight/womens-height-memberwise/womens-height-memberwise.component';
import { WomensWeightComponent } from './components/womensWeight/womens-weight/womens-weight.component';
import { WomensWeightTeamwiseComponent } from './components/womensWeight/womens-weight-teamwise/womens-weight-teamwise.component';
import { WomensWeightMemberwiseComponent } from './components/womensWeight/womens-weight-memberwise/womens-weight-memberwise.component';
import { BirthWeightHealthcardComponent } from './components/birthWeightHealthcard/birth-weight-healthcard/birth-weight-healthcard.component';
import { BirthWeightHealthcardMemberwiseComponent } from './components/birthWeightHealthcard/birth-weight-healthcard-memberwise/birth-weight-healthcard-memberwise.component';
import { BirthWeightHealthcardTeamwiseComponent } from './components/birthWeightHealthcard/birth-weight-healthcard-teamwise/birth-weight-healthcard-teamwise.component';
import { InterviewStartTimeComponent } from './components/interview_start_time/interview-start-time/interview-start-time.component';
import { InterviewStartTimeMemberwiseComponent } from './components/interview_start_time/interview-start-time-memberwise/interview-start-time-memberwise.component';
import { InterviewStartTimeTeamwiseComponent } from './components/interview_start_time/interview-start-time-teamwise/interview-start-time-teamwise.component';
import { MensHeightComponent } from './components/mensHeight/mens-height/mens-height.component';
import { MensHeightTeamwiseComponent } from './components/mensHeight/mens-height-teamwise/mens-height-teamwise.component';
import { MensHeightMemberwiseComponent } from './components/mensHeight/mens-height-memberwise/mens-height-memberwise.component';
import { ChildrensHeightMemberwiseComponent } from './components/childrens-height/childrens-height-memberwise/childrens-height-memberwise.component';
import { ChildrensHeightTeamwiseComponent } from './components/childrens-height/childrens-height-teamwise/childrens-height-teamwise.component';
import { ChildrensHeightComponent } from './components/childrens-height/childrens-height/childrens-height.component';
import { ChildrensWeightComponent } from './components/childrens-weight/childrens-weight/childrens-weight.component';
import { ChildrensWeightTeamwiseComponent } from './components/childrens-weight/childrens-weight-teamwise/childrens-weight-teamwise.component';
import { ChildrensWeightMemberwiseComponent } from './components/childrens-weight/childrens-weight-memberwise/childrens-weight-memberwise.component';
import { ChildrensWeightHeapingFirstDecimalComponent } from './components/childrens-weight-heaping-first-decimal/childrens-weight-heaping-first-decimal/childrens-weight-heaping-first-decimal.component';
import { ChildrensWeightHeapingFirstDecimalTeamwiseComponent } from './components/childrens-weight-heaping-first-decimal/childrens-weight-heaping-first-decimal-teamwise/childrens-weight-heaping-first-decimal-teamwise.component';
import { ChildrensWeightHeapingFirstDecimalMemberwiseComponent } from './components/childrens-weight-heaping-first-decimal/childrens-weight-heaping-first-decimal-memberwise/childrens-weight-heaping-first-decimal-memberwise.component';
import { ChildrensWeightHeapingSecondDecimalComponent } from './components/childrens-weight-heaping-second-decimal/childrens-weight-heaping-second-decimal/childrens-weight-heaping-second-decimal.component';
import { ChildrensWeightHeapingSecondDecimalTeamwiseComponent } from './components/childrens-weight-heaping-second-decimal/childrens-weight-heaping-second-decimal-teamwise/childrens-weight-heaping-second-decimal-teamwise.component';
import { ChildrensWeightHeapingSecondDecimalMemberwiseComponent } from './components/childrens-weight-heaping-second-decimal/childrens-weight-heaping-second-decimal-memberwise/childrens-weight-heaping-second-decimal-memberwise.component';
import { MensWeightHeapingFirstDecimalComponent } from './components/mens-weight-heaping-first-decimal/mens-weight-heaping-first-decimal/mens-weight-heaping-first-decimal.component';
import { MensWeightHeapingFirstDecimalTeamwiseComponent } from './components/mens-weight-heaping-first-decimal/mens-weight-heaping-first-decimal-teamwise/mens-weight-heaping-first-decimal-teamwise.component';
import { MensWeightHeapingFirstDecimalMemberwiseComponent } from './components/mens-weight-heaping-first-decimal/mens-weight-heaping-first-decimal-memberwise/mens-weight-heaping-first-decimal-memberwise.component';
import { MensWeightHeapingSecondDecimalComponent } from './components/mens-weight-heaping-second-decimal/mens-weight-heaping-second-decimal/mens-weight-heaping-second-decimal.component';
import { MensWeightHeapingSecondDecimalTeamwiseComponent } from './components/mens-weight-heaping-second-decimal/mens-weight-heaping-second-decimal-teamwise/mens-weight-heaping-second-decimal-teamwise.component';
import { MensWeightHeapingSecondDecimalMemberwiseComponent } from './components/mens-weight-heaping-second-decimal/mens-weight-heaping-second-decimal-memberwise/mens-weight-heaping-second-decimal-memberwise.component';
import { MensWeightComponent } from './components/mens-weight/mens-weight/mens-weight.component';
import { MensWeightTeamwiseComponent } from './components/mens-weight/mens-weight-teamwise/mens-weight-teamwise.component';
import { MensWeightMemberwiseComponent } from './components/mens-weight/mens-weight-memberwise/mens-weight-memberwise.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MensHeightHeapingFirstDecimalComponent } from './components/mens-height-heaping-first-decimal/mens-height-heaping-first-decimal/mens-height-heaping-first-decimal.component';
import { MensHeightHeapingFirstDecimalTeamwiseComponent } from './components/mens-height-heaping-first-decimal/mens-height-heaping-first-decimal-teamwise/mens-height-heaping-first-decimal-teamwise.component';
import { MensHeightHeapingFirstDecimalMemberwiseComponent } from './components/mens-height-heaping-first-decimal/mens-height-heaping-first-decimal-memberwise/mens-height-heaping-first-decimal-memberwise.component';
import { NoFoodConsumptionOfChildFrom6To23MonthsComponent } from './components/noFoodConsumptionOfChildFrom6To23Months/no-food-consumption-of-child-from6-to23-months/no-food-consumption-of-child-from6-to23-months.component';
import { NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent } from './components/noFoodConsumptionOfChildFrom6To23Months/no-food-consumption-of-child-from6-to23-months-teamwise/no-food-consumption-of-child-from6-to23-months-teamwise.component';
import { NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent } from './components/noFoodConsumptionOfChildFrom6To23Months/no-food-consumption-of-child-from6-to23-months-memberwise/no-food-consumption-of-child-from6-to23-months-memberwise.component';
import { AgeAtDeathHeapingComponent } from './components/ageAtDeathHeaping/age-at-death-heaping/age-at-death-heaping.component';
import { AgeAtDeathHeapingTeamwiseComponent } from './components/ageAtDeathHeaping/age-at-death-heaping-teamwise/age-at-death-heaping-teamwise.component';
import { AgeAtDeathHeapingMemberwiseComponent } from './components/ageAtDeathHeaping/age-at-death-heaping-memberwise/age-at-death-heaping-memberwise.component';
import { WomensHeightHeapingFirstDecimalComponent } from './components/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal.component';
import { WomensHeightHeapingFirstDecimalMemberwiseComponent } from './components/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal-memberwise/womens-height-heaping-first-decimal-memberwise.component';
import { WomensHeightHeapingFirstDecimalTeamwiseComponent } from './components/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal-teamwise/womens-height-heaping-first-decimal-teamwise.component';
import { WomensWeightHeapingFirstDecimalComponent } from './components/womens-weight-heaping-first-decimal/womens-weight-heaping-first-decimal/womens-weight-heaping-first-decimal.component';
import { WomensWeightHeapingFirstDecimalMemberwiseComponent } from './components/womens-weight-heaping-first-decimal/womens-weight-heaping-first-decimal-memberwise/womens-weight-heaping-first-decimal-memberwise.component';
import { WomensWeightHeapingFirstDecimalTeamwiseComponent } from './components/womens-weight-heaping-first-decimal/womens-weight-heaping-first-decimal-teamwise/womens-weight-heaping-first-decimal-teamwise.component';
import { WomensWeightHeapingSecondDecimalComponent } from './components/womens-weight-heaping-second-decimal/womens-weight-heaping-second-decimal/womens-weight-heaping-second-decimal.component';
import { WomensWeightHeapingSecondDecimalMemberwiseComponent } from './components/womens-weight-heaping-second-decimal/womens-weight-heaping-second-decimal-memberwise/womens-weight-heaping-second-decimal-memberwise.component';
import { WomensWeightHeapingSecondDecimalTeamwiseComponent } from './components/womens-weight-heaping-second-decimal/womens-weight-heaping-second-decimal-teamwise/womens-weight-heaping-second-decimal-teamwise.component';
//import { WomensHeightHeapingFirstDecimalComponent } from './components/womensHeightHeapingFirstDecimal/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal.component';


@NgModule({
    declarations: [AppComponent, 
         
         
        
         
         
        DashboardComponent, 
        
        
         
        EligibleMenPerHhComponent, 
        EligibleMenPerHhTeamwiseComponent, 
        EligibleMenPerHhMemberwiseComponent, 
        EligibleWomenPerHhComponent, 
        EligibleWomenPerHhTeamwiseComponent, 
        EligibleWomenPerHhMemberwiseComponent, 
        EligibleWomanResponseRateComponent, 
        EligibleWomenResponseRateTeamwiseComponent, 
        EligibleWomenResponseRateMemberwiseComponent, 
        EligibleManResponseRateComponent, 
        EligibleManResponseRateMemberwiseComponent, 
        EligibleManResponseRateTeamwiseComponent, 
        Women1549VisitsComponent, 
        Women1549VisitsMemberwiseComponent, 
        Women1549VisitsTeamwiseComponent, 
        Men1554VisitsComponent, 
        Men1554VisitsMemberwiseComponent,
        Men1554VisitsTeamwiseComponent, 
        HhRelationsModuleComponent, 
        HhRelationsModuleTeamwiseComponent, 
        HhRelationsModuleMemberwiseComponent, 
        ContraceptivePrevalenceRateComponent, 
        ContraceptivePrevalenceRateTeamwiseComponent, 
        ContraceptivePrevalenceRateMemberwiseComponent, 
        VaccinationHealthCardsComponent, 
        VaccinationHealthCardsTeamwiseComponent, 
        VaccinationHealthCardsMemberwiseComponent, 
        BirthDisplacementComponent, 
        BirthDisplacementTeamwiseComponent, 
        BirthDisplacementMemberwiseComponent,
        EligibleWomenPerHhComponent, 
        EligibleWomenPerHhTeamwiseComponent, 
        EligibleWomenPerHhMemberwiseComponent, 
        HhVisitsComponent, 
        HhVisitsTeamwiseComponent, 
        HhVisitsMemberwiseComponent, 
        HhcompletionRateComponent, 
        HhcompletionRateTeamwiseComponent, 
        HhcompletionRateMemberwiseComponent, 
        AgeDisplacementMenLowerLimitComponent, 
        AgeDisplacementMenLowerLimitTeamwiseComponent, 
        AgeDisplacementMenLowerLimitMemberwiseComponent, 
        AgeDisplacementMenUpperLimitComponent, 
        AgeDisplacementMenUpperLimitTeamwiseComponent, 
        AgeDisplacementMenUpperLimitMemberwiseComponent, 
        AgeDisplacementWomenLowerLimitComponent, 
        AgeDisplacementWomenLowerLimitTeamwiseComponent, 
        AgeDisplacementWomenLowerLimitMemberwiseComponent, 
        AgeDisplacementWomenUpperLimitComponent, 
        AgeDisplacementWomenUpperLimitTeamwiseComponent, 
        AgeDisplacementWomenUpperLimitMemberwiseComponent,



        SexRatioOfChildrenComponent, 
        SexRatioOfChildrenTeamwiseComponent, 
        SexRatioOfChildrenMemberwiseComponent, 
        WomensHeightComponent, 
        WomensHeightTeamwiseComponent, 
        WomensHeightMemberwiseComponent, 
        WomensWeightComponent, 
        WomensWeightTeamwiseComponent, 
        WomensWeightMemberwiseComponent,
        BirthWeightHealthcardComponent,
        BirthWeightHealthcardMemberwiseComponent,
        BirthWeightHealthcardTeamwiseComponent,
        InterviewStartTimeComponent,
        InterviewStartTimeMemberwiseComponent,
        InterviewStartTimeTeamwiseComponent, 
        MensHeightComponent, 
        MensHeightTeamwiseComponent, 
        MensHeightMemberwiseComponent,
        ChildrensHeightMemberwiseComponent, 
        ChildrensHeightTeamwiseComponent, 
        ChildrensHeightComponent, 
        ChildrensWeightComponent, 
        ChildrensWeightTeamwiseComponent, 
        ChildrensWeightMemberwiseComponent, 
        ChildrensWeightHeapingFirstDecimalComponent, 
        ChildrensWeightHeapingFirstDecimalTeamwiseComponent, 
        ChildrensWeightHeapingFirstDecimalMemberwiseComponent, 
        ChildrensWeightHeapingSecondDecimalComponent, 
        ChildrensWeightHeapingSecondDecimalTeamwiseComponent, 
        ChildrensWeightHeapingSecondDecimalMemberwiseComponent,
        MensWeightHeapingFirstDecimalComponent, 
        MensWeightHeapingFirstDecimalTeamwiseComponent, 
        MensWeightHeapingFirstDecimalMemberwiseComponent, 
        MensWeightHeapingSecondDecimalComponent, 
        MensWeightHeapingSecondDecimalTeamwiseComponent, 
        MensWeightHeapingSecondDecimalMemberwiseComponent, 
        MensWeightComponent, 
        MensWeightTeamwiseComponent, 
        MensWeightMemberwiseComponent, ErrorPageComponent,
    MensHeightComponent,
    MensHeightMemberwiseComponent,
    MensHeightTeamwiseComponent,
    MensHeightHeapingFirstDecimalComponent,
    MensHeightHeapingFirstDecimalTeamwiseComponent,
    MensHeightHeapingFirstDecimalMemberwiseComponent,
    NoFoodConsumptionOfChildFrom6To23MonthsComponent,
    NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent,
    NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent,
    AgeAtDeathHeapingComponent,
    AgeAtDeathHeapingTeamwiseComponent,
    AgeAtDeathHeapingMemberwiseComponent,
    WomensHeightHeapingFirstDecimalComponent,
    WomensHeightHeapingFirstDecimalMemberwiseComponent,
    WomensHeightHeapingFirstDecimalTeamwiseComponent,
    WomensWeightHeapingFirstDecimalComponent,
    WomensWeightHeapingFirstDecimalMemberwiseComponent,
    WomensWeightHeapingFirstDecimalTeamwiseComponent,
    WomensWeightHeapingSecondDecimalComponent,
    WomensWeightHeapingSecondDecimalMemberwiseComponent,
    WomensWeightHeapingSecondDecimalTeamwiseComponent
    
    
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        CalendarModule,
        BrowserModule,
        DialogModule,
        InputTextModule,
        TimelineModule,
        TableModule,
        TooltipModule
        
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },DatePipe],
    // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    //hash location strategy uses the hash fragment part of the URL to store state for the client
    //has the downside that it won't work with Angular Universal once that's released.

    bootstrap: [AppComponent],
})
export class AppModule {}
