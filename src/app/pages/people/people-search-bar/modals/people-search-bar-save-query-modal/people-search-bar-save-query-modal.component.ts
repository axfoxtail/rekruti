import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-people-search-bar-save-query-modal',
  templateUrl: './people-search-bar-save-query-modal.component.html',
  styleUrls: ['./people-search-bar-save-query-modal.component.css']
})
export class PeopleSearchBarSaveQueryModalComponent implements OnInit {

  itemData: any = {
    name: ''
  }
  @Input() queryJson;
  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
  }

  saveSearchQuery(data) {
     this.spinner.show();
     this.api.savePeopleSearchQuery({name: data.name, queryJson: this.queryJson}).then(
      response => {
        this.spinner.hide();
        if(response.result > 0) {
          this.notifications.success('Saved successfully!',1000);
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.spinner.hide();
        this.notifications.warning('Error!',1000);
        console.log('err:', err);
      });
  }
}
