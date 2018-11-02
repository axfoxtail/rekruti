import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../services/api/api.service';
import {SearchService} from '../../../services/search/search.service';
import {NotificationsService} from '../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  _router = window.location.href.split("admin/settings/")[1];
  _settingsData: any;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
    if(this._router){
      this.globalVar.settingsSearchEvent.subscribe((data: any) => {
        this.searchForSettings(data);
      });
      this.initSettingsData();
    }
  }
  // ================ Default Settings Data ================== //
  initSettingsData() {
    this.searchForSettings({route: this._router, page: 0, urlFacets: '', sort: '', keyword: ''});
  }
  // ================= Fetch Data From Api =================== //
  searchForSettings(queryJson: any) {
    this.spinner.show();
    this.api.searchForSettings(queryJson).then(
      response => {
        if(response.result > 0){
          this._settingsData = response.data;
          if(queryJson.sort){
            this._settingsData.searchSort = queryJson.sort;
          }
        }
        this.spinner.hide();
      },
      err => {
        this.notifications.warning('Error!', 10000);
        console.log('err:',err);
        this.spinner.hide();
      });
  }

}
