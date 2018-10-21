import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {PaginationInstance} from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-geo-lookup-edit-modal',
  templateUrl: './settings-geo-lookup-edit-modal.component.html',
  styleUrls: ['./settings-geo-lookup-edit-modal.component.css']
})
export class SettingsGeoLookupEditModalComponent implements OnInit {

  searchSettingsForm : FormGroup
  searchKeyword : any = '';
  itemData : any;
  @ViewChild('btn_cancel') btnCancel;
  @ViewChild('btn_search') btnSearch;

  // ------ pagination config ------ //
  public maxSize: any = 8;
  public directionLinks: any = true;
  public autoHide: any = false;
  public responsive: any = false;
  public config: PaginationInstance = {
      id: 'modal_server',
      itemsPerPage: 20,
      currentPage: 1
  };
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page'
  };
  // ------------------------------ //

  saveObj : any = {
    geoLookupId: '',
    geoId: '',
    isAmbiguous: false,
    isGarbage: false,
  };

  constructor(private formBuilder: FormBuilder, 
              private notifications: NotificationsService, 
              private globalVar: GlobalVariablesService, 
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchSettingsForm = this.formBuilder.group({
        searchKeyword: ['', Validators.required]
    });
    this.globalVar.openGeoEditModalEvent.subscribe((data: any) => {
      this.searchKeyword = data.token + (data.cityName ? ', ' + data.cityName : '');
      this.btnSearch.nativeElement.click();
      this.saveObj.geoId = '';
      this.saveObj.geoLookupId = data.id;
      this.globalVar.urlFacets = '';
    });
    this.globalVar.searchLinkToGeoEvent.subscribe((data: any) => {
      this.get_linkToGeo(data);
    });
  }

  submitSearch(keyword){
    this.spinner.show();
    this.globalVar.searchLinkToGeo({keyword: keyword, page: 0, urlFacets: ''});
  }

  // ---------- pagination / page change --------- //
  onPageChange(number: number) {
    this.spinner.show();
    this.config.currentPage = number;
    this.globalVar.searchLinkToGeo({page: number, urlFacets: this.globalVar.urlFacets, sort: '', keyword: this.searchKeyword == null ? '' : this.searchKeyword});
  }

  get_linkToGeo(data){
    this.api.get_linkToGeo(data).then(
      response => {
        this.spinner.hide();
        if (response.result > 0) {
          this.itemData = response.data;
        }
      },
      err => {
        this.spinner.hide();
        console.log('err:', err);
      });
  }

  saveLinkToGeo(){
    var data = this.saveObj;
    this.api.saveLinkToGeo(data).then(
      response => {
        if(response.result > 0) {
          this.notifications.success('Saved successfully.', 1000);
          this.btnCancel.nativeElement.click();
          window.location.reload();
        } else {
          this.notifications.warning('Can not save.', 1000);
        }
      },
      err => {
        console.log('err:', err);
      });
  }

}
