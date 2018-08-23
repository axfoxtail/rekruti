import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie';

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
    
    private currentFilters:any = [];

    constructor(private cookieService:CookieService) { }
    
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
        this.currentFilters = obj;
    }
    getCurrentSearchFiltersPeople():any {
        return this.currentFilters;
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
    
}
