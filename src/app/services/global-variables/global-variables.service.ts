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
    public refreshDocumentTabEvent: EventEmitter<any> = new EventEmitter();

    public currentSelectedPeople: any;
    //People Edit Modal end

    constructor(private cookieService: CookieService, private utils: UtilsService) {
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

    refreshDocumentEvent() {
        this.refreshDocumentTabEvent.emit();
    }

    //People Edit Modal end

}
