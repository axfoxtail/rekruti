import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgxErrorsModule} from '@ultimate/ngxerrors';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ToastrModule} from 'ngx-toastr';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CookieModule} from 'ngx-cookie';
import {SidebarModule} from 'ng-sidebar';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxTypeaheadModule} from 'ngx-typeahead';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';

import {AppFreeLayoutComponent} from './_layout/app-free-layout/app-free-layout.component';
import {AppFreeLayoutHeaderComponent} from './_layout/app-free-layout-header/app-free-layout-header.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {AppLayoutHeaderComponent} from './_layout/app-layout-header/app-layout-header.component';

import {LoginComponent} from './pages/login/login.component';
import {PeopleComponent} from './pages/people/people/people.component';
import {PeopleSidebarComponent} from './pages/people/people-sidebar/people-sidebar.component';
import {PeopleListComponent} from './pages/people/people-list/people-list.component';
import {PeopleDetailsModalComponent} from './pages/people/people-details-modal/people-details-modal.component';
import {PeopleSearchBarComponent} from './pages/people/people-search-bar/people-search-bar.component';
import {PeoplePopoverComponent} from './pages/people/people-popover/people-popover.component';
import {EmployersComponent} from './pages/employers/employers/employers.component';
import {EmployersDetailsModalComponent} from './pages/employers/employers-details-modal/employers-details-modal.component';
import {EmployersListComponent} from './pages/employers/employers-list/employers-list.component';
import {EmployersSearchBarComponent} from './pages/employers/employers-search-bar/employers-search-bar.component';
import {EmployersSidebarComponent} from './pages/employers/employers-sidebar/employers-sidebar.component';
import {MyProfileComponent} from './pages/my-profile/my-profile.component';
import {JobsComponent} from './pages/jobs/jobs.component';
import {TasksComponent} from './pages/tasks/tasks.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpService} from './services/http/http.service';
import {RekrutiApiService} from './services/api/api.service';
import {ValidationService} from './services/validation/validation.service';
import {GlobalVariablesService} from './services/global-variables/global-variables.service';
import {AuthSecurityService} from './services/auth-security/auth-security.service';
import {UtilsService} from './services/utils/utils.service';
import {SearchService} from './services/search/search.service';
import {NotificationsService} from './services/notifications/notifications.service';
import { DetailModalHeaderComponent } from './pages/common/detail-modal-header/detail-modal-header.component';
import { DetailModalContentComponent } from './pages/common/detail-modal-content/detail-modal-content.component';
import { TabProfileComponent } from './pages/common/tab-profile/tab-profile.component';
import { TabContactComponent } from './pages/common/tab-contact/tab-contact.component';
import { TabJobReqComponent } from './pages/common/tab-job-req/tab-job-req.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AppFreeLayoutComponent,
        AppFreeLayoutHeaderComponent,
        AppLayoutComponent,
        PeopleComponent,
        AppLayoutHeaderComponent,
        EmployersComponent,
        MyProfileComponent,
        JobsComponent,
        TasksComponent,
        PeopleSidebarComponent,
        PeopleListComponent,
        PeopleDetailsModalComponent,
        PeopleSearchBarComponent,
        EmployersDetailsModalComponent,
        EmployersListComponent,
        EmployersSearchBarComponent,
        EmployersSidebarComponent,
        PeoplePopoverComponent,
        DetailModalHeaderComponent,
        DetailModalContentComponent,
        TabProfileComponent,
        TabContactComponent,
        TabJobReqComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgxErrorsModule,
        NgxSpinnerModule,
        ToastrModule.forRoot(),
        AngularFontAwesomeModule,
        CookieModule.forRoot(),
        SidebarModule.forRoot(),
        NgxPaginationModule,
        NgxTypeaheadModule,
        PopoverModule.forRoot(),
        NgbModule
    ],
    providers: [
        HttpService,
        RekrutiApiService,
        ValidationService,
        GlobalVariablesService,
        AuthSecurityService,
        UtilsService,
        SearchService,
        NotificationsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
