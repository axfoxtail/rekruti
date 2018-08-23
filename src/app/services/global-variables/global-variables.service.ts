import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { UtilsService } from '../utils/utils.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalVariablesService {
    
    public sidebarStateChangedEvent: EventEmitter<any> = new EventEmitter();
    public employersSidebarStateChangedEvent: EventEmitter<any> = new EventEmitter();
    public windowWidthChangedEvent: EventEmitter<any> = new EventEmitter();
    public employersWindowWidthChangedEvent: EventEmitter<any> = new EventEmitter();
    
    public scrollPeopleContentToTopEvent: EventEmitter<any> = new EventEmitter();
    public scrollEmployersContentToTopEvent: EventEmitter<any> = new EventEmitter();
    
    public peopleListEvent: EventEmitter<any> = new EventEmitter();
    public peopleListChangedEvent: EventEmitter<any> = new EventEmitter();
    public employersListEvent: EventEmitter<any> = new EventEmitter();
    public employersListChangedEvent: EventEmitter<any> = new EventEmitter();
    
    public employersShowResetButtonEvent: EventEmitter<any> = new EventEmitter();
    
    private currentFiltersPeople:any = [];
    private currentFiltersEmployers:any = [];
    
    private urlFacets:any;
    private employersRequestBody:any = {};
    private dataCheckFacets:any = [];
    private showResetButtonVar:any;

    constructor(private cookieService:CookieService, private utils:UtilsService) { }
    
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
    setCurrentSearchFiltersPeople(obj:any) {
        this.currentFiltersPeople = obj;
    }
    getCurrentSearchFiltersPeople():any {
        return this.currentFiltersPeople;
    }
    setCurrentSearchFiltersEmployers(obj:any) {
        this.currentFiltersEmployers = obj;
    }
    getCurrentSearchFiltersEmployers():any {
        return this.currentFiltersEmployers;
    }
    setUrlFacets(data:any) {
        this.urlFacets = this.utils.urlFacets(data);
    }
    getUrlFacets() {
        return this.urlFacets;
    }
    setEmployersRequestBody(keyword:any, from_:any, sort:any) {
        this.employersRequestBody = {
            keyword: keyword,
            from: from_,
            sort: sort
        };
    }
    getEmployersRequestBody() {
        return this.employersRequestBody;
    }
    setDataCheckFacets(data:any) {
        this.dataCheckFacets = data;
    }
    getDataCheckFacets() {
        return this.dataCheckFacets;
    }
    setShowResetButtonVar(data:any) {
        this.employersShowResetButton(data);
        this.showResetButtonVar = data;
    }
    getShowResetButtonVar() {
        return this.showResetButtonVar;
    }
    
    employersShowResetButton(data:any) {
        this.employersShowResetButtonEvent.emit(data);
    }
    employersSidebarStateChanged() {
        this.employersSidebarStateChangedEvent.emit();
    }
    sidebarStateChanged() {
        this.sidebarStateChangedEvent.emit();
    }
    windowWidthChanged(width:any) {
        this.windowWidthChangedEvent.emit(width);
    }
    employersWindowWidthChanged(width:any) {
        this.employersWindowWidthChangedEvent.emit(width);
    }
    scrollPeopleContentToTop() {
        this.scrollPeopleContentToTopEvent.emit();
    }
    scrollEmployersContentToTop() {
        this.scrollEmployersContentToTopEvent.emit();
    }
    peopleList(list:any) {
        this.peopleListEvent.emit(list);
    }
    employersList(list:any) {
        this.employersListEvent.emit(list);
    }
    peopleListChanged() {
        this.peopleListChangedEvent.emit();
    }
    employersListChanged() {
        this.employersListChangedEvent.emit();
    }
}
