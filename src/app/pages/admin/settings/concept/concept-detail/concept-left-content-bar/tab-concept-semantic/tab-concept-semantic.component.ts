import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import {RekrutiApiService} from '../../../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../../../services/notifications/notifications.service';
import {GlobalVariablesService} from '../../../../../../../services/global-variables/global-variables.service';

import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-tab-concept-semantic',
  templateUrl: './tab-concept-semantic.component.html',
  styleUrls: ['./tab-concept-semantic.component.css']
})

export class TabConceptSemanticComponent implements OnInit {

  @Input() tabData;
  order: string = 'token';
  reverse: boolean = false;

  // ------ pagination config ------ //
//  public maxSize: any = 8;
//  public directionLinks: any = true;
//  public autoHide: any = false;
//  public responsive: any = false;
//  public config: PaginationInstance = {
//      id: 'server_concept_detail',
//      itemsPerPage: 20,
//      currentPage: 1
//  };
//  public labels: any = {
//      previousLabel: 'Previous',
//      nextLabel: 'Next',
//      screenReaderPaginationLabel: 'Pagination',
//     screenReaderPageLabel: 'page'
//  };
  // ------ ./pagination config ------ //
  sortedCollection: any[];
  collection: any[];

  constructor(private api: RekrutiApiService,
              private notifications: NotificationsService, 
              private cdRef:ChangeDetectorRef, 
              private globalVar: GlobalVariablesService,
              private orderPipe: OrderPipe) { 
                this.sortedCollection = orderPipe.transform(this.collection, 'token');
              }

  ngOnInit() {
    this.collection = this.tabData.semanticField;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
