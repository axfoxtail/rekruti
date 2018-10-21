import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-concept-left-facets-bar',
  templateUrl: './concept-left-facets-bar.component.html',
  styleUrls: ['./concept-left-facets-bar.component.css']
})
export class ConceptLeftFacetsBarComponent implements OnInit {

  @Input() searchFacets;
  @Input() keyword;
  urlFacets : any = '';

  constructor(private globalVar: GlobalVariablesService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.initFacets();
  }

  initFacets() {
    
    var arrayFacets = [];
    this.searchFacets.forEach(function(filter) {
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
    this.urlFacets = this.globalVar.urlFacets;
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
    this.spinner.show();
    this.globalVar.urlFacets = this.urlFacets;
    this.globalVar.searchAttachConcept({page: 0, urlFacets: this.urlFacets, sort: '', keyword: this.keyword == null ? '' : this.keyword});
  }

}
