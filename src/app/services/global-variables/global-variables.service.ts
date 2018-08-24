import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { UtilsService } from '../utils/utils.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalVariablesService {

    //people start
    public sidebarStateChangedPeopleEvent: EventEmitter<any> = new EventEmitter();
    public windowWidthChangedPeopleEvent: EventEmitter<any> = new EventEmitter();
    public scrollContentToTopPeopleEvent: EventEmitter<any> = new EventEmitter();
    public peopleListEvent: EventEmitter<any> = new EventEmitter();
    public peopleListChangedEvent: EventEmitter<any> = new EventEmitter();
    
    private currentFiltersPeople:any = [];
    private currentPagePeople:any;
    private hasFacetSelectedPeople:any;
    private currentActiveFilterPopoverOptionsPeople:any;
    //people end
    
    //employers start
    public sidebarStateChangedEmployersEvent: EventEmitter<any> = new EventEmitter();
    public windowWidthChangedEmployersEvent: EventEmitter<any> = new EventEmitter();
    public scrollContentToTopEmployersEvent: EventEmitter<any> = new EventEmitter();
    public employersListEvent: EventEmitter<any> = new EventEmitter();
    public employersListChangedEvent: EventEmitter<any> = new EventEmitter();
    
    private urlFacetsEmployers:any;
    private employersRequestBody:any = {};
    private dataCheckFacetsEmployers:any = [];
    private currentPageEmployers:any;
    private hasFacetSelectedEmployers:any;
    //employers end

    constructor(private cookieService:CookieService, private utils:UtilsService) { }
    
    //general start
    setCookieCurrentUser(_object:any) {
        var currentUser = {
            currentUser: {
                account: _object.account,
                authdata: _object.data.cookie,
                accountType: _object.accountType,
                personId: _object.data.personProfileId,
                organizationId: _object.data.organizationId,
                accountId: _object.data.accountId,
                firstName: _object.data.firstName,
                lastName: _object.data.lastName,
                accountTypeName: _object.data.accountTypeName,
                accountProfile: _object.accountProfile,
            }
        };
        this.cookieService.putObject( 'globals', currentUser );
    }
    getCookieCurrentUser():any {
        return this.cookieService.getObject('globals');
    }
    removeCookieCurrentUser() {
        this.cookieService.remove('globals');
    }
    //general end
    
    //people start
    setCurrentActiveFilterPopoverOptionsPeople(data:any) {
        this.currentActiveFilterPopoverOptionsPeople = data;
    }
    getCurrentActiveFilterPopoverOptionsPeople() {
        return this.currentActiveFilterPopoverOptionsPeople;
    }
    setHasFacetSelectedPeople(data:any) {
        this.hasFacetSelectedPeople = data;
    }
    getHasFacetSelectedPeople() {
        return this.hasFacetSelectedPeople;
    }
    setCurrentPagePeople(data:any) {
        this.currentPagePeople = data;
    }
    getCurrentPagePeople() {
        return this.currentPagePeople;
    }
    setCurrentSearchFiltersPeople(obj:any) {
        this.currentFiltersPeople = obj;
    }
    getCurrentSearchFiltersPeople():any {
        return this.currentFiltersPeople;
    }
    sidebarStateChangedPeople() {
        this.sidebarStateChangedPeopleEvent.emit();
    }
    windowWidthChangedPeople(width:any) {
        this.windowWidthChangedPeopleEvent.emit(width);
    }
    scrollContentToTopPeople() {
        this.scrollContentToTopPeopleEvent.emit();
    }
    peopleList(list:any) {
        this.peopleListEvent.emit(list);
    }
    peopleListChanged() {
        this.peopleListChangedEvent.emit();
    }
    //people end
    
    //employers start
    setHasFacetSelectedEmployers(data:any) {
        this.hasFacetSelectedEmployers = data;
    }
    getHasFacetSelectedEmployers() {
        return this.hasFacetSelectedEmployers;
    }
    setCurrentPageEmployers(data:any) {
        this.currentPageEmployers = data;
    }
    getCurrentPageEmployers() {
        return this.currentPageEmployers;
    }
    setUrlFacetsEmployers(data:any) {
        this.urlFacetsEmployers = this.utils.urlFacets(data);
    }
    getUrlFacetsEmployers() {
        return this.urlFacetsEmployers;
    }
    setRequestBodyEmployers(keyword:any, from_:any, sort:any) {
        this.employersRequestBody = {
            keyword: keyword,
            from: from_,
            sort: sort
        };
    }
    getRequestBodyEmployers() {
        return this.employersRequestBody;
    }
    setDataCheckFacetsEmployers(data:any) {
        this.dataCheckFacetsEmployers = data;
    }
    getDataCheckFacetsEmployers() {
        return this.dataCheckFacetsEmployers;
    }
    sidebarStateChangedEmployers() {
        this.sidebarStateChangedEmployersEvent.emit();
    }
    windowWidthChangedEmployers(width:any) {
        this.windowWidthChangedEmployersEvent.emit(width);
    }
    scrollContentToTopEmployers() {
        this.scrollContentToTopEmployersEvent.emit();
    }
    employersList(list:any) {
        this.employersListEvent.emit(list);
    }
    employersListChanged() {
        this.employersListChangedEvent.emit();
    }
    //employers end
    
}
