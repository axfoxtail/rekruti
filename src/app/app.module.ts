import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CookieModule } from 'ngx-cookie';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';

import { AppFreeLayoutComponent } from './_layout/app-free-layout/app-free-layout.component';
import { AppFreeLayoutHeaderComponent } from './_layout/app-free-layout-header/app-free-layout-header.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AppLayoutHeaderComponent } from './_layout/app-layout-header/app-layout-header.component';

import { LoginComponent } from './pages/login/login.component';
import { PeopleComponent } from './pages/people/people.component';
import { EmployersComponent } from './pages/employers/employers.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { TasksComponent } from './pages/tasks/tasks.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpService } from './services/http/http.service';
import { ApiService } from './services/api/api.service';
import { ValidationService } from './services/validation/validation.service';
import { GlobalVariablesService } from './services/global-variables/global-variables.service';
import { AuthSecurityService } from './services/auth-security/auth-security.service';

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
    TasksComponent
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
    SidebarModule.forRoot()
  ],
  providers: [
      HttpService,
      ApiService,
      ValidationService,
      GlobalVariablesService,
      AuthSecurityService,
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
