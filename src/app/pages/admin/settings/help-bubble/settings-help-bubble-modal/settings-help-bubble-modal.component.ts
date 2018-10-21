import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {SearchService} from '../../../../../services/search/search.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-help-bubble-modal',
  templateUrl: './settings-help-bubble-modal.component.html',
  styleUrls: ['./settings-help-bubble-modal.component.css']
})
export class SettingsHelpBubbleModalComponent implements OnInit {

  modalTitle: any;

  itemData: any;
  forAdd: any;
  ckeConfig: any;

  @ViewChild('btn_cancel') btnCancel;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      toolbar: [
                { items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
                { items: [ 'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
                { items: [ 'Link', 'Unlink' ] },
                { items: [ 'Undo', 'Redo' ] },
              ]
    };
    this.globalVar.openHelpBubbleModalEvent.subscribe((data: any) => {
      this.forAdd = data.forAdd;
      if(data.forAdd){
        this.itemData = {
          context: '',
          title: '',
          description: '',
        };
        this.modalTitle = 'Add Help Bubble';
      } else {
        this.itemData = {
          id: data.id,
          context: data.context,
          title: data.title,
          description: data.description,
        };
        this.modalTitle = "Edit Help Bubble";
      }
    });
  }

  // ------ save client ------- //
  saveHelpBubble(itemData, forAdd){
    this.api.saveHelpBubble({'forAdd': forAdd, 'itemData': itemData}).then(
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
  deleteHelpBubble(itemData){
    this.api.deleteHelpBubble(itemData).then(
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
