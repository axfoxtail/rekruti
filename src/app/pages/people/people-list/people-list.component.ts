import { Component, OnInit, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { environment } from "../../../../environments/environment";

import {PaginationInstance} from 'ngx-pagination';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';

declare var $:any;
import * as _ from "lodash";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    
    @ViewChildren('list') listItems: any;
    
    urlImg:any = environment.endpoint + '/personDocument/wDownload?storeGuid=';
    
    public maxSize: number = 8;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = false;
    public config: PaginationInstance = {
        id: 'server',
        itemsPerPage: 20,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page'
    };
    
    currentUserData:any;
    peopleData:any = {};
    peopleList:any = [];
    searchAggregations:any = [];
    currentActiveItemInPeopleList:any;
    
    searchSortArray:any = [];
    dataCheckFacets:any = [];
    searchSort:any = 'lastUpdate';
    showResetButtonVar:boolean;

    constructor(private globalVar:GlobalVariablesService, private ref: ChangeDetectorRef) {
        this.peopleData = {
            total:0,
            hits:[] 
        }
        this.currentActiveItemInPeopleList = {
            id:null
        }
        this.searchSortArray = [
            { value: 'lastUpdate', label: 'Last Update' },
            { value: 'readyForChangeIndex', label: 'Ready For Change Index' },
            { value: 'relocationIndex', label: 'Relocation Index' },
        ];
        this.dataCheckFacets = [
            { "facetName": "cityName", "isComputed": true, "key": [] },
            { "facetName": "stateName", "isComputed": true, "key": [] },
            { "facetName": "concept65", "isComputed": true, "key": [] },
            { "facetName": "concept172", "isComputed": true, "key": [] }
        ];
    }

    ngOnInit() {
        this.currentUserData = this.globalVar.getCookieCurrentUser();
        this.showResetButtonVar = this.showResetButton();
        
        this.globalVar.peopleListEvent.subscribe((list:any) => {
            this.peopleData = list.data;
            this.searchAggregations = list.data.aggregations;
            this.peopleList = this.peopleData.hits;
            this.ref.detectChanges();
        });
        
        $('#detailsModal').on('hide.bs.modal', (e=> {
            for (var i = 0; i < this.listItems._results.length; i++) {
                this.listItems._results[i].nativeElement.className = "people-list-td";
            }
        }));
        
    }
    
    updatePeopleList(start:any) {
        var currentActiveFilters = this.globalVar.getCurrentSearchFiltersPeople();
        currentActiveFilters.from = start;
        currentActiveFilters.sort = this.searchSort;
        
        this.globalVar.setCurrentSearchFiltersPeople(currentActiveFilters);
        this.globalVar.peopleListChanged();
    }
    
    onPageChange(number: number) {
        this.config.currentPage = number;
        var start = this.calcFromWhichItem(number);
        this.updatePeopleList(start);
        this.globalVar.scrollPeopleContentToTop();
    }
    
    calcFromWhichItem(page: number):any {
        return (page - 1) * this.config.itemsPerPage;
    }
    
    openDetailsModal(item:any) {
        this.currentActiveItemInPeopleList = item;
    }
    checkActiveItem(id:any) {
        if(this.currentActiveItemInPeopleList.id === id)
            return 'active';
        return '';
    }
    
    searchSortMain() {
        this.config.currentPage = 1;
        this.updatePeopleList(0);
    }
    
    changeCheckedFacets(key:any, facetName:any) {
        var currentActiveFilters = this.globalVar.getCurrentSearchFiltersPeople();
        var currentFilter = currentActiveFilters[facetName];
        var currentFilterOption = currentFilter.filter((e=> { return e.key !== key; }));
        currentActiveFilters[facetName] = currentFilterOption;
        this.updatePeopleList(0);
    }
    
    showResetButton() {
        var data;
        var array = [];
        if (this.dataCheckFacets.length > 0) {
            _.forEach(this.dataCheckFacets, function(value, key) {
                if (value.key.length) 
                    array.push(value.facetName);
            });
        }
        if (array.length > 0) {
            data = true;
        } else {
            data = false;
        }
        return data;
    }
    
    resetBuckets() {
        
    }

}
