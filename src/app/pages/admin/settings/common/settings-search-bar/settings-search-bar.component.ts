import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';

@Component({
  selector: 'app-settings-search-bar',
  templateUrl: './settings-search-bar.component.html',
  styleUrls: ['./settings-search-bar.component.css']
})
export class SettingsSearchBarComponent implements OnInit {

  _router = window.location.href.split("admin/settings/")[1];
  searchSettingsForm : FormGroup
  searchKeyword : any = '';

  constructor(private formBuilder: FormBuilder, 
              private globalVar: GlobalVariablesService, 
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.searchSettingsForm = this.formBuilder.group({
        searchKeyword: ['', Validators.required]
    });
  }

  submitSearch(searchKeyword) {
    this.globalVar.settingsSearch({page: 0, urlFacets: this.globalVar.urlFacets, sort: '', keyword: searchKeyword});
  }

  openAccountModal(data) {
    this.globalVar.showAccountModal(data);
  }

  openClientModal(data) {
    this.globalVar.showClientModal(data);
  }

  openConceptModal(data) {
    this.globalVar.showConceptModal(data);
  }

  openHelpBubbleModal(data) {
    this.globalVar.showHelpBubbleModal(data);
  }
}
