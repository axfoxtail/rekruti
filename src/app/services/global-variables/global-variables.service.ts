import {Injectable, EventEmitter} from '@angular/core';
import {CookieService} from 'ngx-cookie';

import {UtilsService} from '../utils/utils.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalVariablesService {

    // people start
    public sidebarStateChangedPeopleEvent: EventEmitter<any> = new EventEmitter();
    public windowWidthChangedPeopleEvent: EventEmitter<any> = new EventEmitter();
    public scrollContentToTopPeopleEvent: EventEmitter<any> = new EventEmitter();
    public peopleListEvent: EventEmitter<any> = new EventEmitter();
    public peopleListChangedEvent: EventEmitter<any> = new EventEmitter();

    private currentPagePeople: any;

    private peopleSearchConditions: any;
    private peopleSearchQuery: any;

    // people end

    // employers start
    public sidebarStateChangedEmployersEvent: EventEmitter<any> = new EventEmitter();
    public windowWidthChangedEmployersEvent: EventEmitter<any> = new EventEmitter();
    public scrollContentToTopEmployersEvent: EventEmitter<any> = new EventEmitter();
    public employersListEvent: EventEmitter<any> = new EventEmitter();
    public employersListChangedEvent: EventEmitter<any> = new EventEmitter();

    private urlFacetsEmployers: any;
    private employersRequestBody: any = {};
    private dataCheckFacetsEmployers: any = [];
    private currentPageEmployers: any;
    private hasFacetSelectedEmployers: any;
    // employers end

    // Jobs start
    public sidebarStateChangedJobsEvent: EventEmitter<any> = new EventEmitter();
    public scrollContentToTopJobsEvent: EventEmitter<any> = new EventEmitter();
    public windowWidthChangedJobsEvent: EventEmitter<any> = new EventEmitter();
    public jobsListChangedEvent: EventEmitter<any> = new EventEmitter();
    public jobsListEvent: EventEmitter<any> = new EventEmitter();
    public openJobsDetailModalEvent: EventEmitter<any> = new EventEmitter();
    public openJobsCompanyModalEvent: EventEmitter<any> = new EventEmitter();

    private hasFacetSelectedJobs: any;
    private jobsRequestBody: any = {};
    private urlFacetsJobs: any;
    private jobsSearchConditions: any;
    private currentPageJobs: any;
    private jobsSearchQuery: any;

    // Jobs end

    public openSourceModalEvent: EventEmitter<any> = new EventEmitter();
    public openDescriptionModalEvent: EventEmitter<any> = new EventEmitter();
    public openBioModalEvent: EventEmitter<any> = new EventEmitter();
    public refreshDetailDataEvent: EventEmitter<any> = new EventEmitter();

    // Companies start
    public sidebarStateChangedCompaniesEvent: EventEmitter<any> = new EventEmitter();
    public scrollContentToTopCompaniesEvent: EventEmitter<any> = new EventEmitter();
    public windowWidthChangedCompaniesEvent: EventEmitter<any> = new EventEmitter();
    public companiesListChangedEvent: EventEmitter<any> = new EventEmitter();
    public companiesListEvent: EventEmitter<any> = new EventEmitter();
    public openCompanyDetailModalEvent: EventEmitter<any> = new EventEmitter();

    private hasFacetSelectedCompanies: any;
    private companiesRequestBody: any = {};
    private urlFacetsCompanies: any;
    private companiesSearchConditions: any;
    private currentPageCompanies: any;
    private companiesSearchQuery: any;

    // Companies end

    //People Edit Modal start

    public openPeopleJobReqEditEvent: EventEmitter<any> = new EventEmitter();
    public refreshJobReqTabEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleDocumentEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleContactEmailEvent: EventEmitter<any> = new EventEmitter();
    public refreshDocumentTabEvent: EventEmitter<any> = new EventEmitter();
    public refreshContactTabEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleContactPhoneEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleContactWebLinkEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleContactAddressEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleExperienceEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleEducationEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleLicenseEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleSourceEvent: EventEmitter<any> = new EventEmitter();
    public openPeopleTabModalEvent: EventEmitter<any> = new EventEmitter();

    public openSavedSearchModalEvent: EventEmitter<any> = new EventEmitter();

    public currentSelectedPeople: any;
    //People Edit Modal end

    // ================ Admin Pages =============== //
    public searchKeywoard : any = '';
    public urlFacets: any = '';
    public searchSort: any = 'relevancy';
    public sourcingSearchEvent: EventEmitter<any> = new EventEmitter();
    public settingsSearchEvent: EventEmitter<any> = new EventEmitter();
    public openAccountModalEvent: EventEmitter<any> = new EventEmitter();
    public openClientModalEvent: EventEmitter<any> = new EventEmitter();
    public openConceptModalEvent: EventEmitter<any> = new EventEmitter();
    public openGeoMapModalEvent: EventEmitter<any> = new EventEmitter();
    public openGeoLookupMapModalEvent: EventEmitter<any> = new EventEmitter();
    public openGeoLookupJsonModalEvent: EventEmitter<any> = new EventEmitter();
    public openHelpBubbleModalEvent: EventEmitter<any> = new EventEmitter();
    public openConceptRuleModalEvent: EventEmitter<any> = new EventEmitter();
    public searchLinkToGeoEvent: EventEmitter<any> = new EventEmitter();
    public openGeoEditModalEvent: EventEmitter<any> = new EventEmitter();
    public openAttachConceptModalEvent: EventEmitter<any> = new EventEmitter();
    public searchAttachConceptEvent: EventEmitter<any> = new EventEmitter();
    // =============== ./Admin Pages ============== //

    constructor(private cookieService: CookieService, private utils: UtilsService) {
        var date = new Date();
    }

    // general start
    setCookieCurrentUser(_object: any) {
        const currentUser = {
            currentUser: {
//                account: _object.account,
                authdata: _object.data.cookie,
                accountType: _object.accountTypeId,
                personId: _object.data.clientId,
//                organizationId: _object.data.organizationId,
                accountId: _object.data.accountId,
                name: _object.data.name,
//                accountTypeName: _object.data.accountTypeName,
                accountProfile: _object.accountProfileId,
            }
        };
        this.cookieService.putObject('globals', currentUser);
    }

    getCookieCurrentUser(): any {
        return this.cookieService.getObject('globals');
    }

    removeCookieCurrentUser() {
        this.cookieService.remove('globals');
    }
    // general end

    // people start
    setSearchConditionsPeople(data: any) {
        this.peopleSearchConditions = data;
    }

    getSearchConditionsPeople() {
        return this.peopleSearchConditions;
    }

    setSearchQueryPeople(data: any) {
        this.peopleSearchQuery = data;
    }

    getSearchQueryPeople() {
        return this.peopleSearchQuery;
    }

    setCurrentPagePeople(data: any) {
        this.currentPagePeople = data;
    }

    getCurrentPagePeople() {
        return this.currentPagePeople;
    }

    sidebarStateChangedPeople() {
        this.sidebarStateChangedPeopleEvent.emit();
    }

    windowWidthChangedPeople(width: any) {
        this.windowWidthChangedPeopleEvent.emit(width);
    }

    scrollContentToTopPeople() {
        this.scrollContentToTopPeopleEvent.emit();
    }

    peopleList(list: any) {
        this.peopleListEvent.emit(list);
    }

    peopleListChanged(body: any) {
        this.peopleListChangedEvent.emit(body);
    }
    // people end

    // employers start
    setHasFacetSelectedEmployers(data: any) {
        this.hasFacetSelectedEmployers = data;
    }

    getHasFacetSelectedEmployers() {
        return this.hasFacetSelectedEmployers;
    }

    setCurrentPageEmployers(data: any) {
        this.currentPageEmployers = data;
    }

    getCurrentPageEmployers() {
        return this.currentPageEmployers;
    }

    setUrlFacetsEmployers(data: any) {
        this.urlFacetsEmployers = this.utils.urlFacets(data);
    }

    getUrlFacetsEmployers() {
        return this.urlFacetsEmployers;
    }

    setRequestBodyEmployers(keyword: any, from_: any, sort: any) {
        this.employersRequestBody = {
            keyword: keyword,
            from: from_,
            sort: sort
        };
    }

    getRequestBodyEmployers() {
        return this.employersRequestBody;
    }

    setDataCheckFacetsEmployers(data: any) {
        this.dataCheckFacetsEmployers = data;
    }

    getDataCheckFacetsEmployers() {
        return this.dataCheckFacetsEmployers;
    }

    sidebarStateChangedEmployers() {
        this.sidebarStateChangedEmployersEvent.emit();
    }

    windowWidthChangedEmployers(width: any) {
        this.windowWidthChangedEmployersEvent.emit(width);
    }

    scrollContentToTopEmployers() {
        this.scrollContentToTopEmployersEvent.emit();
    }

    employersList(list: any) {
        this.employersListEvent.emit(list);
    }

    employersListChanged() {
        this.employersListChangedEvent.emit();
    }
    // employers end

    // Jobs start ============================================================ start for jobs
    jobsList(list: any) {
        this.jobsListEvent.emit(list);
    }
    setRequestBodyJobs(keyword: any, from_: any, sort: any) {
        this.jobsRequestBody = {
            keyword: keyword,
            from: from_,
            sort: sort
        };
    }
    setUrlFacetsJobs(data: any) {
        this.urlFacetsJobs = this.utils.urlFacets(data);
    }
    sidebarStateChangedJobs() {
        this.sidebarStateChangedJobsEvent.emit();
    }
    scrollContentToTopJobs() {
        this.scrollContentToTopJobsEvent.emit();
    }
    getRequestBodyJobs() {
        return this.jobsRequestBody;
    }
    getUrlFacetsJobs() {
        return this.urlFacetsJobs;
    }
    setHasFacetSelectedJobs(data: any) {
        this.hasFacetSelectedJobs = data;
    }
    windowWidthChangedJobs(width: any) {
        this.windowWidthChangedJobsEvent.emit(width);
    }
    getSearchConditionsJobs() {
        return this.jobsSearchConditions;
    }
    jobsListChanged(body: any) {
        this.jobsListChangedEvent.emit(body);
    }
    setCurrentPageJobs(data: any) {
        this.currentPageJobs = data;
    }
    getSearchQueryJobs() {
        return this.jobsSearchQuery;
    }
    setSearchConditionsJobs(data: any) {
        this.jobsSearchConditions = data;
    }
    getCurrentPageJobs() {
        return this.currentPageJobs;
    }
    setSearchQueryJobs(data: any) {
        this.jobsSearchQuery = data;
    }
    // --------------- jobs modals part -------------- //
    showJobsDetailModal(data: any) {
        this.openJobsDetailModalEvent.emit(data);
    }
    showJobsCompanyModal(data: any) {
        this.openJobsCompanyModalEvent.emit(data);
    }
    // Jobs end ================================================================ end for jobs
    showSourceModal(data: any) {
        this.openSourceModalEvent.emit(data);
    }
    showDescriptionModal(data: any) {
        this.openDescriptionModalEvent.emit(data);
    }
    showBioModal(data: any) {
        this.openBioModalEvent.emit(data);
    }
    refreshDetailData(data: any) {
        this.refreshDetailDataEvent.emit(data);
    }
    // Companies start ============================================================ start for companies
    companiesList(list: any) {
        this.companiesListEvent.emit(list);
    }
    setRequestBodyCompanies(keyword: any, from_: any, sort: any) {
        this.companiesRequestBody = {
            keyword: keyword,
            from: from_,
            sort: sort
        };
    }
    setUrlFacetsCompanies(data: any) {
        this.urlFacetsCompanies = this.utils.urlFacets(data);
    }
    sidebarStateChangedCompanies() {
        this.sidebarStateChangedCompaniesEvent.emit();
    }
    scrollContentToTopCompanies() {
        this.scrollContentToTopCompaniesEvent.emit();
    }
    getRequestBodyCompanies() {
        return this.companiesRequestBody;
    }
    getUrlFacetsCompanies() {
        return this.urlFacetsCompanies;
    }
    setHasFacetSelectedCompanies(data: any) {
        this.hasFacetSelectedCompanies = data;
    }
    windowWidthChangedCompanies(width: any) {
        this.windowWidthChangedCompaniesEvent.emit(width);
    }
    getSearchConditionsCompanies() {
        return this.companiesSearchConditions;
    }
    companiesListChanged(body: any) {
        this.companiesListChangedEvent.emit(body);
    }
    setCurrentPageCompanies(data: any) {
        this.currentPageCompanies = data;
    }
    getSearchQueryCompanies() {
        return this.companiesSearchQuery;
    }
    setSearchConditionsCompanies(data: any) {
        this.companiesSearchConditions = data;
    }
    getCurrentPageCompanies() {
        return this.currentPageCompanies;
    }
    setSearchQueryCompanies(data: any) {
        this.companiesSearchQuery = data;
    }
    // ---------- 
    showCompanyDetailModal(data: any) {
        this.openCompanyDetailModalEvent.emit(data);
    }
    // Companies end ================================================================ end for companies

    //People Edit Modal start

    showPeopleJobReqEditModal(jobReq: any) {
        this.openPeopleJobReqEditEvent.emit(jobReq);
    }

    refreshJobReqEvent() {
        this.refreshJobReqTabEvent.emit();
    }

    showPeopleDocumentModal(data: any) {
        this.openPeopleDocumentEvent.emit(data);
    }

    showPeopleContactEmailModal(data: any) {
        this.openPeopleContactEmailEvent.emit(data);
    }

    refreshDocumentEvent() {
        this.refreshDocumentTabEvent.emit();
    }

    refreshContactEvent() {
        this.refreshContactTabEvent.emit();
    }

    showPeopleContactPhoneModal(data: any) {
        this.openPeopleContactPhoneEvent.emit(data);   
    }

    showPeopleContactWebLinkModal(data: any) {
        this.openPeopleContactWebLinkEvent.emit(data);
    }

    showPeopleContactAddressModal(data: any) {
        this.openPeopleContactAddressEvent.emit(data);
    }

    showPeopleExperienceModal(data: any) {
        this.openPeopleExperienceEvent.emit(data);
    }

    showPeopleEducationModal(data: any) {
        this.openPeopleEducationEvent.emit(data);
    }

    showPeopleLicenseModal(data: any) {
        this.openPeopleLicenseEvent.emit(data);
    }

    showPeopleSourceModal(data: any) {
        this.openPeopleSourceEvent.emit(data);
    }

    showPeopleTabModal(data: any) {
        this.openPeopleTabModalEvent.emit(data);
    }

    showSavedSearchModal() {
        this.openSavedSearchModalEvent.emit();
    }
    //People Edit Modal end

    // ================ Admin Sourcing Event ============== //
    sourcingSearch(data: any) {
        this.sourcingSearchEvent.emit(data);
    }
    settingsSearch(data: any) {
        this.settingsSearchEvent.emit(data);
    }
    showAccountModal(data: any) {
        this.openAccountModalEvent.emit(data);
    }
    showClientModal(data: any) {
        this.openClientModalEvent.emit(data);
    }
    showConceptModal(data: any) {
        this.openConceptModalEvent.emit(data);
    }
    showGeoMapModal(data: any) {
        this.openGeoMapModalEvent.emit(data);
    }
    showGeoLookupMapModal(data: any) {
        this.openGeoLookupMapModalEvent.emit(data);
    }
    showGeoLookupJsonModal(data_id: any) {
        this.openGeoLookupJsonModalEvent.emit(data_id);
    }
    showHelpBubbleModal(data: any) {
        this.openHelpBubbleModalEvent.emit(data);
    }
    showConceptRuleModal(data: any) {
        this.openConceptRuleModalEvent.emit(data);
    }
    searchLinkToGeo(data: any) {
        this.searchLinkToGeoEvent.emit(data);
    }
    showGeoEditModal(data: any) {
        this.openGeoEditModalEvent.emit(data);
    }
    showAttachConceptModal(data: any) {
        this.openAttachConceptModalEvent.emit(data);
    }
    searchAttachConcept(data: any) {
        this.searchAttachConceptEvent.emit(data);
    }
}
