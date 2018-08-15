import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { GlobalVariablesService } from '../global-variables/global-variables.service';

@Injectable({
    providedIn: 'root'
})
export class AuthSecurityService implements CanActivate {

    constructor(private globalVar:GlobalVariablesService, private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if(this.globalVar.getCookieCurrentUser() === undefined) {
            this.globalVar.removeCookieCurrentUser();
            if(route.data.component !== 'LoginComponent') 
                this.router.navigate(['/login']);
            return true;
        } else {
            switch(route.data.component) {
                case 'LoginComponent':
                    this.router.navigate(['/people']);
                    return true;
                case 'TasksComponent':
                    if(this.globalVar.getCookieCurrentUser().currentUser.accountType !== 4)
                        return false;
                    return true;
                default:
                    return true;
            }
        }
        
        
    }
}
