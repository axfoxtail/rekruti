import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../services/api/api.service';

import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';

declare var $: any;

@Component({
    selector: 'app-app-layout-header',
    templateUrl: './app-layout-header.component.html',
    styleUrls: ['./app-layout-header.component.css']
})
export class AppLayoutHeaderComponent implements OnInit {

    activeMenuItem: string;
    currentUser: any;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private globalVar: GlobalVariablesService,
                private api: RekrutiApiService,
                private spinner: NgxSpinnerService) {

        this.checkActiveComponent(this.activatedRoute.children[0].data['_value'].component);

        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .pairwise()
            .subscribe((event: any[]) => {
                this.checkActiveComponent(this.activatedRoute.children[0].data['_value'].component);
            });
    }

    ngOnInit() {
        this.currentUser = this.globalVar.getCookieCurrentUser().currentUser;
    }

    checkActiveComponent(component: any) {
        switch (component) {
            case 'PeopleComponent':
                this.activeMenuItem = 'people-menu-item';
                break;
            case 'EmployersComponent':
                this.activeMenuItem = 'employers-menu-item';
                break;
            case 'MyProfileComponent':
                this.activeMenuItem = 'my-profile-menu-item';
                break;
            case 'JobsComponent':
                this.activeMenuItem = 'jobs-menu-item';
                break;
            case 'CompaniesComponent':
                this.activeMenuItem = 'company-menu-item';
                break;
            case 'TasksComponent':
                this.activeMenuItem = 'tasks-menu-item';
                break;
            default:
                this.activeMenuItem = '';
        }
    }

    navigateToNavBarPage(menuItemId: string, link: string) {
        $('.modal').modal('hide');
        $('.popover').popover('hide');
        this.activeMenuItem = menuItemId;
        this.router.navigate([link]);
    }

    logout() {
        this.spinner.show();
        this.api.account_wLogout().then(reply => {
            this.globalVar.removeCookieCurrentUser();
            this.router.navigate(['/login']);
            this.spinner.hide();
        });
    }
}
