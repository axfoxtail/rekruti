import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../services/api/api.service';
import {SearchService} from '../../../services/search/search.service';

@Component({
  selector: 'app-jobs-sidebar',
  templateUrl: './jobs-sidebar.component.html',
  styleUrls: ['./jobs-sidebar.component.css']
})
export class JobsSidebarComponent implements OnInit {

  pageTitle: any = 'Jobs';
  filtersList: any;
  jobsData: any;

  citiesList: any = [];
  statesList: any = [];
  countriesList: any = [];
  defaultList: any = [];

  cities = '';
  states = '';
  countries = '';
  default = '';

  addFilterOption: FormGroup;

  constructor(private globalVar: GlobalVariablesService,
        private ref: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        private api: RekrutiApiService,
        private search: SearchService) {

  }

  ngOnInit() {
    this.globalVar.jobsListEvent.subscribe((list: any) => {
      this.jobsData = list;
      this.filtersList = list.data.aggregations;
    });
    this.addFilterOption = this.formBuilder.group({
      addFacetsObject: [null],
      addFacets: [''],
      keywords: ['']
    });
  }

  selectBucket(bucket: any, filter: any) {
    console.log('selectBucket:--', bucket, filter, this.globalVar.getSearchConditionsJobs());
    const body = this.search.selectBucket(bucket, filter, this.globalVar.getSearchConditionsJobs());
    console.log('selectBucket:-body-', body);
    this.globalVar.jobsListChanged(body);
  }

  clearSearch() {
    this.globalVar.jobsListChanged(this.search.clearSearch());
  }

  addBucket(filter: any) {
    const body = this.search.addBucket(this.addFilterOption.value.addFacetsObject, filter, this.globalVar.getSearchConditionsJobs());
    this.globalVar.jobsListChanged(body);
  }

  addBucketKeyword(filter: any) {
    const body = this.search.addBucketKeyword(this.addFilterOption.value.keywords, filter, this.globalVar.getSearchConditionsJobs());
    this.globalVar.jobsListChanged(body);
  }

  addFilterOptionFunction(filter: any) {
    filter.isAddingFacet = !filter.isAddingFacet;
  }

  submitAddFilterOption(filter: any) {
    if ((this.addFilterOption.value.addFacets !== undefined && this.addFilterOption.value.addFacets !== '')) {
      this.addBucket(filter);
      this.clearAddNewOptionForm();

    } else if (this.addFilterOption.value.keywords !== undefined && this.addFilterOption.value.keywords !== '') {
      this.addBucketKeyword(filter);
      this.clearAddNewOptionForm();
    }
  }

  clearAddNewOptionForm() {
    this.addFilterOption.patchValue({
      addFacetsObject: null,
      addFacets: '',
      keywords: ''
    });
    this.cities = '';
    this.default = '';
    this.states = '';
    this.countries = '';
  }

  citiesChangeInputEvent() {
    this.api.geoCity_wSearchCombo(this.addFilterOption.value.addFacets).then(reply => {
      this.citiesList = reply.data;
    });
  }

  statesChangeInputEvent() {
    this.api.geoState_wSearchCombo(this.addFilterOption.value.addFacets).then(reply => {
      this.statesList = reply.data;
    });
  }

  countriesChangeInputEvent() {
    this.api.geoCountry_wSearchCombo(this.addFilterOption.value.addFacets).then(reply => {
      this.countriesList = reply.data;
    });
  }

  defaultChangeInputEvent(filterConceptTypeId: any) {
    this.api.concept_wSearchComboType(this.addFilterOption.value.addFacets +
      '&conceptTypeId=' + filterConceptTypeId).then(reply => {
      this.defaultList = reply.data;
      this.ref.detectChanges();
    });
  }

  optionHandleResultSelected(result: any, filterName: any) {
    this.addFilterOption.value.addFacets = result.name;
    this.addFilterOption.value.addFacetsObject = result;

    switch (filterName) {
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
