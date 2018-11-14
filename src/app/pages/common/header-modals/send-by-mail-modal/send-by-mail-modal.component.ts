import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../services/api/api.service';
import {SearchService} from '../../../../services/search/search.service';
import {NotificationsService} from '../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-send-by-mail-modal',
  templateUrl: './send-by-mail-modal.component.html',
  styleUrls: ['./send-by-mail-modal.component.css']
})
export class SendByMailModalComponent implements OnInit {

  itemData: any = {
    from: 1,
    size: 200,
    email: ''
  };
  @Input() queryJson;
  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
  }

  sendByMail() {
    this.spinner.show();
    if(!this.queryJson) {
      const peopleSearchConditions = this.globalVar.getSearchConditionsPeople();
      const body = this.search.buildQuery(peopleSearchConditions);
      this.queryJson = body;
    }
    var data_body = {
        from: this.itemData.from - 1,
        queryJson: this.queryJson,
        size: this.itemData.size,
        email: this.itemData.email
    };
    this.api.sendByMail(data_body).then(
      response => {
        if(response.result > 0) {
          this.notifications.success('Email sent successfully!', 1000);
        } else {
          this.notifications.warning('Can not send email!', 1000);
        }
        this.spinner.hide();
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
        this.spinner.hide();
      });
  }

}
