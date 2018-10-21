import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-geo-lookup-json-modal',
  templateUrl: './settings-geo-lookup-json-modal.component.html',
  styleUrls: ['./settings-geo-lookup-json-modal.component.css']
})
export class SettingsGeoLookupJsonModalComponent implements OnInit {

  modalTitle: any;
  listConceptType: any;

  itemData: any;
  forAdd: any;

  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
    this.globalVar.openGeoLookupJsonModalEvent.subscribe((data_id: any) => {
      this.get_settingsGeoLookupJson(data_id);
      this.modalTitle = "View Source";
    });
  }

  get_settingsGeoLookupJson(data_id) {
    this.api.get_settingsGeoLookupJson(data_id).then(
      response => {
        if(response.result > 0){
          this.itemData = response.data;
        }
      },
      err => {
        console.log('err:', err);
      });
  }

}