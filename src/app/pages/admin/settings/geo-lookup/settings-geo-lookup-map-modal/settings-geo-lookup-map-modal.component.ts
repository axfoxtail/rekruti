import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-geo-lookup-map-modal',
  templateUrl: './settings-geo-lookup-map-modal.component.html',
  styleUrls: ['./settings-geo-lookup-map-modal.component.css']
})
export class SettingsGeoLookupMapModalComponent implements OnInit {

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
    this.globalVar.openGeoLookupMapModalEvent.subscribe((data: any) => {
      this.itemData = data;
      this.modalTitle = "Location";
    });
  }

}
