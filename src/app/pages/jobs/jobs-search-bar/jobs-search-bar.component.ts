import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {SearchService} from '../../../services/search/search.service';

declare var $: any;

@Component({
  selector: 'app-jobs-search-bar',
  templateUrl: './jobs-search-bar.component.html',
  styleUrls: ['./jobs-search-bar.component.css']
})
export class JobsSearchBarComponent implements OnInit {

  @ViewChild('searchField') searchField: ElementRef;

  _autoCollapseWidth: any = 1100;
  windowWidth: any = window.innerWidth;

  searchJobsForm: FormGroup;

  _queryJson: any;

  constructor(private formBuilder: FormBuilder, private globalVar: GlobalVariablesService, private search: SearchService) {
  }

  ngOnInit() {
    this.searchJobsForm = this.formBuilder.group({
      searchRequest: ['', Validators.required]
    });
    this.globalVar.windowWidthChangedJobsEvent.subscribe((width: any) => {
      this.windowWidth = width;
    });
  }

  _toggleSidebar() {
    this.globalVar.sidebarStateChangedJobs();
  }

  submitSearch() {
    if (this.searchJobsForm.valid) {
      const jobsSearchConditions = this.globalVar.getSearchConditionsJobs();
      const body = this.search.addBucketKeyword(
        this.searchJobsForm.value.searchRequest, jobsSearchConditions[0], jobsSearchConditions
      );
      this._queryJson = body;
      this.globalVar.jobsListChanged(body);
      this.globalVar.scrollContentToTopJobs();

      this.searchJobsForm.patchValue({
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
