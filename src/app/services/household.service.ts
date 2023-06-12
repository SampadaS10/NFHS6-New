import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HouseholdService {
    constructor(private http: HttpClient) { }

    private baseUrl: string = 'http://localhost:8080/nfhs6';
    public indicators: string | undefined;

    getTestData(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getTestData');
    }
    getAllMenVisit1554Visits(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getAllMenVisit1554Visits');
    }

    
    getAllEligibleMenResponseRate(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllEligibleMenResponseRate'
        );
    }

    getAllEligibleMenResponseRateTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllEligibleMenResponseRateTeamwise/' + stateId
        );
    }

    getAllEligibleMenResponseRateMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllEligibleMenResponseRateMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllAgeDisplacementWomenLowerLimit(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllAgeDisplacementWomenLowerLimit'
        );
    }
    getAllAgeDisplacementWomenLowerLimitTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeDisplacementWomenLowerLimitTeamwise/' +
            stateId
        );
    }
    getAllAgeDisplacementWomenLowerLimitMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeDisplacementWomenLowerLimitMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    getAllAgeDisplacementWomenUpperLimit(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllAgeDisplacementWomenUpperLimit'
        );
    }
    getAllAgeDisplacementWomenUpperLimitTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeDisplacementWomenUpperLimitTeamwise/' +
            stateId
        );
    }
    getAllAgeDisplacementWomenUpperLimitMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeDisplacementWomenUpperLimitMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    getAllAgeDisplacementMenLowerLimit(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllAgeDisplacementMenLowerLimit'
        );
    }

    getAllAgeDisplacementMenLowerLimitTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeDisplacementMenLowerLimitTeamwise/' +
            stateId
        );
    }

    getAllAgeDisplacementMenLowerLimitMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeDisplacementMenLowerLimitMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    getAllAgeDisplacementMenUpperLimit(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllAgeDisplacementMenUpperLimit'
        );
    }
    getAllAgeDisplacementMenUpperLimitTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeDisplacementMenUpperLimitTeamwise/' +
            stateId
        );
    }
    getAllAgeDisplacementMenUpperLimitMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeDisplacementMenUpperLimitMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllMenVisit1549Visits(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getAllMenVisit1554Visits');
    }

    getAllMenVisit1549VisitsTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMenVisit1554VisitsTeamwise/' + stateId
        );
    }

    getAllMenVisit1549VisitsMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllMenVisit1554VisitsMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllVisitHh(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getAllVisitHh');
    }
    getAllVisitHhTeamwise(stateId: string | null): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllVisitHhTeamwise/' + stateId
        );
    }

    getAllVisitHhMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllVisitHhMemberwise/' + stateId + '/' + teamNo
        );
    }
    getAllEligibleWomenPerHh(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getAllEligibleWomenPerHh');
    }

    getAllEligibleWomenPerHhTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllEligibleWomenPerHhTeamwise/' + stateId
        );
    }
    getAllEligibleWomenPerHhMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllEligibleWomenPerHhMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllEligibleMenPerHh(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getAllEligibleMenPerHh');
    }
    getAllEligibleMenPerHhMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllEligibleMenPerHhMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    getAllEligibleMenPerHhTeamwise(stateId: string | null): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllEligibleMenPerHhTeamwise/' + stateId
        );
    }

    getAllBirthDisplacement(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getAllBirthDisplacement');
    }
    getAllBirthDisplacementTeamwise(stateId: string | null): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllBirthDisplacementTeamwise/' + stateId
        );
    }

    getAllBirthDisplacementMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllBirthDisplacementMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    getAllWomenVisit1549Visits(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getAllWomenVisit1549Visits');
    }

    getAllWomenVisit1549VisitsTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomenVisit1549VisitsTeamwise/' + stateId
        );
    }

    getAllWomenVisit1549VisitsMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllWomenVisit1549VisitsMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllEligibleWomenResponseRate(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllEligibleWomenResponseRate'
        );
    }
    // /getAllEligibleWomenResponseRateTeamwise/{stateId}

    getAllEligibleWomenResponseRateTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllEligibleWomenResponseRateTeamwise/' + stateId
        );
    }

    getAllEligibleWomenResponseRateMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllEligibleWomenResponseRateMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllHhCompletionRate(): Observable<any[]> {
        return this.http.get<any>(this.baseUrl + '/getAllHhCompletionRate');
    }
    getAllHhCompletionRateTeamwise(stateId: string | null): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllHhCompletionRateTeamwise/' + stateId
        );
    }
    getAllHhCompletionRateMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllHhCompletionRateMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllHouseholdRelationsModules(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllHouseholdRelationsModules'
        );
    }

    getAllHouseholdRelationsModulesTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllHouseholdRelationsModulesTeamwise/' + stateId
        );
    }

    getAllHouseholdRelationsModulesMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllHouseholdRelationsModulesMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllContraceptivePrevalenceRate(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllContraceptivePrevalenceRate'
        );
    }

    getAllContraceptivePrevalenceRateTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllContraceptivePrevalenceRateTeamwise/' +
            stateId
        );
    }

    getAllContraceptivePrevalenceRateMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllContraceptivePrevalenceRateMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllVaccinationHealthCards(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllVaccinationHealthCards'
        );
    }

    getAllVaccinationHealthCardsTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllVaccinationHealthCardsTeamwise/' + stateId
        );
    }

    getAllVaccinationHealthCardsMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllVaccinationHealthCardsMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    changeValue(indicators: string) {
        this.indicators = indicators;

        console.log("button clicked");
        // console.log(this.indicators);

    }

    changedValue() {
        console.log("data recieved by sidebar");
        return this.indicators;
    }


    // roshan workspace

    getAllSexRatioOfChildren(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllSexRatioOfChildren'
        );
    }
    
    getAllSexRatioOfChildrenTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllSexRatioOfChildrenTeamwise/' + stateId
        );
    }
    
    getAllSexRatioOfChildrenMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllSexRatioOfChildrenMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    
    getAllWomensHeight(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensHeight'
        );
    }
    
    getAllWomensHeightTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensHeightTeamwise/' + stateId
        );
    }
    
    getAllWomensHeightMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllWomensHeightMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    getAllWomensWeight(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensWeight'
        );
    }
    
    getAllWomensWeightTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensWeightTeamwise/' + stateId
        );
    }
    
    getAllWomensWeightMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllWomensWeightMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    
    getAllBirthWeightHealthcard(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllBirthWeightHealthCard'
        );
    }
    
    getAllBirthWeightHealthcardTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
                '/getAllBirthWeightHealthcardTeamwise/' +
                stateId
        );
    }
    
    getAllBirthWeightHealthcardMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
                '/getAllBirthWeightHealthcardMemberwise/' +
                stateId +
                '/' +
                teamNo
        );
    }
    
    getAllInterviewStartTime(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllInterviewStartTime'
        );
    }
    
    getAllInterviewStartTimeTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllInterviewStartTimeTeamwise/' + stateId
        );
    }
    
    getAllInterviewStartTimeMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllInterviewStartTimeMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    
    
    
    
    getAllMensHeight(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensHeight'
        );
    }
    
    getAllMensHeightTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensHeightTeamwise/' + stateId
        );
    }
    
    getAllMensHeightMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllMensHeightMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    // sampada code 


    getAllChildrensHeight(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildrensHeight'
        );
    }
    getAllChildrensHeightTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildrensHeightTeamwise/' + stateId
        );
    }

    getAllChildrensHeightMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllChildrensHeightMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllChildrensWeight(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildrensWeight'
        );
    }
    getAllChildrensWeightTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildrensWeightTeamwise/' + stateId
        );
    }

    getAllChildrensWeightMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllChildrensWeightMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllChildrensWeightHeapingFirstDecimal(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildrensWeightHeapingFirstDecimal'
        );
    }
    getAllChildrensWeightHeapingFirstDecimalTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildrensWeightHeapingFirstDecimalTeamwise/' + stateId
        );
    }

    getAllChildrensWeightHeapingFirstDecimalMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllChildrensWeightHeapingFirstDecimalMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllChildrensWeightHeapingSecondDecimal(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildrensWeightHeapingSecondDecimal'
        );
    }
    getAllChildrensWeightHeapingSecondDecimalTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildrensWeightHeapingSecondDecimalTeamwise/' + stateId
        );
    }

    getAllChildrensWeightHeapingSecondDecimalMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllChildrensWeightHeapingSecondDecimalMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllChildMortality(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildMortality'
        );
    }
    getAllChildMortalityTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllChildMortalityTeamwise/' + stateId
        );
    }

    getAllChildMortalityMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllChildMortalityMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllMensWeightHeapingFirstDecimal(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensWeightHeapingFirstDecimal'
        );
    }
    getAllMensWeightHeapingFirstDecimalTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensWeightHeapingFirstDecimalTeamwise/' + stateId
        );
    }

    getAllMensWeightHeapingFirstDecimalMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllMensWeightHeapingFirstDecimalMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    
    getAllMensWeightHeapingSecondDecimal(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensWeightHeapingSecondDecimal'
        );
    }
    getAllMensWeightHeapingSecondDecimalTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensWeightHeapingSecondDecimalTeamwise/' + stateId
        );
    }

    getAllMensWeightHeapingSecondDecimalMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllMensWeightHeapingSecondDecimalMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllMensWeight(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensWeight'
        );
    }
    getAllMensWeightTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensWeightTeamwise/' + stateId
        );
    }

    getAllMensWeightMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllMensWeightMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    getAllMensHeightHeapingFirstDecimal(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensHeightHeapingFirstDecimal'
        );
    }
    getAllMensHeightHeapingFirstDecimalTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllMensHeightHeapingFirstDecimalTeamwise/' + stateId
        );
    }

    getAllMensHeightHeapingFirstDecimalMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllMensHeightHeapingFirstDecimalMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }
    getAllNoFoodConsumptionOfChildFrom6To23Months(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllNoFoodConsumptionOfChildFrom6To23Months'
        );
    }
    
    getAllNoFoodConsumptionOfChildFrom6To23MonthsTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllNoFoodConsumptionOfChildFrom6To23MonthsTeamwise/' + stateId
        );
    }
    
    getAllNoFoodConsumptionOfChildFrom6To23MonthsMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllNoFoodConsumptionOfChildFrom6To23MonthsMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }


    getAllAgeAtDeathHeaping(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllAgeAtDeathHeaping'
        );
    }
    
    getAllAgeAtDeathHeapingTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllAgeAtDeathHeapingTeamwise/' + stateId
        );
    }
    
    getAllAgeAtDeathHeapingMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllAgeAtDeathHeapingMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }


    getAllWomensWeightHeapingFirstDecimal(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensWeightHeapingFirstDecimal'
        );
    }
    getAllWomensWeightHeapingFirstDecimalTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensWeightHeapingFirstDecimalTeamwise/' + stateId
        );
    }

    getAllWomensWeightHeapingFirstDecimalMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllWomensWeightHeapingFirstDecimalMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllWomensWeightHeapingSecondDecimal(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensWeightHeapingSecondDecimal'
        );
    }
    getAllWomensWeightHeapingSecondDecimalTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensWeightHeapingSecondDecimalTeamwise/' + stateId
        );
    }

    getAllWomensWeightHeapingSecondDecimalMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllWomensWeightHeapingSecondDecimalMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

    getAllWomensHeightHeapingFirstDecimal(): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensHeightHeapingFirstDecimal'
        );
    }
    getAllWomensHeightHeapingFirstDecimalTeamwise(
        stateId: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl + '/getAllWomensHeightHeapingFirstDecimalTeamwise/' + stateId
        );
    }

    getAllWomensHeightHeapingFirstDecimalMemberwise(
        stateId: string | null,
        teamNo: string | null
    ): Observable<any[]> {
        return this.http.get<any>(
            this.baseUrl +
            '/getAllWomensHeightHeapingFirstDecimalMemberwise/' +
            stateId +
            '/' +
            teamNo
        );
    }

}
