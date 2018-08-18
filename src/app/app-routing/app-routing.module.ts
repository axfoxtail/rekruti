import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthSecurityService as Auth } from '../services/auth-security/auth-security.service';

import { AppFreeLayoutComponent } from '../_layout/app-free-layout/app-free-layout.component';
import { AppLayoutComponent } from '../_layout/app-layout/app-layout.component';

import { LoginComponent } from '../pages/login/login.component'; 
import { PeopleComponent } from '../pages/people/people/people.component';
import { EmployersComponent } from '../pages/employers/employers.component';
import { MyProfileComponent } from '../pages/my-profile/my-profile.component';
import { JobsComponent } from '../pages/jobs/jobs.component';
import { TasksComponent } from '../pages/tasks/tasks.component';

const routes: Routes = [ 
    //no layout routes
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full', 
        data: {access:'public', component:'LoginComponent'}, 
        canActivate: [Auth] 
    },
    
    // Free-app routes goes here
    { 
        path: '',
        component: AppFreeLayoutComponent, 
        children: [
            { 
                path: 'login', 
                component: LoginComponent, 
                data: {access:'public', component:'LoginComponent'}, 
                canActivate: [Auth] 
            },
        ]
    },
    
    //App routes goes here 
    { 
        path: '', 
        component: AppLayoutComponent,
        children: [
            { 
                path: 'people',  
                component: PeopleComponent, 
                data: {access:'private', component:'PeopleComponent'}, 
                canActivate: [Auth]
            },
            { 
                path: 'employers',  
                component: EmployersComponent, 
                data: {access:'private', component:'EmployersComponent'}, 
                canActivate: [Auth]
            },
            { 
                path: 'my-profile',  
                component: MyProfileComponent, 
                data: {access:'private', component:'MyProfileComponent'}, 
                canActivate: [Auth]
            },
            { 
                path: 'jobs',  
                component: JobsComponent, 
                data: {access:'private', component:'JobsComponent'}, 
                canActivate: [Auth]
            },
            { 
                path: 'tasks',  
                component: TasksComponent, 
                data: {access:'private', component:'TasksComponent'}, 
                canActivate: [Auth]
            }
        ]
    },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
