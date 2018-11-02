import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RekrutiApiService} from '../../../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../../../services/notifications/notifications.service';
import {GlobalVariablesService} from '../../../../../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-tab-concept-lookup',
  templateUrl: './tab-concept-lookup.component.html',
  styleUrls: ['./tab-concept-lookup.component.css']
})
export class TabConceptLookupComponent implements OnInit {

  @Input() tabData;

  constructor(private api: RekrutiApiService,
              private notifications: NotificationsService, 
              private cdRef:ChangeDetectorRef, 
              private globalVar: GlobalVariablesService) { }

  ngOnInit() {
  }

  deleteJoint(id){
  	console.log('id-', id);
    this.api.deleteConceptJoint(id).then(
      response => {
        if(response.result > 0) {
          this.notifications.success('Deleted successfully!',1000);
          window.location.reload();
        } else {
          this.notifications.warning('Can not delete!',1000);
        }
      },
      err => {
        this.notifications.warning(err,1000);
        console.log('err:', err);
      }
    );
  }

}
