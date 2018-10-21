import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {PaginationInstance} from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';
import {NotificationsService} from '../../../../../services/notifications/notifications.service';

@Component({
  selector: 'app-settings-concept-lookup-attach-modal',
  templateUrl: './settings-concept-lookup-attach-modal.component.html',
  styleUrls: ['./settings-concept-lookup-attach-modal.component.css']
})
export class SettingsConceptLookupAttachModalComponent implements OnInit {

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
    conceptLookupId: '',
    conceptId: '',
    isGarbage: false,
    name: ''
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
    this.globalVar.openAttachConceptModalEvent.subscribe((data: any) => {
      this.searchKeyword = data.token;
      this.btnSearch.nativeElement.click();
      this.saveObj.conceptId = '';
      this.saveObj.conceptLookupId = data.id;
      this.saveObj.name = data.token;
      this.globalVar.urlFacets = '';
    });
    this.globalVar.searchAttachConceptEvent.subscribe((data: any) => {
      this.get_AttachConcept(data);
    });
  }

  submitSearch(keyword){
    this.spinner.show();
    this.globalVar.searchAttachConcept({keyword: keyword, page: 0, urlFacets: ''});
  }

  // ---------- pagination / page change --------- //
  onPageChange(number: number) {
    this.spinner.show();
    this.config.currentPage = number;
    this.globalVar.searchAttachConcept({page: number, urlFacets: this.globalVar.urlFacets, sort: '', keyword: this.searchKeyword == null ? '' : this.searchKeyword});
  }

  get_AttachConcept(data){
    this.api.get_AttachConcept(data).then(
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

  saveAttachConcept(){
    var data = this.saveObj;
    this.api.saveAttachConcept(data).then(
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
