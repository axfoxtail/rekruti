import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';

import {GlobalVariablesService} from '../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../services/api/api.service';
import {NotificationsService} from '../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-help-bubble',
  templateUrl: './help-bubble.component.html',
  styleUrls: ['./help-bubble.component.css']
})
export class HelpBubbleComponent implements OnInit {

  @Input() itemData;

  // ------ pagination config ------ //
  public maxSize: any = 8;
  public directionLinks: any = true;
  public autoHide: any = false;
  public responsive: any = false;
  public config: PaginationInstance = {
      id: 'server',
      itemsPerPage: 20,
      currentPage: 1
  };
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page'
  };
  // ------ ./pagination config ------ //

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private notifications: NotificationsService) { }

  ngOnInit() {
  }


  // ------ Active clicked item ------- //
  checkActiveItem(obj: any) {
      //if (this.currentResultItem === obj) {
          //return 'active';
      //}
      //return '';
  }

  openHelpBubbleModal(data){
    this.globalVar.showHelpBubbleModal(data);
  }
}
