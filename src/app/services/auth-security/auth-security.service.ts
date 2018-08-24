import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { GlobalVariablesService } from '../global-variables/global-variables.service';

@Injectable({
    providedIn: 'root'
})
export class AuthSecurityService implements CanActivate {

    constructor(private globalVar:GlobalVariablesService, private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        var currentUser = this.globalVar.getCookieCurrentUser();
        
        if(currentUser === undefined) {
            this.globalVar.removeCookieCurrentUser();
            if(route.data.component !== 'LoginComponent') 
                this.router.navigate(['/login']);
            return true;
        } else {
            switch(route.data.component) {
                case 'LoginComponent':
                    this.router.navigate(['/people']);
                    return true;
                case 'MyProfileComponent':
                    if(currentUser.currentUser.accountType === 5)
                        return true;
                    return false;
                case 'TasksComponent':
                    if(currentUser.currentUser.accountProfile === 4 || currentUser.currentUser.accountType === 5) 
                        return true; 
                    return false;
                default:
                    return true;
            }
        }
        
        
    }
}
