import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-client-modal',
  templateUrl: './settings-client-modal.component.html',
  styleUrls: ['./settings-client-modal.component.css']
})
export class SettingsClientModalComponent implements OnInit {

  modalTitle: any;

  itemData: any;
  forAdd: any;

  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
    this.globalVar.openClientModalEvent.subscribe((data: any) => {
      this.forAdd = data.forAdd;
      if(data.forAdd){
        this.itemData = {
          name: '',
          address1: '',
          address2: '',
          geoId: '',
          cityName: '',
          zipCode: '',
        };
        this.modalTitle = 'Add Client';
      } else {
        this.itemData = {
          id: data.itemData.id,
          name: data.itemData.name,
          address1: data.itemData.address1,
          address2: data.itemData.address2,
          geoId: data.itemData.geoId,
          cityName: data.itemData.cityName,
          zipCode: data.itemData.zipCode,
        };
        this.modalTitle = "Edit Client";
      }
    });
  }

  // ------ save client ------- //
  saveClient(itemData, forAdd){
    this.api.saveClient({'forAdd': forAdd, 'itemData': itemData}).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Successed!', 1000);
          this.btnCancel.nativeElement.click();
          window.location.reload();
        } else {
          this.notifications.warning('Can not save', 1000);
        }
      },
      err => {
        console.log("err:", err);
      });
  }

  // ------- delete client -------- //
  deleteClient(itemData){
    this.api.deleteClient(itemData).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Successed!', 1000);
          this.btnCancel.nativeElement.click();
          window.location.reload();
        } else {
          this.notifications.warning('Can not delete', 1000);
        }
      },
      err => {
        console.log('err:', err);
      });
  }

}
