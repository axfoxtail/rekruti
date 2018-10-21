import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';
import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  @Input() type = 'people';
  @Input() itemData;
  @Input() chosenTab;
  @Input() fromFull;

  @ViewChild('tab') ngbTabSet;
  selectedTabStatus = [false, false, false, false, false];

  constructor(private api: RekrutiApiService,
              private notifications: NotificationsService, 
              private cdRef:ChangeDetectorRef, 
              private globalVar: GlobalVariablesService) { }

  ngOnInit() {
  }

  

}
