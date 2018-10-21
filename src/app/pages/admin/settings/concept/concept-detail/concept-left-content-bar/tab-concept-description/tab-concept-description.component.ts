import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RekrutiApiService} from '../../../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../../../services/notifications/notifications.service';
import {GlobalVariablesService} from '../../../../../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-tab-concept-description',
  templateUrl: './tab-concept-description.component.html',
  styleUrls: ['./tab-concept-description.component.css']
})
export class TabConceptDescriptionComponent implements OnInit {

  @Input() tabData;

  constructor(private api: RekrutiApiService,
              private notifications: NotificationsService, 
              private cdRef:ChangeDetectorRef, 
              private globalVar: GlobalVariablesService) { }

  ngOnInit() {
  }

  openConceptRuleModal(data){
  	this.globalVar.showConceptRuleModal(data);
  }

}
