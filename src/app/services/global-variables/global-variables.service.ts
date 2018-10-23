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

    public currentSelectedPeople: any;
    //People Edit Modal end

    // ================ Admin Pages =============== //
    public searchKeywoard : any = '';
    public urlFacets: any = '';
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
