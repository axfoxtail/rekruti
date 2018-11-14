import {Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../services/api/api.service';
import {SearchService} from '../../services/search/search.service';
import {UtilsService} from '../../services/utils/utils.service';
import {NotificationsService} from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  @ViewChild('top') topContent: ElementRef;

  _opened: boolean;
  _sidebarMode: any = 'push';
  _autoCollapseWidth: any = 1100;
  windowWidth: any = window.innerWidth;
  cityList: any;
  jobsDetailData: any;
  companyDetailData: any;
  modalType: any;

  constructor(private globalVar: GlobalVariablesService,
        private api: RekrutiApiService,
        private spinner: NgxSpinnerService,
        private search: SearchService,
        private notifications: NotificationsService) {

    this._opened = this.windowWidth > this._autoCollapseWidth;
    this.globalVar.setSearchConditionsJobs([]);
  }

  ngOnInit() {
    this.globalVar.setSearchConditionsJobs(this.search.buildQuery(this.globalVar.getSearchConditionsJobs()));
    this.getJobsList(this.globalVar.getSearchConditionsJobs());

    this.globalVar.sidebarStateChangedJobsEvent.subscribe(() => {
      this._toggleSidebar();
    });
    this.globalVar.scrollContentToTopJobsEvent.subscribe(() => {
      this.scrollToTop();
    });
    this.globalVar.jobsListChangedEvent.subscribe((data: any) => {
      this.getJobsList(data);
    });
    // -------------- Modal Event Subscriber ------------ //
    this.globalVar.openJobsDetailModalEvent.subscribe((data: any) => {
      this.getJobsDetail(data);
    });
    this.globalVar.openJobsCompanyModalEvent.subscribe((data: any) => {
      this.getCompanyDetail(data);
    });
    this.globalVar.refreshDetailDataEvent.subscribe((data: any) => {
      this.refreshDetailData(data);
    });
  }


  getJobsList(queryJson: any) {
    this.spinner.show();
    this.globalVar.setSearchQueryJobs(queryJson);

    this.api.job_wSearch(queryJson).then(
      response => {
        if (response.result > 0) {
          // save conditions globally
          let conditions = this.globalVar.getSearchConditionsJobs();
          conditions = response.data.aggregations;
          conditions.sort = response.data.sort;
          conditions.from = response.data.from;
          conditions.size = response.data.size;
          this.globalVar.setSearchConditionsJobs(conditions);
          // that is to get the templates to work
          this.globalVar.setCurrentPageJobs(this.search.getPage(response.data.from, response.data.size));
          this.globalVar.jobsList(response);
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
    this.globalVar.windowWidthChangedJobs(this.windowWidth);
    this._opened = this.windowWidth > this._autoCollapseWidth;
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  scrollToTop() {
    this.topContent.nativeElement.scrollIntoView({behavior: 'instant', block: 'start'});
  }

  // -------------- Modal Event Subscriber -------------- //
  getJobsDetail(data) {

    this.api.getJobsDetail(data).then(
      response => {
        if (response.result > 0) {
          this.jobsDetailData = response.data;
          this.modalType = 'job';
        } else {
          console.log('err:', response);
          this.notifications.warning('Can not get detail data!', 1000);
        }
      },
      err => {
        console.log('err:', err);
        this.notifications.warning('Error!', 1000);
      });
  }

  refreshDetailData(data) { // param : personId, isrefresh
    console.log('refresh-1:', data);
    this.api.refreshDetailData(data.personId, data.isrefresh).then(
      response => {
        console.log('res==', response);
      },
      err => {
        console.log('err:', err);
      });
  }

  getCompanyDetail(data) {
    this.api.getCompanyDetail(data).then(
      response => {
        console.log('companyDetail=', response);
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
