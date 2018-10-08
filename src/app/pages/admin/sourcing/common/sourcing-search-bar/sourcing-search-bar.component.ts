import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../../../services/api/api.service';


@Component({
  selector: 'app-sourcing-search-bar',
  templateUrl: './sourcing-search-bar.component.html',
  styleUrls: ['./sourcing-search-bar.component.css']
})
export class SourcingSearchBarComponent implements OnInit {

	_router = window.location.href.split("admin/sourcing/")[1];
	searchSourcingForm : FormGroup
	searchKeyword : any = '';

  constructor(private formBuilder: FormBuilder, 
							private globalVar: GlobalVariablesService, 
							private api: RekrutiApiService,
							private spinner: NgxSpinnerService) { }

  ngOnInit() {
  	this.searchSourcingForm = this.formBuilder.group({
        searchKeyword: ['', Validators.required]
    });
  }

  submitSearch(searchKeyword) {
  	this.globalVar.sourcingSearch({page: 0, urlFacets: this.globalVar.urlFacets, sort: '', keyword: searchKeyword});
  }
}
