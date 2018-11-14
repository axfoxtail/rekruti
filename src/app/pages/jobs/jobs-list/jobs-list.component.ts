import {Component, OnInit, ViewChildren, Output, EventEmitter} from '@angular/core';
import {environment} from '../../../../environments/environment';

import {PaginationInstance} from 'ngx-pagination';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {SearchService} from '../../../services/search/search.service';

declare var $: any;

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  @Output() selectedPeople: EventEmitter<any> = new EventEmitter;
  @Output() openProfile: EventEmitter<any> = new EventEmitter;
  @ViewChildren('list') listItems: any;

  urlImg: any = environment.endpoint + '/geoDocument/wDownload?storeGuid=';

  public maxSize: any = 8;
  public directionLinks: any = true;
  public autoHide: any = false;
  public responsive: any = false;
  public config: PaginationInstance = {
    id: 'server-job',
    itemsPerPage: 20,
    currentPage: 1
  };
  public labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page'
  };

  currentUserData: any;
  jobsData: any = {};
  jobsList: any = [];
  searchAggregations: any = [];
  currentActiveItemInJobsList: any;
  hasBucketSelected: any;
  searchSort: any;

  searchSortArray: any = [];

  constructor(private globalVar: GlobalVariablesService, private search: SearchService) {
    this.jobsData = {
      total: 0,
      hits: []
    };
    this.currentActiveItemInJobsList = {
      id: null
    };
    this.searchSortArray = [
      {value: 'score', label: 'Relevancy'},
      {value: 'postedDate', label: 'Post Date'},
    ];
  }

  ngOnInit() {
    this.currentUserData = this.globalVar.getCookieCurrentUser();

    this.globalVar.jobsListEvent.subscribe((list: any) => {
      this.searchSort = list.data.sort;
      this.jobsData = list.data;
      this.searchAggregations = list.data.aggregations;
      this.jobsList = this.jobsData.hits;
      this.config.currentPage = this.globalVar.getCurrentPageJobs();
      this.hasBucketSelected = this.search.hasBucketSelected(list.data.aggregations);
    });

    $('#detailsModal').on('hide.bs.modal', (e => {

      for (let i = 0; i < this.listItems._results.length; i++) {
        this.listItems._results[i].nativeElement.className = 'people-list-td';
      }
    }));
  }

  updateJobsList(body: any) {
    this.globalVar.setCurrentPageJobs(this.config.currentPage);
    this.globalVar.jobsListChanged(body);
    this.globalVar.scrollContentToTopJobs();
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
    const start = this.calcFromWhichItem(number);
    const currentActiveFilters = this.globalVar.getSearchQueryJobs();
    currentActiveFilters.from = start;
    this.updateJobsList(currentActiveFilters);
  }

  calcFromWhichItem(page: number): any {
    return (page - 1) * this.config.itemsPerPage;
  }

  openDetailModal(item: any) {
    this.currentActiveItemInJobsList = item;
    this.globalVar.showJobsDetailModal(item);
  }

  openCompanyModal(item: any) {
    this.currentActiveItemInJobsList = item;
    this.globalVar.showJobsCompanyModal(item);
  }



  checkActiveItem(id: any) {
    if (this.currentActiveItemInJobsList.id === id) {
      return 'active';
    }
    return '';
  }

  searchSortMain() {
    this.config.currentPage = 1;
    const body = this.search.setSort(this.globalVar.getSearchQueryJobs(), this.searchSort);
    this.globalVar.setSearchConditionsJobs(body);
    this.updateJobsList(body);
  }

  removeBucket(bucket: any) {
    this.globalVar.jobsListChanged(this.search.removeBucket(bucket, this.globalVar.getSearchConditionsJobs()));
  }

  clearSearch() {
    this.globalVar.jobsListChanged(this.search.clearSearch());
  }

}
