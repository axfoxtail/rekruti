import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { ApiService } from '../../../services/api/api.service';

declare var $:any;
import * as _ from "lodash";

@Component({
  selector: 'app-people-sidebar',
  templateUrl: './people-sidebar.component.html',
  styleUrls: ['./people-sidebar.component.css']
})
export class PeopleSidebarComponent implements OnInit, AfterViewInit {
    
    filtersList:any;
    peopleData:any;
    
    currentActiveFilter:any;
    currentActiveFilterOption:any;
    currentActiveFilterOptionKey:any;
    
    isReplyFormOpen:boolean = false;
    
    _dataFacet:any;
    
    citiesList:any=[];
    statesList:any=[];
    countriesList:any=[];
    defaultList:any=[];
    
    cities = '';
    states = '';
    countries = '';
    default = '';
    
    addFilterOption:FormGroup;

    constructor(private globalVar:GlobalVariablesService, private ref: ChangeDetectorRef, private formBuilder: FormBuilder, private api:ApiService) {
        this.currentActiveFilter = null;
        this.currentActiveFilterOption = null;
        this.currentActiveFilterOptionKey = null;
        
        this.initDataFacet();
    }
    
    initDataFacet() {
        // data default filter facets
        this._dataFacet = {
            domains: {
                'key': '',
                'timeline': 'currentOrPast',
                'logicalOperator': 'and',
                'experienceMin': 0,
                'experienceMax': 100,
            },
            jobtitles: {
                'key': '',
                'timeline': 'currentOrPast',
                'logicalOperator': 'and',
                'experienceMin': 0,
                'experienceMax': 100,
            },
            degrees: {
                'key': '',
                'timeline': 'currentOrPast',
                'logicalOperator': 'and',
            },
            cities: {
                'key': '',
                'timeline': 'currentOrPast',
                'logicalOperator': 'and',
                'radius': 25
            },
            states: {
                'key': '',
                'timeline': 'currentOrPast',
                'logicalOperator': 'and',
            },
            lists: {
                'key': '',
                'logicalOperator': 'and',
            },
            keywords: {
                'key': '',
                'logicalOperator': 'and',
            },
            countries: {
                key: '',
                timeline: 'currentOrPast',
                logicalOperator: 'and'
            }
        };
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
    
    ngAfterViewInit() {
        var popOverSettings = {
            placement: 'right',
            container: 'body',
            html: true,
            selector: '[rel="popover"]',
            boundary: 'window',
            delay: { "show": 150, "hide": 100 }
        };
//        
        $('body').popover(popOverSettings).on("show.bs.popover", (e=>{
            $("[rel='popover']").not(e.target).popover("hide");
            $(".popover").remove();
        }));
        $('body').on("click", (e=> {
            var container = $(".popover");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.popover("hide");
                container.remove();
            }
        }));
        $(document).on('change','#valueTimeline', (e)=>{
            this.changeInfoFacets('valueTimeline', e.target.value);
        });
        $(document).on('change','#valueLogicalOperator', (e)=>{
            this.changeInfoFacets('valueLogicalOperator', e.target.value);
        }); 
        $(document).on('change','#min_exp', (e)=>{
            this.changeInfoFacets('min_exp', e.target.value);
        });
        $(document).on('change','#max_exp', (e)=>{
            this.changeInfoFacets('max_exp', e.target.value);
        });
        $(document).on('change','#radius', (e)=>{
            this.changeInfoFacets('radius', e.target.value);
        });
        $(document).on('click','#popover-submit-button', (e)=>{
            this.saveInfoFacets();
            $('ng-sidebar-container').click();
        });
    }

    openOptionsPopover(key:any, id:any, filter:any) {
        this.currentActiveFilter = filter;
        this.currentActiveFilterOption = id;
        this.currentActiveFilterOptionKey = key;
        
        var popover = $("body").data('bs.popover');
        
        popover.config.content = () => {
            var str = '<div id="popover-content">' + 
                '<div ' + ((this.currentActiveFilter !== undefined && this.currentActiveFilter !== null) ? '' : 'hidden') + ' class="popover-content-div">' +
                    '<h3>' + filter.buckets[id].label + '</h3>' +
                    '<div ' + ((this.currentActiveFilter.HasTimeline === true) ? '' : 'hidden') + ' class="form-group timeline-div">' +
                        '<label class="timeline-title">Timeline</label>' + 
                        '<select class="form-control timeline-select" name="valueTimeline" id="valueTimeline">' + 
                            '<option ' + ((filter.buckets[id].timeline === null) ? 'selected' : '') + ' value="null">Current or Past</option>' +
                            '<option ' + ((filter.buckets[id].timeline === 'past') ? 'selected' : '') + ' value="past">Past</option>' + 
                            '<option ' + ((filter.buckets[id].timeline === 'current') ? 'selected' : '') + ' value="current">Current</option>' + 
                        '</select>' + 
                    '</div>' + 
                    '<div ' + ((this.currentActiveFilter.HasLogicalOperator === true) ? '' : 'hidden') + ' class="form-group logical-operator-div">' + 
                        '<label class="logical-operator-title">Logical Operator</label>' + 
                        '<select name="valueLogicalOperator" class="form-control logical-operator-select" id="valueLogicalOperator">' + 
                            '<option ' + ((filter.buckets[id].logicalOperator === 'and') ? 'selected' : '') + ' value="and">And</option>' + 
                            '<option ' + ((filter.buckets[id].logicalOperator === 'or') ? 'selected' : '') + ' value="or">Or</option>' + 
                            '<option ' + ((filter.buckets[id].logicalOperator === 'not') ? 'selected' : '') + ' value="not">Not</option>' + 
                        '</select>' +
                    '</div>' + 
                    '<div ' + ((this.currentActiveFilter.HasExperience === true) ? '' : 'hidden') + ' class="form-group experience-div">' + 
                        '<label class="experience-title">Experience (years)</label>' + 
                        '<div class="row experience-row">' + 
                            '<div class="col-sm-6 col-xs-12  experience-col">' + 
                                '<input type="number" name="min_exp" class="form-control experience-input" placeholder="Min" id="min_exp" value="' + (filter.buckets[id].experienceMin !== undefined ? filter.buckets[id].experienceMin : '') + '">' +
                            '</div>' + 
                            '<div class="col-sm-6 col-xs-12 experience-col">' + 
                                '<input type="number" name="max_exp" class="form-control experience-input" placeholder="Max" id="max_exp" value="' + (filter.buckets[id].experienceMax !== undefined ? filter.buckets[id].experienceMax : '') + '">' +
                            '</div>' + 
                        '</div>' + 
                    '</div>' +
                    '<div ' + ((this.currentActiveFilter.HasRadius === true && this.currentActiveFilter.name === 'cities') ? '' : 'hidden') + ' class="form-group radius-div">' + 
                        '<label class="radius-title">Radius (in miles)</label>' + 
                        '<input class="form-control radius-input" type="number" min="0" name="radius" id="radius" value="' + (filter.buckets[id].radius !== undefined ? filter.buckets[id].radius : '') + '">' + 
                    '</div>' + 
                    '<div class="submit-button-div">' + 
                        '<button class="btn btn-primary popover-submit-button" id="popover-submit-button">Update Search</button>' + 
                    '</div>' + 
                '</div></div>';
                return str;
        };
    }
    
