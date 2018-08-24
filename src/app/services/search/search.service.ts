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
    changeCheckedFacetsEmployers(bool:any, key:any, facetName:any, isMore:any) {
        var dataCheckFacets = this.globalVar.getDataCheckFacetsEmployers();
        this.globalVar.setDataCheckFacetsEmployers(this.utils.setFacet(bool, key, facetName, dataCheckFacets, isMore));
        this.globalVar.setUrlFacetsEmployers(this.globalVar.getDataCheckFacetsEmployers());
        this.globalVar.setCurrentPageEmployers(0);
        this.globalVar.setRequestBodyEmployers('', 0, 'relevancy');
        this.globalVar.employersListChanged();
    }
    
    addNewOptionToSelectedFiltersEmployers(addFacets:any, filtersList:any, filter:any) {
        var key = addFacets;
        _.forEach(filtersList, (value, i) => {
            if (value.name === filter.name) {
                var c = [];
                _.forEach(value.buckets, (v, k) => {
                    if (v.key === key) {
                        v["isSelected"] = true;
                        this.changeCheckedFacetsEmployers(true, v.key, filter.name, false);
                    }
                    c.push(v.key);
                });
                if (c.indexOf(key) === -1) {
                    value.buckets.push({ key: key, doc_count: null, isSelected: true });
                    this.changeCheckedFacetsEmployers(true, addFacets, filter.name, true);
                }
            }
        });
    }
    
    clearSearchEmployers() {
        var dataCheckFacets = this.globalVar.getDataCheckFacetsEmployers();
        _.forEach(dataCheckFacets, function(v, i) {
            v.key = [];
        });
        this.globalVar.setDataCheckFacetsEmployers(dataCheckFacets);
        this.globalVar.setCurrentPageEmployers(0);
        this.globalVar.setRequestBodyEmployers('', 0, 'relevancy');
        this.globalVar.setUrlFacetsEmployers([]);
        this.globalVar.employersListChanged();
    }
    //employers end
    
    
    //people start
    keywordSearchPeople(searchRequest:any) {
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
        this.globalVar.setCurrentPagePeople(1);
        this.globalVar.setCurrentSearchFiltersPeople(currentActiveFilters);
        this.globalVar.peopleListChanged();
    }
    
    addNewOptionToSelectedFiltersPeople(filter:any, addFacetsObject:any) {
        let buckets = filter.buckets;
        var index = _.findIndex(buckets, (o) => { return o['key'] == addFacetsObject.id; });
        
        if(index === -1) {
            var obj = {};
            obj['key'] = String(addFacetsObject.id);
            obj['isSelected'] = true;
            obj['label'] = addFacetsObject.name;
            buckets.push(obj);
        } else {
            buckets[index].isSelected = true;
        }
        
        var currentActiveFilters = this.globalVar.getCurrentSearchFiltersPeople();
        var activeBuckets = _.filter(buckets, function (o) {return o.isSelected;});
        currentActiveFilters[filter.name] = _.map(activeBuckets, (bucket) => { 
            delete bucket['label'];
            delete bucket['isSelected'];
            return bucket;
        });
        currentActiveFilters.from = 0;
        this.globalVar.setCurrentPagePeople(1);
        this.globalVar.setCurrentSearchFiltersPeople(currentActiveFilters);
        this.globalVar.peopleListChanged();
    }
    
    selectCheckedFacetsPeople(bucket:any, filter:any) {
        var activeFilters = this.globalVar.getCurrentSearchFiltersPeople();
        
        if(bucket.isSelected) {
            var obj = {key: bucket.key};
            if(activeFilters[filter.name] === undefined) 
                activeFilters[filter.name] = [];
            activeFilters[filter.name].push(obj);
        } else {
            if(activeFilters[filter.name] !== undefined) {
                var arr = activeFilters[filter.name].filter((e=> { return e.key !== bucket.key; }));
                if (arr.length > 0) {
                    activeFilters[filter.name] = arr;
                } else delete activeFilters[filter.name];
            }
        }
        activeFilters.from = 0;
        this.globalVar.setCurrentPagePeople(1);
        this.globalVar.setCurrentSearchFiltersPeople(activeFilters);
        this.globalVar.peopleListChanged();
    }
    
    clearSearchPeople() {
        var body = {
            from: 0,
            sort: "lastUpdate"
        };
        this.globalVar.setCurrentPagePeople(1);
        this.globalVar.setCurrentSearchFiltersPeople(body);
        this.globalVar.peopleListChanged();
    }
    //people end
}
