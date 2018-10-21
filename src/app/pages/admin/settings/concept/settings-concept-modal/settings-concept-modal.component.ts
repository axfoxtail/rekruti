import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-concept-modal',
  templateUrl: './settings-concept-modal.component.html',
  styleUrls: ['./settings-concept-modal.component.css']
})
export class SettingsConceptModalComponent implements OnInit {

  modalTitle: any;
  listConceptType: any;

  itemData: any;
  forAdd: any;

  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
    this.globalVar.openConceptModalEvent.subscribe((data: any) => {
      this.get_listConceptType();
      this.forAdd = data.forAdd;
      if(data.forAdd){
        this.itemData = {
          name: '',
          conceptTypeId: '',
          definition: '',
          isHiddenFacet: '',
        };
        this.modalTitle = 'Add Concept';
      } else {
        this.itemData = {
          id: data.itemData.id,
          name: data.itemData.name,
          conceptTypeId: data.itemData.conceptTypeId,
          definition: data.itemData.definition,
          isHiddenFacet: data.itemData.isHiddenFacet,
        };
        this.modalTitle = "Edit Concept";
      }
    });
  }

  // ------- init concept modal concept type ----- //
  get_listConceptType(){
    this.api.get_listConceptType().then(
      response => {
        if(response.result > 0){
          this.listConceptType = response.data;
        }
      },
      err => {
        console.log('err:',err);
      });
  }

  // ------ save concept ------- //
  saveConcept(itemData, forAdd){
    this.api.saveConcept({'forAdd': forAdd, 'itemData': itemData}).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Successed!', 1000);
          this.btnCancel.nativeElement.click();
          window.location.reload();
        }
      },
      err => {
        console.log("err:", err);
      });
  }

  // ------- delete concept -------- //
  deleteConcept(data){
    this.api.deleteConcept(data).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Successed!', 1000);
          this.btnCancel.nativeElement.click();
          window.location.reload();
        }
      },
      err => {
        console.log('err:', err);
      });
  }

}
