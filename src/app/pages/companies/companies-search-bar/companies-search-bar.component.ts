import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {SearchService} from '../../../services/search/search.service';

declare var $: any;

@Component({
  selector: 'app-companies-search-bar',
  templateUrl: './companies-search-bar.component.html',
  styleUrls: ['./companies-search-bar.component.css']
})
export class CompaniesSearchBarComponent implements OnInit {

  @ViewChild('searchField') searchField: ElementRef;

  _autoCollapseWidth: any = 1100;
  windowWidth: any = window.innerWidth;

  searchCompaniesForm: FormGroup;

  _queryJson: any;

  constructor(private formBuilder: FormBuilder, private globalVar: GlobalVariablesService, private search: SearchService) {
  }

  ngOnInit() {
    this.searchCompaniesForm = this.formBuilder.group({
      searchRequest: ['', Validators.required]
    });
    this.globalVar.windowWidthChangedCompaniesEvent.subscribe((width: any) => {
      this.windowWidth = width;
    });
  }

  _toggleSidebar() {
    this.globalVar.sidebarStateChangedCompanies();
  }

  submitSearch() {
    if (this.searchCompaniesForm.valid) {
      const companiesSearchConditions = this.globalVar.getSearchConditionsCompanies();
      const body = this.search.addBucketKeyword(
        this.searchCompaniesForm.value.searchRequest, companiesSearchConditions[0], companiesSearchConditions
      );
      this._queryJson = body;
      this.globalVar.companiesListChanged(body);
      this.globalVar.scrollContentToTopCompanies();

      this.searchCompaniesForm.patchValue({
        searchRequest: ''
      });
      this.searchField.nativeElement.blur();
    }
  }

  openSaveQuery() {

  }

  openSavedSearch() {
    this.globalVar.showSavedSearchModal();
  }

  openExportToCsv() {

  }

  openSendByMail() {

  }

  openAddResume() {
    
  }

}
