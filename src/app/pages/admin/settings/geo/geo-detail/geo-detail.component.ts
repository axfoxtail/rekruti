import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-geo-detail',
  templateUrl: './geo-detail.component.html',
  styleUrls: ['./geo-detail.component.css']
})
export class GeoDetailComponent implements OnInit {

  _itemData: any;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.readGeoDetail();
  }

  readGeoDetail(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.spinner.show();
    this.api.readGeoDetail(id).then(
      response => {
        if (response.result > 0) {
          this._itemData = response.data;
          this.spinner.hide();
        }
      },
      err => {
        this.spinner.hide();
        console.log('err:', err);
      });
  }

}
