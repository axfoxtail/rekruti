import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

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
import { CKEditorModule } from 'ng2-ckeditor';


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
import { TabNoteComponent } from './pages/common/tab-note/tab-note.component';
import { TabDocumentComponent } from './pages/common/tab-document/tab-document.component';
import { PeopleEditModalComponent } from './pages/people/people-edit-modal/people-edit-modal.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { PeopleFullComponent } from './pages/people/people-full/people-full.component';
import { SourcingComponent } from './pages/admin/sourcing/sourcing.component';
import { DatabaseUsaComponent } from './pages/admin/sourcing/database-usa/database-usa.component';
import { FacebookComponent } from './pages/admin/sourcing/facebook/facebook.component';
import { FullContactPersonComponent } from './pages/admin/sourcing/full-contact-person/full-contact-person.component';
import { FullContactCompanyComponent } from './pages/admin/sourcing/full-contact-company/full-contact-company.component';
import { GlassdoorCompanyComponent } from './pages/admin/sourcing/glassdoor-company/glassdoor-company.component';
import { GlassdoorJobComponent } from './pages/admin/sourcing/glassdoor-job/glassdoor-job.component';
import { GoogleMapsComponent } from './pages/admin/sourcing/google-maps/google-maps.component';
import { KrystalComponent } from './pages/admin/sourcing/krystal/krystal.component';
import { LicenseComponent } from './pages/admin/sourcing/license/license.component';
import { LinkedinComponent } from './pages/admin/sourcing/linkedin/linkedin.component';
import { NpiComponent } from './pages/admin/sourcing/npi/npi.component';
import { NpiOfficerComponent } from './pages/admin/sourcing/npi-officer/npi-officer.component';
import { MedicareAmbulatoryComponent } from './pages/admin/sourcing/medicare-ambulatory/medicare-ambulatory.component';
import { MedicareDialysisComponent } from './pages/admin/sourcing/medicare-dialysis/medicare-dialysis.component';
import { MedicareHomeHealthComponent } from './pages/admin/sourcing/medicare-home-health/medicare-home-health.component';
import { MedicareHospitalComponent } from './pages/admin/sourcing/medicare-hospital/medicare-hospital.component';
import { MedicarePhysicianComponent } from './pages/admin/sourcing/medicare-physician/medicare-physician.component';
import { MedicareNursingHomeComponent } from './pages/admin/sourcing/medicare-nursing-home/medicare-nursing-home.component';
import { MedicareSupplierComponent } from './pages/admin/sourcing/medicare-supplier/medicare-supplier.component';
import { PiplComponent } from './pages/admin/sourcing/pipl/pipl.component';
import { SovrenResumeComponent } from './pages/admin/sourcing/sovren-resume/sovren-resume.component';
import { UsCompaniesListComponent } from './pages/admin/sourcing/us-companies-list/us-companies-list.component';
import { WhitepagesComponent } from './pages/admin/sourcing/whitepages/whitepages.component';
import { SourcingSidebarComponent } from './pages/admin/sourcing/common/sourcing-sidebar/sourcing-sidebar.component';
import { SourcingSearchBarComponent } from './pages/admin/sourcing/common/sourcing-search-bar/sourcing-search-bar.component';
import { SourcingResultsListComponent } from './pages/admin/sourcing/common/sourcing-results-list/sourcing-results-list.component';
import { SourcingViewModalComponent } from './pages/admin/sourcing/common/sourcing-view-modal/sourcing-view-modal.component';
import { SourcingMapsModalComponent } from './pages/admin/sourcing/common/sourcing-maps-modal/sourcing-maps-modal.component';


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
        TabJobReqComponent,
        TabNoteComponent,
        TabDocumentComponent,
        PeopleEditModalComponent,
        PeopleFullComponent,
        SourcingComponent,
        DatabaseUsaComponent,
        FacebookComponent,
        FullContactPersonComponent,
        FullContactCompanyComponent,
        GlassdoorCompanyComponent,
        GlassdoorJobComponent,
        GoogleMapsComponent,
        KrystalComponent,
        LicenseComponent,
        LinkedinComponent,
        NpiComponent,
        NpiOfficerComponent,
        MedicareAmbulatoryComponent,
        MedicareDialysisComponent,
        MedicareHomeHealthComponent,
        MedicareHospitalComponent,
        MedicarePhysicianComponent,
        MedicareNursingHomeComponent,
        MedicareSupplierComponent,
        PiplComponent,
        SovrenResumeComponent,
        UsCompaniesListComponent,
        WhitepagesComponent,
        SourcingSidebarComponent,
        SourcingSearchBarComponent,
        SourcingResultsListComponent,
        SourcingViewModalComponent,
        SourcingMapsModalComponent
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
        NgbModule,
        CKEditorModule,
        FileUploadModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ' //Google API key for maps
        })
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
