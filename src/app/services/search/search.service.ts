import { Injectable } from '@angular/core';

import { GlobalVariablesService } from '../global-variables/global-variables.service';
import { UtilsService } from '../utils/utils.service';

import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    constructor(private globalVar:GlobalVariablesService, private utils:UtilsService) { }
    
    //employers start
    changeCheckedFacets(bool:any, key:any, facetName:any, isMore:any) {
        var dataCheckFacets = this.globalVar.getDataCheckFacets();
        this.globalVar.setDataCheckFacets(this.utils.setFacet(bool, key, facetName, dataCheckFacets, isMore));
        this.globalVar.setUrlFacets(this.globalVar.getDataCheckFacets());
        this.globalVar.setEmployersRequestBody('', 0, 'relevancy');
        this.globalVar.employersListChanged();
        this.globalVar.setShowResetButtonVar(this.showResetButton());
    }
    
    showResetButton() {
        var data;
        var array = [];
        var dataCheckFacets = this.globalVar.getDataCheckFacets();
        if (dataCheckFacets.length > 0) {
            _.forEach(dataCheckFacets, function(v, i) {
                if (v.key.length) {
                    array.push(v.facetName);
                }
            });
        }
        if (array.length > 0) {
            data = true;
        } else {
            data = false;
        }
        return data;
    }
    
    clearSearch() {
        var dataCheckFacets = this.globalVar.getDataCheckFacets();
        _.forEach(dataCheckFacets, function(v, i) {
            v.key = [];
        });
        this.globalVar.setDataCheckFacets(dataCheckFacets);
        this.globalVar.setEmployersRequestBody('', 0, 'relevancy');
        this.globalVar.setUrlFacets([]);
        this.globalVar.employersListChanged();
        this.globalVar.setShowResetButtonVar(this.showResetButton());
    }
    //employers end
    
    //people start
    keywordSearch(searchRequest:any) {
        var currentActiveFilters = this.globalVar.getCurrentSearchFiltersPeople();
        var searchLowerCase = searchRequest.toLowerCase();
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
    }
    //people end
}