    clearSearch() {
        var body = {
            from: 0,
            sort: "lastUpdate"
        };
        this.globalVar.setCurrentSearchFiltersPeople(body);

        this.initDataFacet();
        this.globalVar.peopleListChanged();
    }
    
    selectCheckedFacets(bucket:any, filter:any) {
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
                this.initDataFacet();
            }
        }
        activeFilters.from = 0;
        this.globalVar.setCurrentSearchFiltersPeople(activeFilters);
        this.globalVar.peopleListChanged();
    }
    
    changeInfoFacets(field:string, value:any) {
        var activeFilters = this.globalVar.getCurrentSearchFiltersPeople();
        var fieldName = '';
        field === 'valueTimeline' ? fieldName = 'timeline' : (field === 'valueLogicalOperator' ? fieldName = 'logicalOperator' : (field === 'min_exp' ? fieldName = 'experienceMin'
                : (field === 'max_exp' ? fieldName = 'experienceMax' : fieldName = 'radius')));
        var index = _.findIndex(activeFilters[this.currentActiveFilter.name], { 'key': this.currentActiveFilterOptionKey });
        activeFilters[this.currentActiveFilter.name][index][fieldName] = value;
    }
    
    saveInfoFacets() { 
        var activeFilters = this.globalVar.getCurrentSearchFiltersPeople();
        activeFilters.from = 0;
        this.globalVar.setCurrentSearchFiltersPeople(activeFilters);
        this.globalVar.peopleListChanged();
    }
    
    addFilterOptionFunction(filter:any) {
        if(filter.isReplyFormOpen === undefined) {
            filter.isReplyFormOpen = true;
        } else filter.isReplyFormOpen = !filter.isReplyFormOpen;
    }
    submitAddFilterOption(filter:any) {
        if((this.addFilterOption.value.addFacets !== undefined && this.addFilterOption.value.addFacets !== "")) {
            let buckets = filter.buckets;

            var index = _.findIndex(buckets, (o) => { return o['key'] == this.addFilterOption.value.addFacetsObject.id; });

            if(index === -1) {
                var obj = {};
                obj['key'] = String(this.addFilterOption.value.addFacetsObject.id);
                obj['isSelected'] = true;
                obj['label'] = this.addFilterOption.value.addFacetsObject.name;
                buckets.push(obj);
            } else {
                buckets[index].isSelected = true;
            }

            var currentActiveFilters = this.globalVar.getCurrentSearchFiltersPeople();
            var activeBuckets = _.filter(buckets, function (o) {return o.isSelected;});
            currentActiveFilters[filter.name] = _.map(activeBuckets, (bucket) => { return {'key': bucket['key']};});
            currentActiveFilters.from = 0;

            filter.isReplyFormOpen = false;
            this.addFilterOption.patchValue({
                addFacetsObject: null,
                addFacets: "",
                keywords: ""
            });
            this.cities = "";
            this.default = "";
            this.states = "";
            this.countries = "";
            this.globalVar.setCurrentSearchFiltersPeople(currentActiveFilters);
            this.globalVar.peopleListChanged();
            
        } else if(this.addFilterOption.value.keywords !== undefined && this.addFilterOption.value.keywords !== "") {
            var currentActiveFilters = this.globalVar.getCurrentSearchFiltersPeople();
            var searchLowerCase = this.addFilterOption.value.keywords.toLowerCase();
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
            filter.isReplyFormOpen = false;
            this.addFilterOption.patchValue({
                addFacetsObject: null,
                addFacets: "",
                keywords: ""
            });
            this.cities = "";
            this.default = "";
            this.states = "";
            this.countries = "";
            this.globalVar.setCurrentSearchFiltersPeople(currentActiveFilters);
            this.globalVar.peopleListChanged();
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
