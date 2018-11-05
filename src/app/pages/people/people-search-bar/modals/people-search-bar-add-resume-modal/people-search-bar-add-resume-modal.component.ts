import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';
@Component({
  selector: 'app-people-search-bar-add-resume-modal',
  templateUrl: './people-search-bar-add-resume-modal.component.html',
  styleUrls: ['./people-search-bar-add-resume-modal.component.css']
})
export class PeopleSearchBarAddResumeModalComponent implements OnInit {
  
  file: File;

  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
    
  }
  
  saveResumeFile(file){
    if(file) {
      this.api.saveResumeFile(file).then(
        response => {
          if(response.result > 0) {
            this.notifications.success('Saved file successfully!', 1000);
          } else {
            this.notifications.warning('Can not save!', 1000);
          }
          this.btnCancel.nativeElement.click();
        },
        err => {
          this.notifications.warning('Error!', 1000);
          console.log('err:', err);
        });
    }
  }

}
