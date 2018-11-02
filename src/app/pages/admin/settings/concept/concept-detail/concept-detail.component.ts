import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-concept-detail',
  templateUrl: './concept-detail.component.html',
  styleUrls: ['./concept-detail.component.css']
})
export class ConceptDetailComponent implements OnInit {

  _itemData: any;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.readItemData();
  }

  readItemData(){
    this.spinner.show();
    const conceptId = +this.route.snapshot.paramMap.get('id');
    this.api.getConceptDetailData(conceptId).then(
      response => {
        this.spinner.hide();
        if(response.result > 0){
          this._itemData = response.data;
          console.log('224455--', response.data);
        }
      },
      err => {
        this.spinner.hide();
        console.log('err:', err);
      });
  }

}
