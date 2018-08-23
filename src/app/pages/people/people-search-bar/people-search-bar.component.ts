import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import * as _ from "lodash";

@Component({
  selector: 'app-people-search-bar',
  templateUrl: './people-search-bar.component.html',
  styleUrls: ['./people-search-bar.component.css']
})
export class PeopleSearchBarComponent implements OnInit {
    
    @ViewChild('searchField') searchField: ElementRef;
    
    _autoCollapseWidth:any = 1100;
    windowWidth:any = window.innerWidth;
    
    searchPeopleForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private globalVar:GlobalVariablesService) { }

    ngOnInit() {
        this.searchPeopleForm = this.formBuilder.group({
            searchRequest: ['', Validators.required]
        });
        this.globalVar.windowWidthChangedEvent.subscribe((width:any) => {
            this.windowWidth = width;
        });
    }
    
    _toggleSidebar() {
        this.globalVar.sidebarStateChanged();
    }
    
    submitSearch() {
        if(this.searchPeopleForm.valid) {
            var currentActiveFilters = this.globalVar.getCurrentSearchFiltersPeople();
            var searchLowerCase = this.searchPeopleForm.value.searchRequest.toLowerCase();
            var searchData = {key: searchLowerCase};

            if(currentActiveFilters.keywords === undefined) {
                currentActiveFilters.keywords = [];
                currentActiveFilters.keywords.push(searchData);
            } else {
                var index = _.findIndex(currentActiveFilters.keywords, (o) => { return o['key'] === searchLowerCase; });
                if(index === -1) {
                    currentActiveFilters.keywords.push(searchData);
                }
            }
            
            currentActiveFilters.from = 0;
            this.globalVar.setCurrentSearchFiltersPeople(currentActiveFilters);
            this.globalVar.peopleListChanged();
            
            this.searchPeopleForm.patchValue({
                searchRequest: ''
            });
            this.searchField.nativeElement.blur();
        }
    }

}
