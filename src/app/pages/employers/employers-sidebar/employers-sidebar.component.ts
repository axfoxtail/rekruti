import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { RekrutiApiService } from '../../../services/api/api.service';
import { SearchService } from '../../../services/search/search.service';

import * as _ from "lodash";

@Component({
  selector: 'app-employers-sidebar',
  templateUrl: './employers-sidebar.component.html',
  styleUrls: ['./employers-sidebar.component.css']
})
export class EmployersSidebarComponent implements OnInit {
    
    pageTitle:string = 'Employers';
    filtersList:any;
    employersData:any;
    addFilterOption:FormGroup;
    
    citiesList:any=[];
    statesList:any=[];
    countriesList:any=[];
    defaultList:any=[];
    
    cities = '';
    states = '';
    countries = '';
    default = '';

    constructor(private globalVar:GlobalVariablesService, private formBuilder: FormBuilder, private api:RekrutiApiService, private ref: ChangeDetectorRef, private search:SearchService) { }

    ngOnInit() {
        this.globalVar.employersListEvent.subscribe((list:any) => {
            this.employersData = list;
            this.filtersList = list.data.aggregations;
        });
        this.addFilterOption = this.formBuilder.group({
            addFacetsObject: [null],
            addFacets: [''],
            keywords: ['']
        });
    }
    
    isCheckedFacets(key) {
        var match;
        if (typeof key === 'undefined') {
            match = false;
        } else if (key) {
            match = key;
        } else {
            match = key;
        }
        return match;
    }
    
    addFilterOptionFunction(filter:any) {
        if(filter.isReplyFormOpen === undefined) {
            filter.isReplyFormOpen = true;
        } else filter.isReplyFormOpen = !filter.isReplyFormOpen;
    }
    
    submitAddFilterOption(filter:any) {
        if(this.addFilterOption.value.addFacetsObject) {
            this.search.addNewOptionToSelectedFiltersEmployers(this.addFilterOption.value.addFacets, this.filtersList, filter);
            
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
            case 'cityFormatted':
                this.cities = result.name;
                break;
            case 'stateFormatted':
                this.states = result.name;
                break;
            case 'country':
                this.countries = result.name;
                break;
            default:
                this.default = result.name;
            
        }
    }

}
