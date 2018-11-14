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
import { OrderModule } from 'ngx-order-pipe';


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
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { AccountComponent } from './pages/admin/settings/account/account.component';
import { ClientComponent } from './pages/admin/settings/client/client.component';
import { ConceptLookupComponent } from './pages/admin/settings/concept-lookup/concept-lookup.component';
import { ConceptComponent } from './pages/admin/settings/concept/concept.component';
import { GeoLookupComponent } from './pages/admin/settings/geo-lookup/geo-lookup.component';
import { GeoComponent } from './pages/admin/settings/geo/geo.component';
import { HelpBubbleComponent } from './pages/admin/settings/help-bubble/help-bubble.component';
import { SettingsSidebarComponent } from './pages/admin/settings/common/settings-sidebar/settings-sidebar.component';
import { SettingsResultsListComponent } from './pages/admin/settings/common/settings-results-list/settings-results-list.component';
import { SettingsSearchBarComponent } from './pages/admin/settings/common/settings-search-bar/settings-search-bar.component';
import { SettingsAccountModalComponent } from './pages/admin/settings/account/settings-account-modal/settings-account-modal.component';
import { SettingsClientModalComponent } from './pages/admin/settings/client/settings-client-modal/settings-client-modal.component';
import { SettingsConceptModalComponent } from './pages/admin/settings/concept/settings-concept-modal/settings-concept-modal.component';
import { SettingsGeoMapModalComponent } from './pages/admin/settings/geo/settings-geo-map-modal/settings-geo-map-modal.component';
import { SettingsGeoLookupMapModalComponent } from './pages/admin/settings/geo-lookup/settings-geo-lookup-map-modal/settings-geo-lookup-map-modal.component';
import { SettingsGeoLookupJsonModalComponent } from './pages/admin/settings/geo-lookup/settings-geo-lookup-json-modal/settings-geo-lookup-json-modal.component';
import { SettingsHelpBubbleModalComponent } from './pages/admin/settings/help-bubble/settings-help-bubble-modal/settings-help-bubble-modal.component';
import { ClientDetailComponent } from './pages/admin/settings/client/client-detail/client-detail.component';
import { ConceptDetailComponent } from './pages/admin/settings/concept/concept-detail/concept-detail.component';
import { GeoDetailComponent } from './pages/admin/settings/geo/geo-detail/geo-detail.component';
import { TabClientProfileComponent } from './pages/admin/settings/client/client-detail/tab-client-profile/tab-client-profile.component';
import { TabClientAccountsComponent } from './pages/admin/settings/client/client-detail/tab-client-accounts/tab-client-accounts.component';
import { TabClientBusinessComponent } from './pages/admin/settings/client/client-detail/tab-client-business/tab-client-business.component';
import { TabClientTemplatesComponent } from './pages/admin/settings/client/client-detail/tab-client-templates/tab-client-templates.component';
import { LeftContentBarComponent } from './pages/admin/settings/client/client-detail/left-content-bar/left-content-bar.component';
import { RightContentBarComponent } from './pages/admin/settings/client/client-detail/right-content-bar/right-content-bar.component';
import { ConceptLeftContentBarComponent } from './pages/admin/settings/concept/concept-detail/concept-left-content-bar/concept-left-content-bar.component';
import { ConceptRightContentBarComponent } from './pages/admin/settings/concept/concept-detail/concept-right-content-bar/concept-right-content-bar.component';
import { TabConceptDescriptionComponent } from './pages/admin/settings/concept/concept-detail/concept-left-content-bar/tab-concept-description/tab-concept-description.component';
import { TabConceptSemanticComponent } from './pages/admin/settings/concept/concept-detail/concept-left-content-bar/tab-concept-semantic/tab-concept-semantic.component';
import { TabConceptLookupComponent } from './pages/admin/settings/concept/concept-detail/concept-left-content-bar/tab-concept-lookup/tab-concept-lookup.component';
import { ConceptInferenceSectionComponent } from './pages/admin/settings/concept/concept-detail/concept-left-content-bar/concept-inference-section/concept-inference-section.component';
import { ConceptRuleModalComponent } from './pages/admin/settings/concept/concept-detail/concept-left-content-bar/modals/concept-rule-modal/concept-rule-modal.component';
import { ConceptInferenceModalComponent } from './pages/admin/settings/concept/concept-detail/concept-left-content-bar/modals/concept-inference-modal/concept-inference-modal.component';
import { ConceptLinkModalComponent } from './pages/admin/settings/concept/concept-detail/concept-left-content-bar/modals/concept-link-modal/concept-link-modal.component';
import { GeoLeftContentBarComponent } from './pages/admin/settings/geo/geo-detail/geo-left-content-bar/geo-left-content-bar.component';
import { GeoRightContentBarComponent } from './pages/admin/settings/geo/geo-detail/geo-right-content-bar/geo-right-content-bar.component';
import { TabGeoProfileComponent } from './pages/admin/settings/geo/geo-detail/geo-left-content-bar/tab-geo-profile/tab-geo-profile.component';
import { TabGeoLookupComponent } from './pages/admin/settings/geo/geo-detail/geo-left-content-bar/tab-geo-lookup/tab-geo-lookup.component';
import { TabGeoAlternatesComponent } from './pages/admin/settings/geo/geo-detail/geo-left-content-bar/tab-geo-alternates/tab-geo-alternates.component';
import { GeoLinkModalComponent } from './pages/admin/settings/geo/geo-detail/geo-left-content-bar/modals/geo-link-modal/geo-link-modal.component';
import { ChecklistModule } from 'angular-checklist';
import { SettingsGeoLookupEditModalComponent } from './pages/admin/settings/geo-lookup/settings-geo-lookup-edit-modal/settings-geo-lookup-edit-modal.component';
import { GeoLeftFacetsBarComponent } from './pages/admin/settings/geo-lookup/settings-geo-lookup-edit-modal/geo-left-facets-bar/geo-left-facets-bar.component';
import { SettingsConceptLookupAttachModalComponent } from './pages/admin/settings/concept-lookup/settings-concept-lookup-attach-modal/settings-concept-lookup-attach-modal.component';
import { ConceptLeftFacetsBarComponent } from './pages/admin/settings/concept-lookup/settings-concept-lookup-attach-modal/concept-left-facets-bar/concept-left-facets-bar.component';
import { UsCompaniesList2Component } from './pages/admin/sourcing/us-companies-list2/us-companies-list2.component';
import { PeopleSearchBarSaveQueryModalComponent } from './pages/people/people-search-bar/modals/people-search-bar-save-query-modal/people-search-bar-save-query-modal.component';
import { PeopleSearchBarSavedSearchModalComponent } from './pages/people/people-search-bar/modals/people-search-bar-saved-search-modal/people-search-bar-saved-search-modal.component';
import { PeopleSearchBarExportCsvModalComponent } from './pages/people/people-search-bar/modals/people-search-bar-export-csv-modal/people-search-bar-export-csv-modal.component';
import { PeopleSearchBarSendMailModalComponent } from './pages/people/people-search-bar/modals/people-search-bar-send-mail-modal/people-search-bar-send-mail-modal.component';
import { PeopleSearchBarAddResumeModalComponent } from './pages/people/people-search-bar/modals/people-search-bar-add-resume-modal/people-search-bar-add-resume-modal.component';
import { JobsSidebarComponent } from './pages/jobs/jobs-sidebar/jobs-sidebar.component';
import { JobsSearchBarComponent } from './pages/jobs/jobs-search-bar/jobs-search-bar.component';
import { JobsListComponent } from './pages/jobs/jobs-list/jobs-list.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CompaniesListComponent } from './pages/companies/companies-list/companies-list.component';
import { CompaniesSearchBarComponent } from './pages/companies/companies-search-bar/companies-search-bar.component';
import { CompaniesSidebarComponent } from './pages/companies/companies-sidebar/companies-sidebar.component';
import { JobsDetailModalComponent } from './pages/jobs/modals/jobs-detail-modal/jobs-detail-modal.component';
import { CompanyDetailModalComponent } from './pages/companies/modals/company-detail-modal/company-detail-modal.component';
import { DetailEditModalComponent } from './pages/common/detail-edit-modal/detail-edit-modal.component';
import { SaveQueryModalComponent } from './pages/common/header-modals/save-query-modal/save-query-modal.component';
import { SavedSearchModalComponent } from './pages/common/header-modals/saved-search-modal/saved-search-modal.component';
import { SendByMailModalComponent } from './pages/common/header-modals/send-by-mail-modal/send-by-mail-modal.component';

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
        SourcingMapsModalComponent,
        SettingsComponent,
        AccountComponent,
        ClientComponent,
        ConceptLookupComponent,
        ConceptComponent,
        GeoLookupComponent,
        GeoComponent,
        HelpBubbleComponent,
        SettingsSidebarComponent,
        SettingsResultsListComponent,
        SettingsSearchBarComponent,
        SettingsAccountModalComponent,
        SettingsClientModalComponent,
        SettingsConceptModalComponent,
        SettingsGeoMapModalComponent,
        SettingsGeoLookupMapModalComponent,
        SettingsGeoLookupJsonModalComponent,
        SettingsHelpBubbleModalComponent,
        ClientDetailComponent,
        ConceptDetailComponent,
        GeoDetailComponent,
        TabClientProfileComponent,
        TabClientAccountsComponent,
        TabClientBusinessComponent,
        TabClientTemplatesComponent,
        LeftContentBarComponent,
        RightContentBarComponent,
        ConceptLeftContentBarComponent,
        ConceptRightContentBarComponent,
        TabConceptDescriptionComponent,
        TabConceptSemanticComponent,
        TabConceptLookupComponent,
        ConceptInferenceSectionComponent,
        ConceptRuleModalComponent,
        ConceptInferenceModalComponent,
        ConceptLinkModalComponent,
        GeoLeftContentBarComponent,
        GeoRightContentBarComponent,
        TabGeoProfileComponent,
        TabGeoLookupComponent,
        TabGeoAlternatesComponent,
        GeoLinkModalComponent,
        SettingsGeoLookupEditModalComponent,
        GeoLeftFacetsBarComponent,
        SettingsConceptLookupAttachModalComponent,
        ConceptLeftFacetsBarComponent,
        UsCompaniesList2Component,
        PeopleSearchBarSaveQueryModalComponent,
        PeopleSearchBarSavedSearchModalComponent,
        PeopleSearchBarExportCsvModalComponent,
        PeopleSearchBarSendMailModalComponent,
        PeopleSearchBarAddResumeModalComponent,
        JobsSidebarComponent,
        JobsSearchBarComponent,
        JobsListComponent,
        CompaniesComponent,
        CompaniesListComponent,
        CompaniesSearchBarComponent,
        CompaniesSidebarComponent,
        JobsDetailModalComponent,
        CompanyDetailModalComponent,
        DetailEditModalComponent,
        SaveQueryModalComponent,
        SavedSearchModalComponent,
        SendByMailModalComponent
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
        }),
        ChecklistModule,
        OrderModule,
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
