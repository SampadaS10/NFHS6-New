import {
    Routes,
    Router,
    RouterModule,
    NavigationEnd,
    RouteReuseStrategy,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { EligibleMenPerHhComponent } from './components/eligible-men-per-hh/eligible-men-per-hh/eligible-men-per-hh.component';
import { EligibleMenPerHhTeamwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-teamwise/eligible-men-per-hh-teamwise.component';
import { EligibleMenPerHhMemberwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-memberwise/eligible-men-per-hh-memberwise.component';
import { EligibleWomenPerHhComponent } from './components/eligible-women-per-hh/eligible-women-per-hh/eligible-women-per-hh.component';
import { EligibleWomenPerHhMemberwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-memberwise/eligible-women-per-hh-memberwise.component';
import { EligibleWomenPerHhTeamwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-teamwise/eligible-women-per-hh-teamwise.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy.service';
import { EligibleWomanResponseRateComponent } from './components/eligible-women-response-rate/eligible-woman-response-rate/eligible-woman-response-rate.component';
import { EligibleWomenResponseRateTeamwiseComponent } from './components/eligible-women-response-rate/eligible-women-response-rate-teamwise/eligible-women-response-rate-teamwise.component';
import { EligibleWomenResponseRateMemberwiseComponent } from './components/eligible-women-response-rate/eligible-women-response-rate-memberwise/eligible-women-response-rate-memberwise.component';
import { EligibleManResponseRateComponent } from './components/eligible-man-response-rate/eligible-man-response-rate/eligible-man-response-rate.component';
import { EligibleManResponseRateTeamwiseComponent } from './components/eligible-man-response-rate/eligible-man-response-rate-teamwise/eligible-man-response-rate-teamwise.component';
import { EligibleManResponseRateMemberwiseComponent } from './components/eligible-man-response-rate/eligible-man-response-rate-memberwise/eligible-man-response-rate-memberwise.component';
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
import { HhVisitsComponent } from './components/hh-visits/hh-visits/hh-visits.component';
import { HhVisitsTeamwiseComponent } from './components/hh-visits/hh-visits-teamwise/hh-visits-teamwise.component';
import { HhVisitsMemberwiseComponent } from './components/hh-visits/hh-visits-memberwise/hh-visits-memberwise.component';
import { HhcompletionRateComponent } from './components/hhcompletion-rate/hhcompletion-rate/hhcompletion-rate.component';
import { AgeDisplacementMenLowerLimitMemberwiseComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit-memberwise/age-displacement-men-lower-limit-memberwise.component';
import { AgeDisplacementMenLowerLimitTeamwiseComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit-teamwise/age-displacement-men-lower-limit-teamwise.component';
import { AgeDisplacementMenLowerLimitComponent } from './components/age-displacement-men-lower-limit/age-displacement-men-lower-limit/age-displacement-men-lower-limit.component';
import { AgeDisplacementMenUpperLimitMemberwiseComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit-memberwise/age-displacement-men-upper-limit-memberwise.component';
import { AgeDisplacementMenUpperLimitTeamwiseComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit-teamwise/age-displacement-men-upper-limit-teamwise.component';
import { AgeDisplacementMenUpperLimitComponent } from './components/age-displacement-men-upper-limit/age-displacement-men-upper-limit/age-displacement-men-upper-limit.component';
import { AgeDisplacementWomenLowerLimitMemberwiseComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit-memberwise/age-displacement-women-lower-limit-memberwise.component';
import { AgeDisplacementWomenLowerLimitTeamwiseComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit-teamwise/age-displacement-women-lower-limit-teamwise.component';
import { AgeDisplacementWomenLowerLimitComponent } from './components/age-displacement-women-lower-limit/age-displacement-women-lower-limit/age-displacement-women-lower-limit.component';
import { AgeDisplacementWomenUpperLimitMemberwiseComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit-memberwise/age-displacement-women-upper-limit-memberwise.component';
import { AgeDisplacementWomenUpperLimitTeamwiseComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit-teamwise/age-displacement-women-upper-limit-teamwise.component';
import { AgeDisplacementWomenUpperLimitComponent } from './components/age-displacement-women-upper-limit/age-displacement-women-upper-limit/age-displacement-women-upper-limit.component';
import { HhcompletionRateMemberwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-memberwise/hhcompletion-rate-memberwise.component';
import { HhcompletionRateTeamwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-teamwise/hhcompletion-rate-teamwise.component';
import { SexRatioOfChildrenComponent } from './components/sexRatioOfChildren/sex-ratio-of-children/sex-ratio-of-children.component';
import { SexRatioOfChildrenTeamwiseComponent } from './components/sexRatioOfChildren/sex-ratio-of-children-teamwise/sex-ratio-of-children-teamwise.component';
import { SexRatioOfChildrenMemberwiseComponent } from './components/sexRatioOfChildren/sex-ratio-of-children-memberwise/sex-ratio-of-children-memberwise.component';
import { WomensHeightComponent } from './components/womensHeight/womens-height/womens-height.component';
import { WomensHeightTeamwiseComponent } from './components/womensHeight/womens-height-teamwise/womens-height-teamwise.component';
import { WomensHeightMemberwiseComponent } from './components/womensHeight/womens-height-memberwise/womens-height-memberwise.component';
import { WomensWeightComponent } from './components/womensWeight/womens-weight/womens-weight.component';
import { WomensWeightTeamwiseComponent } from './components/womensWeight/womens-weight-teamwise/womens-weight-teamwise.component';
import { WomensWeightMemberwiseComponent } from './components/womensWeight/womens-weight-memberwise/womens-weight-memberwise.component';
import { BirthWeightHealthcardMemberwiseComponent } from './components/birthWeightHealthcard/birth-weight-healthcard-memberwise/birth-weight-healthcard-memberwise.component';
import { BirthWeightHealthcardTeamwiseComponent } from './components/birthWeightHealthcard/birth-weight-healthcard-teamwise/birth-weight-healthcard-teamwise.component';
import { BirthWeightHealthcardComponent } from './components/birthWeightHealthcard/birth-weight-healthcard/birth-weight-healthcard.component';
import { InterviewStartTimeMemberwiseComponent } from './components/interview_start_time/interview-start-time-memberwise/interview-start-time-memberwise.component';
import { InterviewStartTimeTeamwiseComponent } from './components/interview_start_time/interview-start-time-teamwise/interview-start-time-teamwise.component';
import { InterviewStartTimeComponent } from './components/interview_start_time/interview-start-time/interview-start-time.component';
import { MensHeightMemberwiseComponent } from './components/mensHeight/mens-height-memberwise/mens-height-memberwise.component';
import { MensHeightTeamwiseComponent } from './components/mensHeight/mens-height-teamwise/mens-height-teamwise.component';
import { MensHeightComponent } from './components/mensHeight/mens-height/mens-height.component';
import { ChildrensHeightMemberwiseComponent } from './components/childrens-height/childrens-height-memberwise/childrens-height-memberwise.component';
import { ChildrensHeightTeamwiseComponent } from './components/childrens-height/childrens-height-teamwise/childrens-height-teamwise.component';
import { ChildrensHeightComponent } from './components/childrens-height/childrens-height/childrens-height.component';
import { ChildrensWeightHeapingFirstDecimalMemberwiseComponent } from './components/childrens-weight-heaping-first-decimal/childrens-weight-heaping-first-decimal-memberwise/childrens-weight-heaping-first-decimal-memberwise.component';
import { ChildrensWeightHeapingFirstDecimalTeamwiseComponent } from './components/childrens-weight-heaping-first-decimal/childrens-weight-heaping-first-decimal-teamwise/childrens-weight-heaping-first-decimal-teamwise.component';
import { ChildrensWeightHeapingFirstDecimalComponent } from './components/childrens-weight-heaping-first-decimal/childrens-weight-heaping-first-decimal/childrens-weight-heaping-first-decimal.component';
import { ChildrensWeightHeapingSecondDecimalMemberwiseComponent } from './components/childrens-weight-heaping-second-decimal/childrens-weight-heaping-second-decimal-memberwise/childrens-weight-heaping-second-decimal-memberwise.component';
import { ChildrensWeightHeapingSecondDecimalTeamwiseComponent } from './components/childrens-weight-heaping-second-decimal/childrens-weight-heaping-second-decimal-teamwise/childrens-weight-heaping-second-decimal-teamwise.component';
import { ChildrensWeightHeapingSecondDecimalComponent } from './components/childrens-weight-heaping-second-decimal/childrens-weight-heaping-second-decimal/childrens-weight-heaping-second-decimal.component';
import { ChildrensWeightMemberwiseComponent } from './components/childrens-weight/childrens-weight-memberwise/childrens-weight-memberwise.component';
import { ChildrensWeightTeamwiseComponent } from './components/childrens-weight/childrens-weight-teamwise/childrens-weight-teamwise.component';
import { ChildrensWeightComponent } from './components/childrens-weight/childrens-weight/childrens-weight.component';
import { MensWeightHeapingFirstDecimalMemberwiseComponent } from './components/mens-weight-heaping-first-decimal/mens-weight-heaping-first-decimal-memberwise/mens-weight-heaping-first-decimal-memberwise.component';
import { MensWeightHeapingFirstDecimalTeamwiseComponent } from './components/mens-weight-heaping-first-decimal/mens-weight-heaping-first-decimal-teamwise/mens-weight-heaping-first-decimal-teamwise.component';
import { MensWeightHeapingFirstDecimalComponent } from './components/mens-weight-heaping-first-decimal/mens-weight-heaping-first-decimal/mens-weight-heaping-first-decimal.component';
import { MensWeightHeapingSecondDecimalMemberwiseComponent } from './components/mens-weight-heaping-second-decimal/mens-weight-heaping-second-decimal-memberwise/mens-weight-heaping-second-decimal-memberwise.component';
import { MensWeightHeapingSecondDecimalTeamwiseComponent } from './components/mens-weight-heaping-second-decimal/mens-weight-heaping-second-decimal-teamwise/mens-weight-heaping-second-decimal-teamwise.component';
import { MensWeightHeapingSecondDecimalComponent } from './components/mens-weight-heaping-second-decimal/mens-weight-heaping-second-decimal/mens-weight-heaping-second-decimal.component';
import { MensWeightMemberwiseComponent } from './components/mens-weight/mens-weight-memberwise/mens-weight-memberwise.component';
import { MensWeightTeamwiseComponent } from './components/mens-weight/mens-weight-teamwise/mens-weight-teamwise.component';
import { MensWeightComponent } from './components/mens-weight/mens-weight/mens-weight.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MensHeightHeapingFirstDecimalMemberwiseComponent } from './components/mens-height-heaping-first-decimal/mens-height-heaping-first-decimal-memberwise/mens-height-heaping-first-decimal-memberwise.component';
import { MensHeightHeapingFirstDecimalTeamwiseComponent } from './components/mens-height-heaping-first-decimal/mens-height-heaping-first-decimal-teamwise/mens-height-heaping-first-decimal-teamwise.component';
import { MensHeightHeapingFirstDecimalComponent } from './components/mens-height-heaping-first-decimal/mens-height-heaping-first-decimal/mens-height-heaping-first-decimal.component';
import { NoFoodConsumptionOfChildFrom6To23MonthsComponent } from './components/noFoodConsumptionOfChildFrom6To23Months/no-food-consumption-of-child-from6-to23-months/no-food-consumption-of-child-from6-to23-months.component';
import { NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent } from './components/noFoodConsumptionOfChildFrom6To23Months/no-food-consumption-of-child-from6-to23-months-teamwise/no-food-consumption-of-child-from6-to23-months-teamwise.component';
import { NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent } from './components/noFoodConsumptionOfChildFrom6To23Months/no-food-consumption-of-child-from6-to23-months-memberwise/no-food-consumption-of-child-from6-to23-months-memberwise.component';
import { AgeAtDeathHeapingComponent } from './components/ageAtDeathHeaping/age-at-death-heaping/age-at-death-heaping.component';
import { AgeAtDeathHeapingMemberwiseComponent } from './components/ageAtDeathHeaping/age-at-death-heaping-memberwise/age-at-death-heaping-memberwise.component';
import { AgeAtDeathHeapingTeamwiseComponent } from './components/ageAtDeathHeaping/age-at-death-heaping-teamwise/age-at-death-heaping-teamwise.component';
import { WomensHeightHeapingFirstDecimalComponent } from './components/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal.component';
import { WomensHeightHeapingFirstDecimalMemberwiseComponent } from './components/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal-memberwise/womens-height-heaping-first-decimal-memberwise.component';
import { WomensHeightHeapingFirstDecimalTeamwiseComponent } from './components/womens-height-heaping-first-decimal/womens-height-heaping-first-decimal-teamwise/womens-height-heaping-first-decimal-teamwise.component';
import { WomensWeightHeapingFirstDecimalMemberwiseComponent } from './components/womens-weight-heaping-first-decimal/womens-weight-heaping-first-decimal-memberwise/womens-weight-heaping-first-decimal-memberwise.component';
import { WomensWeightHeapingFirstDecimalTeamwiseComponent } from './components/womens-weight-heaping-first-decimal/womens-weight-heaping-first-decimal-teamwise/womens-weight-heaping-first-decimal-teamwise.component';
import { WomensWeightHeapingFirstDecimalComponent } from './components/womens-weight-heaping-first-decimal/womens-weight-heaping-first-decimal/womens-weight-heaping-first-decimal.component';
import { WomensWeightHeapingSecondDecimalMemberwiseComponent } from './components/womens-weight-heaping-second-decimal/womens-weight-heaping-second-decimal-memberwise/womens-weight-heaping-second-decimal-memberwise.component';
import { WomensWeightHeapingSecondDecimalTeamwiseComponent } from './components/womens-weight-heaping-second-decimal/womens-weight-heaping-second-decimal-teamwise/womens-weight-heaping-second-decimal-teamwise.component';
import { WomensWeightHeapingSecondDecimalComponent } from './components/womens-weight-heaping-second-decimal/womens-weight-heaping-second-decimal/womens-weight-heaping-second-decimal.component';
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {path : '', 
                        component : DashboardComponent
                        },
                        {
                            path: 'getAllEligibleMenPerHhReport',
                            component: EligibleMenPerHhComponent,
                        },
                        {
                            path: 'getAllEligibleMenPerHhReportTeamwise/:stateId/:stateName',
                            component: EligibleMenPerHhTeamwiseComponent,
                        },
                        {
                            path: 'getAllEligibleMenPerHhMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: EligibleMenPerHhMemberwiseComponent,
                        },
                        {
                            path: 'getAllEligibleWomenPerHhReport',
                            component: EligibleWomenPerHhComponent,
                        },
                        {
                            path: 'getAllEligibleWomenPerHhMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: EligibleWomenPerHhMemberwiseComponent,
                        },
                        {
                            path: 'getAllEligibleWomenPerHhReportTeamwise/:stateId/:stateName',
                            component: EligibleWomenPerHhTeamwiseComponent,
                        },
                        {
                            path: 'getAllVisitsHh',
                            component: HhVisitsComponent,
                        },
                        {
                            path: 'getAllVisitsHhTeamwise/:stateId/:stateName',
                            component: HhVisitsTeamwiseComponent,
                        },
                        {
                            path: 'getAllVisitsHhMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: HhVisitsMemberwiseComponent,
                        },
                        {
                            path: 'getAllHhCompletionRate',
                            component: HhcompletionRateComponent,
                        },
                        {
                            path: 'getAllHhCompletionRateTeamwise/:stateId/:stateName',
                            component: HhcompletionRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllHhCompletionRateMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: HhcompletionRateMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenLowerLimit',
                            component: AgeDisplacementMenLowerLimitComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenLowerLimitTeamwise/:stateId/:stateName',
                            component:
                                AgeDisplacementMenLowerLimitTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenLowerLimitMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                AgeDisplacementMenLowerLimitMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenUpperLimit',
                            component: AgeDisplacementMenUpperLimitComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenUpperLimitTeamwise/:stateId/:stateName',
                            component:
                                AgeDisplacementMenUpperLimitTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementMenUpperLimitMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                AgeDisplacementMenUpperLimitMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenLowerLimit',
                            component: AgeDisplacementWomenLowerLimitComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenLowerLimitTeamwise/:stateId/:stateName',
                            component:
                                AgeDisplacementWomenLowerLimitTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenLowerLimitMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                AgeDisplacementWomenLowerLimitMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenUpperLimit',
                            component: AgeDisplacementWomenUpperLimitComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenUpperLimitTeamwise/:stateId/:stateName',
                            component:
                                AgeDisplacementWomenUpperLimitTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeDisplacementWomenUpperLimitMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                AgeDisplacementWomenUpperLimitMemberwiseComponent,
                        },
                        {
                            path: 'getAllEligibleWomenResponseRate',
                            component: EligibleWomanResponseRateComponent,
                        },
                        {
                            path: 'getAllEligibleWomenResponseRateTeamwise/:stateId/:stateName',
                            component:
                                EligibleWomenResponseRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllEligibleWomenResponseRateMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                EligibleWomenResponseRateMemberwiseComponent,
                        },
                        {
                            path: 'getAllEligibleManResponseRate',
                            component: EligibleManResponseRateComponent,
                        },
                        {
                            path: 'getAllEligibleManResponseRateTeamwise/:stateId/:stateName',
                            component: EligibleManResponseRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllEligibleManResponseRateMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                EligibleManResponseRateMemberwiseComponent,
                        },
                        {
                            path: 'getAllWomenVisit1549Visits',
                            component: Women1549VisitsComponent,
                        },
                        {
                            path: 'getAllWomenVisit1549VisitsTeamwise/:stateId/:stateName',
                            component: Women1549VisitsTeamwiseComponent,
                        },
                        {
                            path: 'getAllWomenVisit1549VisitsMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: Women1549VisitsMemberwiseComponent,
                        },
                        {
                            path: 'getAllMenVisit1554Visits',
                            component: Men1554VisitsComponent,
                        },
                        {
                            path: 'getAllMenVisit1554VisitsTeamwise/:stateId/:stateName',
                            component: Men1554VisitsTeamwiseComponent,
                        },
                        {
                            path: 'getAllMenVisit1554VisitsMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: Men1554VisitsMemberwiseComponent,
                        },
                        {
                            path: 'getAllHouseholdRelationsModules',
                            component: HhRelationsModuleComponent,
                        },
                        {
                            path: 'getAllHouseholdRelationsModulesTeamwise/:stateId/:stateName',
                            component: HhRelationsModuleTeamwiseComponent,
                        },
                        {
                            path: 'getAllHouseholdRelationsModulesMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: HhRelationsModuleMemberwiseComponent,
                        },
                        {
                            path: 'getAllContraceptivePrevalenceRate',
                            component: ContraceptivePrevalenceRateComponent,
                        },
                        {
                            path: 'getAllContraceptivePrevalenceRateTeamwise/:stateId/:stateName',
                            component:
                                ContraceptivePrevalenceRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllContraceptivePrevalenceRateMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                ContraceptivePrevalenceRateMemberwiseComponent,
                        },
                        {
                            path: 'getAllVaccinationHealthCards',
                            component: VaccinationHealthCardsComponent,
                        },
                        {
                            path: 'getAllVaccinationHealthCardsTeamwise/:stateId/:stateName',
                            component: VaccinationHealthCardsTeamwiseComponent,
                        },
                        {
                            path: 'getAllVaccinationHealthCardsMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component:
                                VaccinationHealthCardsMemberwiseComponent,
                        },
                        {
                            path: 'getAllBirthDisplacement',
                            component: BirthDisplacementComponent,
                        },
                        {
                            path: 'getAllBirthDisplacementTeamwise/:stateId/:stateName',
                            component: BirthDisplacementTeamwiseComponent,
                        },
                        {
                            path: 'getAllBirthDisplacementMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: BirthDisplacementMemberwiseComponent,
                        },



                     // roshan codespace
                        {
                            path: 'getAllSexRatioOfChildren',
                            component: SexRatioOfChildrenComponent,
                        },
                        {
                            path: 'getAllSexRatioOfChildrenTeamwise/:stateId/:stateName',
                            component: SexRatioOfChildrenTeamwiseComponent,
                        },
                        {
                            path: 'getAllSexRatioOfChildrenMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: SexRatioOfChildrenMemberwiseComponent,
                        },
                        {
                            path: 'getAllWomensHeight',
                            component: WomensHeightComponent,
                        },
                        {
                            path: 'getAllWomensHeightTeamwise/:stateId/:stateName',
                            component: WomensHeightTeamwiseComponent,
                        },
                        {
                            path: 'getAllWomensHeightMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: WomensHeightMemberwiseComponent,
                        },
                        {
                            path: 'getAllWomensWeight',
                            component: WomensWeightComponent,
                        },
                        {
                            path: 'getAllWomensWeightTeamwise/:stateId/:stateName',
                            component: WomensWeightTeamwiseComponent,
                        },
                        {
                            path: 'getAllWomensWeightMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: WomensWeightMemberwiseComponent,
                        },
                        {
                            path: 'getAllBirthWeightHealthcard',
                            component: BirthWeightHealthcardComponent,
                        },
                        {
                            path: 'getAllBirthWeightHealthcardTeamwise/:stateId/:stateName',
                            component: BirthWeightHealthcardTeamwiseComponent,
                        },
                        {
                            path: 'getAllBirthWeightHealthcardMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: BirthWeightHealthcardMemberwiseComponent,
                        },
                        {
                            path: 'getAllInterviewStartTime',
                            component: InterviewStartTimeComponent,
                        },
                        {
                            path: 'getAllInterviewStartTimeTeamwise/:stateId/:stateName',
                            component: InterviewStartTimeTeamwiseComponent,
                        },
                        {
                            path: 'getAllInterviewStartTimeMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: InterviewStartTimeMemberwiseComponent,
                        },
                        {
                            path: 'getAllMensHeight',
                            component: MensHeightComponent,
                        },
                        {
                            path: 'getAllMensHeightTeamwise/:stateId/:stateName',
                            component: MensHeightTeamwiseComponent,
                        },
                        {
                            path: 'getAllMensHeightMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: MensHeightMemberwiseComponent,
                        },



                        // sampada code
                        {
                            path: 'getAllChildrensHeight',
                            component: ChildrensHeightComponent,
                        },
                        {
                            path: 'getAllChildrensHeightTeamwise/:stateId/:stateName',
                            component: ChildrensHeightTeamwiseComponent,
                        },
                        {
                            path: 'getAllChildrensHeightMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: ChildrensHeightMemberwiseComponent,
                        },
                        {
                            path: 'getAllChildrensWeight',
                            component: ChildrensWeightComponent,
                        },
                        {
                            path: 'getAllChildrensWeightTeamwise/:stateId/:stateName',
                            component: ChildrensWeightTeamwiseComponent,
                        },
                        {
                            path: 'getAllChildrensWeightMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: ChildrensWeightMemberwiseComponent,
                        },
                        {
                            path: 'getAllChildrensWeightHeapingFirstDecimal',
                            component: ChildrensWeightHeapingFirstDecimalComponent,
                        },
                        {
                            path: 'getAllChildrensWeightHeapingFirstDecimalTeamwise/:stateId/:stateName',
                            component: ChildrensWeightHeapingFirstDecimalTeamwiseComponent,
                        },
                        {
                            path: 'getAllChildrensWeightHeapingFirstDecimalMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: ChildrensWeightHeapingFirstDecimalMemberwiseComponent,
                        },
                        {
                            path: 'getAllChildrensWeightHeapingSecondDecimal',
                            component: ChildrensWeightHeapingSecondDecimalComponent,
                        },
                        {
                            path: 'getAllChildrensWeightHeapingSecondDecimalTeamwise/:stateId/:stateName',
                            component: ChildrensWeightHeapingSecondDecimalTeamwiseComponent,
                        },
                        {
                            path: 'getAllChildrensWeightHeapingSecondDecimalMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: ChildrensWeightHeapingSecondDecimalMemberwiseComponent,
                        },
                        // {
                        //     path: 'getAllChildMortality',
                        //     component: ChildMortalityComponent,
                        // },
                        // {
                        //     path: 'getAllChildMortalityTeamwise/:stateId/:stateName',
                        //     component: ChildMortalityTeamwiseComponent,
                        // },
                        // {
                        //     path: 'getAllChildMortalityMemberwise/:stateId/:stateName/:teamNo/:teamName',
                        //     component: ChildMortalityMemberwiseComponent,
                        // },
                        {
                            path: 'getAllMensWeightHeapingFirstDecimal',
                            component: MensWeightHeapingFirstDecimalComponent,
                        },
                        {
                            path: 'getAllMensWeightHeapingFirstDecimalTeamwise/:stateId/:stateName',
                            component: MensWeightHeapingFirstDecimalTeamwiseComponent,
                        },
                        {
                            path: 'getAllMensWeightHeapingFirstDecimalMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: MensWeightHeapingFirstDecimalMemberwiseComponent,
                        },
                        {
                            path: 'getAllMensWeightHeapingSecondDecimal',
                            component: MensWeightHeapingSecondDecimalComponent,
                        },
                        {
                            path: 'getAllMensWeightHeapingSecondDecimalTeamwise/:stateId/:stateName',
                            component: MensWeightHeapingSecondDecimalTeamwiseComponent,
                        },
                        {
                            path: 'getAllMensWeightHeapingSecondDecimalMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: MensWeightHeapingSecondDecimalMemberwiseComponent,
                        },
                        {
                            path: 'getAllMensWeight',
                            component: MensWeightComponent,
                        },
                        {
                            path: 'getAllMensWeightTeamwise/:stateId/:stateName',
                            component: MensWeightTeamwiseComponent,
                        },
                        {
                            path: 'getAllMensWeightMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: MensWeightMemberwiseComponent,
                        },
                        {
                            path: 'getAllMensHeightHeapingFirstDecimal',
                            component: MensHeightHeapingFirstDecimalComponent,
                        },
                        {
                            path: 'getAllMensHeightHeapingFirstDecimalTeamwise/:stateId/:stateName',
                            component: MensHeightHeapingFirstDecimalTeamwiseComponent,
                        },
                        {
                            path: 'getAllMensHeightHeapingFirstDecimalMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: MensHeightHeapingFirstDecimalMemberwiseComponent,
                        },
                        {
                            path: 'getAllNoFoodConsumptionOfChildFrom6To23Months',
                            component: NoFoodConsumptionOfChildFrom6To23MonthsComponent,
                        },
                        {
                            path: 'getAllNoFoodConsumptionOfChildFrom6To23MonthsTeamwise/:stateId/:stateName',
                            component: NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent,
                        },
                        {
                            path: 'getAllNoFoodConsumptionOfChildFrom6To23MonthsMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent,
                        },
                        {
                            path: 'getAllAgeAtDeathHeaping',
                            component: AgeAtDeathHeapingComponent,
                        },
                        {
                            path: 'getAllAgeAtDeathHeapingTeamwise/:stateId/:stateName',
                            component: AgeAtDeathHeapingTeamwiseComponent,
                        },
                        {
                            path: 'getAllAgeAtDeathHeapingMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: AgeAtDeathHeapingMemberwiseComponent,
                        },

                        {
                            path: 'getAllWomensWeightHeapingFirstDecimal',
                            component: WomensWeightHeapingFirstDecimalComponent,
                        },
                        {
                            path: 'getAllWomensWeightHeapingFirstDecimalTeamwise/:stateId/:stateName',
                            component: WomensWeightHeapingFirstDecimalTeamwiseComponent,
                        },
                        {
                            path: 'getAllWomensWeightHeapingFirstDecimalMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: WomensWeightHeapingFirstDecimalMemberwiseComponent,
                        },
                        {
                            path: 'getAllWomensWeightHeapingSecondDecimal',
                            component: WomensWeightHeapingSecondDecimalComponent,
                        },
                        {
                            path: 'getAllWomensWeightHeapingSecondDecimalTeamwise/:stateId/:stateName',
                            component: WomensWeightHeapingSecondDecimalTeamwiseComponent,
                        },
                        {
                            path: 'getAllWomensWeightHeapingSecondDecimalMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: WomensWeightHeapingSecondDecimalMemberwiseComponent,
                        },
                        {
                            path: 'getAllWomensHeightHeapingFirstDecimal',
                            component: WomensHeightHeapingFirstDecimalComponent,
                        },
                        {
                            path: 'getAllWomensHeightHeapingFirstDecimalTeamwise/:stateId/:stateName',
                            component: WomensHeightHeapingFirstDecimalTeamwiseComponent,
                        },
                        {
                            path: 'getAllWomensHeightHeapingFirstDecimalMemberwise/:stateId/:stateName/:teamNo/:teamName',
                            component: WomensHeightHeapingFirstDecimalMemberwiseComponent,
                        },
                        
                    ],
                },
                {path:'**',component:ErrorPageComponent}
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})



export class AppRoutingModule {
    constructor(private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
}
