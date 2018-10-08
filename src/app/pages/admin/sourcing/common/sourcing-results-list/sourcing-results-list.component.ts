import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-sourcing-results-list',
  templateUrl: './sourcing-results-list.component.html',
  styleUrls: ['./sourcing-results-list.component.css']
})
export class SourcingResultsListComponent implements OnInit {

  _router = window.location.href.split("admin/sourcing/")[1];
  currentResultItem: any;
  @Input() itemData;
  @Output() openViewModal: EventEmitter<any> = new EventEmitter;
  @Output() openMapsModal: EventEmitter<any> = new EventEmitter;

  // ------ pagination config ------ //
  public maxSize: any = 8;
  public directionLinks: any = true;
  public autoHide: any = false;
  public responsive: any = false;
  public config: PaginationInstance = {
      id: 'server',
      itemsPerPage: 20,
      currentPage: 1
  };
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page'
  };
  // ------ ./pagination config ------ //

  constructor(private globalVar: GlobalVariablesService) { }

  ngOnInit() {
  }

  // ---------- pagination / page change --------- //
  onPageChange(number: number) {
      this.config.currentPage = number;
      this.globalVar.sourcingSearch({page: number, urlFacets: this.globalVar.urlFacets, sort: '', keyword: this.itemData.keyword == null ? '' : this.itemData.keyword});
  }

  // ------ open view source modal for json ------ //
  openJson(obj){
    this.currentResultItem = obj;
    this.openViewModal.emit(obj);
  }

  // ------ open google maps ------ //
  openMap(obj){
    this.currentResultItem = obj.contentJson;
    this.openMapsModal.emit(obj);
  }

  // ------ Active clicked item ------- //
  checkActiveItem(obj: any) {
      if (this.currentResultItem === obj) {
          return 'active';
      }
      return '';
  }
}
