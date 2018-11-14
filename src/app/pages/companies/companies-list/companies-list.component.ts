import {Component, OnInit, ViewChildren, Output, EventEmitter} from '@angular/core';
import {environment} from '../../../../environments/environment';

import {PaginationInstance} from 'ngx-pagination';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {SearchService} from '../../../services/search/search.service';

declare var $: any;

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

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
  companiesData: any = {};
  companiesList: any = [];
  searchAggregations: any = [];
  currentActiveItemInCompaniesList: any;
  hasBucketSelected: any;
  searchSort: any;

  searchSortArray: any = [];

  constructor(private globalVar: GlobalVariablesService, private search: SearchService) {
    this.companiesData = {
      total: 0,
      hits: []
    };
    this.currentActiveItemInCompaniesList = {
      id: null
    };
    this.searchSortArray = [
      {value: 'score', label: 'Relevancy'},
      {value: 'occurrenceCount', label: 'Popularity'},
    ];
  }

  ngOnInit() {
    this.currentUserData = this.globalVar.getCookieCurrentUser();

    this.globalVar.companiesListEvent.subscribe((list: any) => {
      this.searchSort = list.data.sort;
      this.companiesData = list.data;
      this.searchAggregations = list.data.aggregations;
      this.companiesList = this.companiesData.hits;
      this.config.currentPage = this.globalVar.getCurrentPageCompanies();
      this.hasBucketSelected = this.search.hasBucketSelected(list.data.aggregations);
    });

    $('#detailsModal').on('hide.bs.modal', (e => {

      for (let i = 0; i < this.listItems._results.length; i++) {
        this.listItems._results[i].nativeElement.className = 'people-list-td';
      }
    }));
  }

  updateCompaniesList(body: any) {
    this.globalVar.setCurrentPageCompanies(this.config.currentPage);
    this.globalVar.companiesListChanged(body);
    this.globalVar.scrollContentToTopCompanies();
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
    const start = this.calcFromWhichItem(number);
    const currentActiveFilters = this.globalVar.getSearchQueryCompanies();
    currentActiveFilters.from = start;
    this.updateCompaniesList(currentActiveFilters);
  }

  calcFromWhichItem(page: number): any {
    return (page - 1) * this.config.itemsPerPage;
  }

  openDetailsModal(item: any) {
    this.currentActiveItemInCompaniesList = item;
    this.openModalByTab(item, 'profile');
  }

  checkActiveItem(id: any) {
    if (this.currentActiveItemInCompaniesList.id === id) {
      return 'active';
    }
    return '';
  }

  searchSortMain() {
    this.config.currentPage = 1;
    const body = this.search.setSort(this.globalVar.getSearchQueryCompanies(), this.searchSort);
    this.globalVar.setSearchConditionsCompanies(body);
    this.updateCompaniesList(body);
  }

  removeBucket(bucket: any) {
    this.globalVar.companiesListChanged(this.search.removeBucket(bucket, this.globalVar.getSearchConditionsCompanies()));
  }

  clearSearch() {
    this.globalVar.companiesListChanged(this.search.clearSearch());
  }

  openModalByTab(item: any, tabName: any) {
    // let data = {item: item, tab: tabName};
    // this.openProfile.emit(data);
    this.globalVar.showCompanyDetailModal(item);
  }
}
