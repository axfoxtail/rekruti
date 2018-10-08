import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {GlobalVariablesService} from '../../../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-sourcing-sidebar',
  templateUrl: './sourcing-sidebar.component.html',
  styleUrls: ['./sourcing-sidebar.component.css']
})
export class SourcingSidebarComponent implements OnInit {
  titleSection = 'Sourcing';
  titleSectionUrl = '#/admin/sourcing';

  @Input() title;
  @Input() filtersList;
  @Input() keyword;
  urlFacets : any = '';
  //arrayFacets : any = [];

  constructor(private globalVar: GlobalVariablesService) { }

  ngOnInit() {
    this.initFacets();
  }

  initFacets() {
    
    var arrayFacets = [];
    this.filtersList.forEach(function(filter) {
      var bucket_arr = [];
      filter.buckets.forEach(function(bucket) {
        if(bucket.isSelected) {
          bucket_arr.push(bucket.key);
          //this.urlFacets += '&' + filter.name + '=' + bucket.key;
        }
      });
      if(bucket_arr.length){
        arrayFacets.push({'filter': filter.name, 'bucket': bucket_arr});
      }
    });

    // ------------ facets array stringify ------------ //
    var facetString = '';
    arrayFacets.forEach(function(facet) {
      facetString += '&' + facet.filter + '=';
      facet.bucket.forEach(function(bucket, index) {
        if(index){
          facetString += '|' + bucket;
        } else {
          facetString += bucket;
        }
      });
    });

    this.urlFacets = facetString;


    this.globalVar.urlFacets = this.urlFacets;
  }
  
  selectBucket(filterKey, bucket) {
    if(bucket.isSelected) {
      if(this.urlFacets.indexOf(filterKey) > 0){
        this.urlFacets = this.urlFacets.split(filterKey + '=').join(filterKey + '=' + bucket.key + '|');
      } else {
        this.urlFacets += '&' + filterKey + '=' + bucket.key;
      }
    } else {
      if(this.urlFacets.indexOf(filterKey) > 0){
        this.urlFacets = this.urlFacets.split(bucket.key).join('').split('=|').join('=').split('||').join('|');
      } else {
        this.urlFacets = this.urlFacets.split('&' + filterKey + '=' + bucket.key).join('');
      }

    }

    this.globalVar.urlFacets = this.urlFacets;
    this.globalVar.sourcingSearch({page: 0, urlFacets: this.urlFacets, sort: '', keyword: this.keyword == null ? '' : this.keyword});
  }
}
