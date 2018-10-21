import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../../../../services/api/api.service';
import {SearchService} from '../../../../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-concept-link-modal',
  templateUrl: './concept-link-modal.component.html',
  styleUrls: ['./concept-link-modal.component.css']
})
export class ConceptLinkModalComponent implements OnInit {

  itemData: any = {
    'url': '',
    'urlTypeId': ''
  };

  @ViewChild('btn_cancel') btnCancel;
  
  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  saveLinkForConcept(itemData) {
    // this.spinner.show();
    const conceptId = +this.route.snapshot.paramMap.get('id');
    this.api.saveLinkForConcept({'itemData': itemData, 'conceptId': conceptId}).then(
      response => {
        // this.spinner.hide();
        if(response.result > 0) {
          this.notifications.success('Succeessed!', 1000);
          this.btnCancel.nativeElement.click();
          window.location.reload();
        } else {
          this.notifications.warning('Can not save', 1000);
        }
      },
      err => {
        // this.spinner.hide();
        console.log('err:', err);
      });
  }

}
