import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-results-list',
  templateUrl: './settings-results-list.component.html',
  styleUrls: ['./settings-results-list.component.css']
})
export class SettingsResultsListComponent implements OnInit {

  _router = window.location.href.split("admin/settings/")[1];
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

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private notifications: NotificationsService) { }

  ngOnInit() {
  }

  // ---------- pagination / page change --------- //
  onPageChange(number: number) {
      this.config.currentPage = number;
      this.globalVar.settingsSearch({page: number, urlFacets: this.globalVar.urlFacets, sort: '', keyword: this.itemData.keyword == null ? '' : this.itemData.keyword});
  }

  // ------ open account modal for edit ------ account ---- //
  openAccountModal(data) {
    this.globalVar.showAccountModal(data);
  }

  // ------ open client modal for edit ------ client ----- //
  openClientModal(data) {
    this.globalVar.showClientModal(data);
  }

  // ------ open concept modal for edit ------ concept ----- //
  openConceptModal(data) {
    this.globalVar.showConceptModal(data);
  }

  // ------ open geo map modal for view -------- geo ------- //
  openGeoMap(data) {
    this.globalVar.showGeoMapModal(data);
  }

  // ------ open geo lookup map modal for view -------- geo lookup ------- //
  openGeoLookupMap(data) {
    this.globalVar.showGeoLookupMapModal(data);
  }

  openGeoLookupJson(data_id) {
    this.globalVar.showGeoLookupJsonModal(data_id);
  }

  openGeoEditModal(data) {
    this.globalVar.showGeoEditModal(data);
  }
  // ------ delete concept-lookup concept item ------- concept-lookup ----- //
  deleteConceptLookup(data_id) {
    this.api.deleteConceptLookup(data_id).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Success!', 1000);
          window.location.reload();
        } else {
          this.notifications.warning('Can not delete', 1000);
        }
      },
      err => {
        console.log('err:', err);
      });
  }
  // ----- open concept-lookup attach modal ------- concept-lookup ------ //
  openAttachConceptModal(data) {
    this.globalVar.showAttachConceptModal(data);
  }








  // ------ open google maps ------ //
  openMap(obj){
    this.currentResultItem = obj.contentJson;
    this.openMapsModal.emit(obj);
  }

  // ------ Active clicked item ------- //
  checkActiveItem(obj: any) {
      if (this.currentResultItem === obj) {
          //return 'active';
      }
      return '';
  }
}
