import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../../services/api/api.service';
import {SearchService} from '../../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-concept-right-content-bar',
  templateUrl: './concept-right-content-bar.component.html',
  styleUrls: ['./concept-right-content-bar.component.css']
})
export class ConceptRightContentBarComponent implements OnInit {

  @Input() itemData;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
  }

  openAddLinkForConcept(){
    
  }

  deleteLinkForConcept(item){
    // this.spinner.show();
    this.api.deleteLinkForConcept(item).then(
      response => {
        // this.spinner.hide();
        if(response.result > 0){
          this.notifications.success('Deleted successfully!', 1000);
          window.location.reload();
        } else {
          this.notifications.warning('Can not delete', 1000);
        }
      },
      err => {
        // this.spinner.hide();
        console.log('err:', err);
      });
  }
  
}
