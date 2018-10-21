import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-account-modal',
  templateUrl: './settings-account-modal.component.html',
  styleUrls: ['./settings-account-modal.component.css']
})
export class SettingsAccountModalComponent implements OnInit {

  modalTitle: any;
  list_accountTypeName: any;
  list_organizationId: any;
  list_monthlyAllowance: any;
  list_accountProfileId: any;

  itemData: any;
  forAdd: any;

  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
    this.globalVar.openAccountModalEvent.subscribe((data: any) => {
      this.get_list_accountTypeName();
      this.get_list_organizationId();
      this.get_list_monthlyAllowance();
      this.get_list_accountProfileId();
      this.forAdd = data.forAdd;
      if(data.forAdd){
        this.itemData = {
          email: '',
          name: '',
          cellPhone: '',
          accountTypeId: '',
          accountProfileId: '',
          organizationId: '',
          accountAllowanceId: '',
        };
        this.modalTitle = 'Add Account';
      } else {
        this.itemData = {
          id: data.itemData.id,
          email: data.itemData.email,
          name: data.itemData.name,
          cellPhone: data.itemData.cellphone,
          accountTypeId: data.itemData.accountTypeId,
          accountProfileId: data.itemData.accountProfileId,
          organizationId: data.itemData.organizationId,
          accountAllowanceId: data.itemData.accountAllowanceId,
          isDeactivated: (data.itemData.isDeactivated == 'Yes' ? true : false),
        };
        this.modalTitle = "Edit Account";
      }
    });
  }
  // ---- for init account info ----- //
  get_list_accountTypeName(){
    this.api.get_list_accountTypeName().then(
      response => {
        if(response.result > 0){
          this.list_accountTypeName = response.data;
        }
      },
      err => {
        console.log('err:',err);
      });
  }

  get_list_organizationId(){
    this.api.get_list_organizationId().then(
      response => {
        if(response.result > 0){
          this.list_organizationId = response.data;
        }
      },
      err => {
        console.log('err:',err);
      });
  }

  get_list_monthlyAllowance(){
    this.api.get_list_monthlyAllowance().then(
      response => {
        if(response.result > 0){
          this.list_monthlyAllowance = response.data;
        }
      },
      err => {
        console.log('err:',err);
      });
  }

  get_list_accountProfileId(){
    this.api.get_list_accountProfileId().then(
      response => {
        if(response.result > 0){
          this.list_accountProfileId = response.data;
        }
      },
      err => {
        console.log('err:',err);
      });
  }
  // ------ ./for init account info ------ //

  // ------ save account ------- //
  saveAccount(itemData, forAdd){
    this.api.saveAccount({'forAdd': forAdd, 'itemData': itemData}).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Successed!', 10000);
          this.btnCancel.nativeElement.click();
          window.location.reload();
        }
      },
      err => {
        console.log("err:", err);
      });
  }

}
