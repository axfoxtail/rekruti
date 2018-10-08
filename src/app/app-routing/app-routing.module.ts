import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthSecurityService as Auth} from '../services/auth-security/auth-security.service';

import {AppFreeLayoutComponent} from '../_layout/app-free-layout/app-free-layout.component';
import {AppLayoutComponent} from '../_layout/app-layout/app-layout.component';

import {LoginComponent} from '../pages/login/login.component';
import {PeopleComponent} from '../pages/people/people/people.component';
import {PeopleFullComponent} from '../pages/people/people-full/people-full.component';
import {EmployersComponent} from '../pages/employers/employers/employers.component';
import {MyProfileComponent} from '../pages/my-profile/my-profile.component';
import {JobsComponent} from '../pages/jobs/jobs.component';
import {TasksComponent} from '../pages/tasks/tasks.component';
import {SourcingComponent} from '../pages/admin/sourcing/sourcing.component';

const routes: Routes = [
    // no layout routes
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
        data: {access: 'public', component: 'LoginComponent'},
        canActivate: [Auth]
    },

    // free-app routes goes here
    {
        path: '',
        component: AppFreeLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {access: 'public', component: 'LoginComponent'},
                canActivate: [Auth]
            },
        ]
    },

    // app routes goes here
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'people',
                component: PeopleComponent,
                data: {access: 'private', component: 'PeopleComponent'},
                canActivate: [Auth]
            },
            {
                path: 'people/:id',
                component: PeopleFullComponent,
                data: {access: 'private', component: 'PeopleFullComponent'},
                canActivate: [Auth]
            },
            {
                path: 'employers',
                component: EmployersComponent,
                data: {access: 'private', component: 'EmployersComponent'},
                canActivate: [Auth]
            },
            {
                path: 'my-profile',
                component: MyProfileComponent,
                data: {access: 'private', component: 'MyProfileComponent'},
                canActivate: [Auth]
            },
            {
                path: 'jobs',
                component: JobsComponent,
                data: {access: 'private', component: 'JobsComponent'},
                canActivate: [Auth]
            },
            {
                path: 'tasks',
                component: TasksComponent,
                data: {access: 'private', component: 'TasksComponent'},
                canActivate: [Auth]
            }
        ]
    },

    // ======== Admin Routes ========= //
    {
        path: 'admin',
        component: AppLayoutComponent,
        children: [
            {
                path: 'sourcing',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            }
        ]
    },
    // -------- admin/sourcing routes -------- //
    {
        path: 'admin/sourcing',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },{
                path: 'database-usa',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'facebook',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'full-contact-person',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'full-contact-company',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'glassdoor-company',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'glassdoor-job',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'google-maps',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'krystal',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'license',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'linkedin',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'npi',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'npi-officer',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'medicare-ambulatory',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'medicare-dialysis',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'medicare-home-health',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'medicare-hospital',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'medicare-physician',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'medicare-nursing-home',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'medicare-supplier',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'pipl',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'sovren-resume',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'us-companies-list',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            },
            {
                path: 'whitepages',
                component: SourcingComponent,
                data: {access: 'private', component: 'SourcingComponent'},
                canActivate: [Auth]
            }
        ]
    },


    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
