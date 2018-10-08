import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../services/api/api.service';
import {SearchService} from '../../../services/search/search.service';
import {NotificationsService} from '../../../services/notifications/notifications.service';

@Component({
  selector: 'app-sourcing',
  templateUrl: './sourcing.component.html',
  styleUrls: ['./sourcing.component.css']
})
export class SourcingComponent implements OnInit {
	
	_router = window.location.href.split("admin/sourcing/")[1];
	_sourcingData: any;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

  ngOnInit() {
    if(this._router){
      this.globalVar.sourcingSearchEvent.subscribe((data: any) => {
        this.searchForSourcing(data);
      });
      this.initSourcingData();
    }
  }
  // ================ Default Sourcing Data ================== //
  initSourcingData() {
  	this.searchForSourcing({route: this._router, page: 0, urlFacets: '', sort: '', keyword: ''});
  }
  // ================= Fetch Data From Api =================== //
  searchForSourcing(queryJson: any) {
  	this.spinner.show();
  	this.api.searchForSourcing(queryJson).then(
  		response => {
  			if(response.result > 0){
  				this._sourcingData = response.data;
  			}
        this.spinner.hide();

      },
      err => {
        this.notifications.warning('Error!', 10000);
  			console.log('err:',err);
        this.spinner.hide();
  		});
  }


}
