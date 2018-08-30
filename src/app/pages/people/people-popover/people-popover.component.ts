import { Component, OnInit, Input } from '@angular/core';
import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { SearchService } from '../../../services/search/search.service';

declare var $:any;
import * as _ from "lodash";

@Component({
  selector: 'app-people-popover',
  templateUrl: './people-popover.component.html',
  styleUrls: ['./people-popover.component.css']
})
export class PeoplePopoverComponent implements OnInit {
    
    @Input('popoverFilter') filter:any;
    @Input('popoverBucketKey') bucketKey:any;
    @Input('popoverBucketId') bucketId:any;

    constructor(private globalVar:GlobalVariablesService, private search:SearchService) { }

    ngOnInit() {
        $( "aside" ).scroll(function() {
            console.log('scroll');
        });
    }
    
    changeInfoFacets(field:string, event:any) {
        var searchConditions = this.globalVar.getSearchConditionsPeople();
        var fieldName = '';
        field === 'valueTimeline' ? fieldName = 'timeline' : (field === 'valueLogicalOperator' ? fieldName = 'logicalOperator' : (field === 'min_exp' ? fieldName = 'experienceMin'
                : (field === 'max_exp' ? fieldName = 'experienceMax' : fieldName = 'radius')));
        var index = _.findIndex(searchConditions, { 'name': this.filter.name });
        searchConditions[index].buckets[this.bucketId][fieldName] = event.target.value;
        this.globalVar.setSearchConditionsPeople(searchConditions);
    }
    
    saveInfoFacets() { 
        this.globalVar.peopleListChanged(this.search.buildQuery(this.globalVar.getSearchConditionsPeople()));
    }

}
