import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {SearchService} from '../../../services/search/search.service';

declare var $: any;

@Component({
  selector: 'app-people-search-bar',
  templateUrl: './people-search-bar.component.html',
  styleUrls: ['./people-search-bar.component.css']
})
export class PeopleSearchBarComponent implements OnInit {

  @ViewChild('searchField') searchField: ElementRef;

  _autoCollapseWidth: any = 1100;
  windowWidth: any = window.innerWidth;

  searchPeopleForm: FormGroup;

  _queryJson: any;

  constructor(private formBuilder: FormBuilder, private globalVar: GlobalVariablesService, private search: SearchService) {
  }

  ngOnInit() {
    this.searchPeopleForm = this.formBuilder.group({
      searchRequest: ['', Validators.required]
    });
    this.globalVar.windowWidthChangedPeopleEvent.subscribe((width: any) => {
      this.windowWidth = width;
    });
  }

  _toggleSidebar() {
    this.globalVar.sidebarStateChangedPeople();
  }

  submitSearch() {
    if (this.searchPeopleForm.valid) {
      const peopleSearchConditions = this.globalVar.getSearchConditionsPeople();
      const body = this.search.addBucketKeyword(
        this.searchPeopleForm.value.searchRequest, peopleSearchConditions[0], peopleSearchConditions
      );
      this._queryJson = body;
      this.globalVar.peopleListChanged(body);
      this.globalVar.scrollContentToTopPeople();

      this.searchPeopleForm.patchValue({
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
