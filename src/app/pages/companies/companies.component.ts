import {Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../services/api/api.service';
import {UtilsService} from '../../services/utils/utils.service';
import {SearchService} from '../../services/search/search.service';
import {NotificationsService} from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

   @ViewChild('top') topContent: ElementRef;

  _opened: boolean;
  _sidebarMode: any = 'push';
  _autoCollapseWidth: any = 1100;
  windowWidth: any = window.innerWidth;
  cityList: any;
  companyDetailData: any;
  modalType: any = 'company';

  constructor(private globalVar: GlobalVariablesService,
        private api: RekrutiApiService,
        private spinner: NgxSpinnerService,
        private search: SearchService,
        private notifications: NotificationsService) {

    this._opened = this.windowWidth > this._autoCollapseWidth;
    this.globalVar.setSearchConditionsCompanies([]);
  }

  ngOnInit() {
    this.globalVar.setSearchConditionsCompanies(this.search.buildQuery(this.globalVar.getSearchConditionsCompanies()));
    this.getCompaniesList(this.globalVar.getSearchConditionsCompanies());

    this.globalVar.sidebarStateChangedCompaniesEvent.subscribe(() => {
      this._toggleSidebar();
    });
    this.globalVar.scrollContentToTopCompaniesEvent.subscribe(() => {
      this.scrollToTop();
    });
    this.globalVar.companiesListChangedEvent.subscribe((data: any) => {
      this.getCompaniesList(data);
    });
    this.globalVar.openCompanyDetailModalEvent.subscribe((data: any) => {
      this.getCompanyDetail(data);
    });
    
  }

  getCompaniesList(queryJson: any) {
    this.spinner.show();
    this.globalVar.setSearchQueryCompanies(queryJson);

    this.api.companies_wSearch(queryJson).then(
      response => {
        if (response.result > 0) {
          // save conditions globally
          let conditions = this.globalVar.getSearchConditionsCompanies();
          conditions = response.data.aggregations;
          conditions.sort = response.data.sort;
          conditions.from = response.data.from;
          conditions.size = response.data.size;
          this.globalVar.setSearchConditionsCompanies(conditions);
          // that is to get the templates to work
          this.globalVar.setCurrentPageCompanies(this.search.getPage(response.data.from, response.data.size));
          this.globalVar.companiesList(response);
        } else {
          this.notifications.warning(response.message, 1000);
        }
        this.hideSpinnerScrollToTop();
      },
      err => {
        console.log(err);
        this.notifications.warning('', 1000);
        this.hideSpinnerScrollToTop();
      });
  }

  hideSpinnerScrollToTop() {
    this.scrollToTop();
    this.spinner.hide();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.globalVar.windowWidthChangedCompanies(this.windowWidth);
    this._opened = this.windowWidth > this._autoCollapseWidth;
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  scrollToTop() {
    this.topContent.nativeElement.scrollIntoView({behavior: 'instant', block: 'start'});
  }

  getCompanyDetail(data) {
    this.api.getCompanyDetail(data).then(
      response => {
        console.log('note==', response);
        if (response.result > 0) {
          this.companyDetailData = response.data;
          this.modalType = 'company';
        } else {
          this.notifications.warning('Can not get comapny data!', 1000);
        }
      },
      err => {
        console.log('err:', err);
        this.notifications.warning('Error!', 1000);
      });
  }


}
