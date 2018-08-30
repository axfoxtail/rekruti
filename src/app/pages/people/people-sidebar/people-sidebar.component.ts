import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { RekrutiApiService } from '../../../services/api/api.service';
import { SearchService } from '../../../services/search/search.service';

@Component({
  selector: 'app-people-sidebar',
  templateUrl: './people-sidebar.component.html',
  styleUrls: ['./people-sidebar.component.css']
})
export class PeopleSidebarComponent implements OnInit {
    
    pageTitle:string = 'People';
    filtersList:any;
    peopleData:any;
    
    citiesList:any=[];
    statesList:any=[];
    countriesList:any=[];
    defaultList:any=[];
    
    cities = '';
    states = '';
    countries = '';
    default = '';
    
    addFilterOption:FormGroup;

    constructor(private globalVar:GlobalVariablesService, 
        private ref: ChangeDetectorRef, 
        private formBuilder: FormBuilder, 
        private api:RekrutiApiService, 
        private search:SearchService) {
            
    }

    ngOnInit() {
        this.globalVar.peopleListEvent.subscribe((list:any) => {
            this.peopleData = list;
            this.filtersList = list.data.aggregations;
        });
        this.addFilterOption = this.formBuilder.group({
            addFacetsObject: [null],
            addFacets: [''],
            keywords: ['']
        });
    }
    
    selectBucket(bucket:any, filter:any) {
        bucket.isSelected = !bucket.isSelected;
        var body = this.search.selectBucket(bucket, filter, this.globalVar.getSearchConditionsPeople());
        this.globalVar.peopleListChanged(body);
    }
    
    clearSearch() {
        this.globalVar.peopleListChanged(this.search.clearSearch());
    }
    
    addBucket(filter:any) {
        var body = this.search.addBucket(this.addFilterOption.value.addFacetsObject, filter, this.globalVar.getSearchConditionsPeople());
        this.globalVar.peopleListChanged(body);
    }
    
    addBucketKeyword(filter:any) {
        var body = this.search.addBucketKeyword(this.addFilterOption.value.keywords, filter, this.globalVar.getSearchConditionsPeople());
        this.globalVar.peopleListChanged(body);
    }
    
    addFilterOptionFunction(filter:any) {
        filter.isAddingFacet = !filter.isAddingFacet;
    }
    
    submitAddFilterOption(filter:any) {
        if((this.addFilterOption.value.addFacets !== undefined && this.addFilterOption.value.addFacets !== "")) {
            this.addBucket(filter);
            this.clearAddNewOptionForm();
            
        } else if(this.addFilterOption.value.keywords !== undefined && this.addFilterOption.value.keywords !== "") {
            this.addBucketKeyword(filter);
            this.clearAddNewOptionForm();
        }
    }
    
    clearAddNewOptionForm() {
        this.addFilterOption.patchValue({
            addFacetsObject: null,
            addFacets: "",
            keywords: ""
        });
        this.cities = "";
        this.default = "";
        this.states = "";
        this.countries = "";
    }
    
    citiesChangeInputEvent() {
        this.api.getConceptComboAPI('/geoCity/wSearchCombo?keyword=' + this.addFilterOption.value.addFacets).then(reply => {
            this.citiesList = reply.data;
        });
    }
    statesChangeInputEvent() {
        this.api.getConceptComboAPI('/geoState/wSearchCombo?keyword=' + this.addFilterOption.value.addFacets).then(reply => {
            this.statesList = reply.data;
        });
    }
    countriesChangeInputEvent() {
        this.api.getConceptComboAPI('/geoCountry/wSearchCombo?keyword=' + this.addFilterOption.value.addFacets).then(reply => {
            this.countriesList = reply.data;
        });
    }
    defaultChangeInputEvent(filterConceptTypeId:any) {
        this.api.getConceptComboAPI('/concept/wSearchComboType?search=' + this.addFilterOption.value.addFacets + '&conceptTypeId=' + filterConceptTypeId).then(reply => {
            this.defaultList = reply.data;
            this.ref.detectChanges();
        });
    }
 
    optionHandleResultSelected(result:any, filterName:any) {
        this.addFilterOption.value.addFacets = result.name;
        this.addFilterOption.value.addFacetsObject = result;
        
        switch(filterName) {
            case 'cities':
                this.cities = result.name;
                break;
            case 'states':
                this.states = result.name;
                break;
            case 'countries':
                this.countries = result.name;
                break;
            default:
                this.default = result.name;
            
        }
    }

}
