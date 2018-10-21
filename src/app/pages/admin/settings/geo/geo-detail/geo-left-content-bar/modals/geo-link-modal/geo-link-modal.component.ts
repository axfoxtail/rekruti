import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../../../../services/api/api.service';
import {SearchService} from '../../../../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-geo-link-modal',
  templateUrl: './geo-link-modal.component.html',
  styleUrls: ['./geo-link-modal.component.css']
})
export class GeoLinkModalComponent implements OnInit {

  itemData: any = {
    'url': '',
    'urlTypeId': ''
  };

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  saveLinkForGeo(itemData){
    const geoId = +this.route.snapshot.paramMap.get('id');
    this.spinner.show();
    this.api.saveLinkForGeo({'itemData': itemData, 'geoId': geoId}).then(
      response => {
        this.spinner.hide();
        if(response.result > 0){
          this.notifications.success('Successed!', 1000);
        } else {
          this.notifications.warning('Can not save', 1000);
        }
      },
      err => {
        this.spinner.hide();
        console.log('err:', err);
      });
  }
}
