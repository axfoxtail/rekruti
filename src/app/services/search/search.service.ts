import {Injectable} from '@angular/core';

import {GlobalVariablesService} from '../global-variables/global-variables.service';
import {UtilsService} from '../utils/utils.service';

import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private globalVar: GlobalVariablesService, private utils: UtilsService) {
    }

    // return object if key property matches in array
    findItemByKey(array: any, key: any): any {
        _.forEach(array, (v, i) => {
            if (i === key) {
                return v;
            }
        });
        return null;
    }

    buildQuery(conditions?: any): any {
        var _router = window.location.href.split("#")[1];
        var _sort = 'lastUpdate';
        switch (_router) {
            case "/jobs": _sort = 'postedDate'; break;
            case "/company": _sort = 'score'; break;
            
            default: _sort = 'lastUpdate'; break;
        }
        const query = {
            from: 0,
            size: 20,
            sort: _sort
        };
        if (conditions === undefined || conditions === null) {
            return query;
        }
        _.forEach(conditions, (v, i) => {
            const facetName = v.name;
            _.forEach(v.buckets, (val, key) => {
                // is the bucket selected ?
                if (val.isSelected) {
                    // create the entry if does not exist
                    if (query[facetName] === undefined) {
                        query[facetName] = [];
                    }
                    if (this.findItemByKey(query[facetName], key) == null) {
                        query[facetName].push(val);
                    }
                }
            });
        });
        return query;
    }

    // get current page based on from and size
    getPage(from_: any, size: any) {
        return Math.ceil((from_ + 1) / size);
    }

    // return if there are selected facets
    hasBucketSelected(conditions: any) {
        return this.countBucketSelected(conditions) > 0;
    }

    // return number of selected facets
    countBucketSelected(conditions: any) {
        let count = 0;
        _.forEach(conditions, (v, i) => {
            _.forEach(v.buckets, (bucket, index) => {
                if (bucket.isSelected) {
                    count++;
                }
            });
        });
        return count;
    }

    // change the sort order
    setSort(query: any, sort: any) {
        query.sort = sort;
        // if we change the sort, we go back to page #1
        query.from = 0;
        return query;
    }

    // add bucket from keyword
    addBucketKeyword(keyword: any, facet: any, conditions: any) {
        const newItem = {id: keyword, name: keyword};
        return this.addBucket(newItem, facet, conditions);
    }

    // add bucket from a selected item
    addBucket(item: any, facet: any, conditions: any) {
        const key = item.id.toString();
        let bucket = this.findItemByKey(facet.buckets, key);
        if (bucket == null) {
            bucket = {
                label: item.name,
                key: key,
                isSelected: true,
                // set the default values
                radius: facet.hasRadius ? 25 : null,
                logicalOperator: facet.hasLogicalOperator ? facet.defaultLogicalOperator : null,
                timeline: facet.hasTimeline ? 'current' : null,
                experienceMin: facet.hasExperience ? 0 : null,
                experienceMax: facet.hasExperience ? 60 : null
            };
            facet.buckets.push(bucket);
        } else {
            bucket.isSelected = true;
        }
        facet.isAddingFacet = false;
        return this.buildQuery(conditions);
    }

    // select a bucket, apply default values
    selectBucket(bucket: any, facet: any, conditions: any) {
        if (bucket.isSelected) {
            // set the default values
            bucket.radius = facet.hasRadius ? 25 : null;
            bucket.logicalOperator = facet.hasLogicalOperator ? facet.defaultLogicalOperator : null;
            bucket.timeline = facet.hasTimeline ? 'current' : null;
            bucket.experienceMin = facet.hasExperience ? 0 : null;
            bucket.experienceMax = facet.hasExperience ? 60 : null;
        }
        return this.buildQuery(conditions);
    }

    // clear everything
    clearSearch() {
        return this.buildQuery();
    }

    // unselect a bucket
    removeBucket(bucket: any, conditions: any) {
        bucket.isSelected = false;
        return this.buildQuery(conditions);
    }


    // employers start
    changeCheckedFacetsEmployers(bool: any, key: any, facetName: any, isMore: any) {
        const dataCheckFacets = this.globalVar.getDataCheckFacetsEmployers();
        this.globalVar.setDataCheckFacetsEmployers(this.utils.setFacet(bool, key, facetName, dataCheckFacets, isMore));
        this.globalVar.setUrlFacetsEmployers(this.globalVar.getDataCheckFacetsEmployers());
        this.globalVar.setCurrentPageEmployers(0);
        this.globalVar.setRequestBodyEmployers('', 0, 'relevancy');
        this.globalVar.employersListChanged();
    }

    addNewOptionToSelectedFiltersEmployers(addFacets: any, filtersList: any, filter: any) {
        const key = addFacets;
        _.forEach(filtersList, (value, i) => {
            if (value.name === filter.name) {
                const c = [];
                _.forEach(value.buckets, (v, k) => {
                    if (v.key === key) {
                        v['isSelected'] = true;
                        this.changeCheckedFacetsEmployers(true, v.key, filter.name, false);
                    }
                    c.push(v.key);
                });
                if (c.indexOf(key) === -1) {
                    value.buckets.push({key: key, doc_count: null, isSelected: true});
                    this.changeCheckedFacetsEmployers(true, addFacets, filter.name, true);
                }
            }
        });
    }

    clearSearchEmployers() {
        const dataCheckFacets = this.globalVar.getDataCheckFacetsEmployers();
        _.forEach(dataCheckFacets, function (v, i) {
            v.key = [];
        });
        this.globalVar.setDataCheckFacetsEmployers(dataCheckFacets);
        this.globalVar.setCurrentPageEmployers(0);
        this.globalVar.setRequestBodyEmployers('', 0, 'relevancy');
        this.globalVar.setUrlFacetsEmployers([]);
        this.globalVar.employersListChanged();
    }
    // employers end
}
