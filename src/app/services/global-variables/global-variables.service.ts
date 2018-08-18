import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
    providedIn: 'root'
})
export class GlobalVariablesService {
    
    public sidebarStateChangedEvent: EventEmitter<any> = new EventEmitter();
    public windowWidthChangedEvent: EventEmitter<any> = new EventEmitter();
    
    public scrollPeopleContentToTopEvent: EventEmitter<any> = new EventEmitter();
    
    public peopleListEvent: EventEmitter<any> = new EventEmitter();

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
    
    sidebarStateChanged() {
        this.sidebarStateChangedEvent.emit();
    }
    windowWidthChanged(width:any) {
        this.windowWidthChangedEvent.emit(width);
    }
    scrollPeopleContentToTop() {
        this.scrollPeopleContentToTopEvent.emit();
    }
    peopleList(list:any) {
        this.peopleListEvent.emit(list);
    }
    
}
