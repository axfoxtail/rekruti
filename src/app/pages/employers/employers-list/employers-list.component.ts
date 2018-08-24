import { Component, OnInit, ViewChildren } from '@angular/core';
import { environment } from "../../../../environments/environment";

import {PaginationInstance} from 'ngx-pagination';
import { NgxSpinnerService } from 'ngx-spinner';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { ApiService } from '../../../services/api/api.service';
import { SearchService } from '../../../services/search/search.service';

declare var $:any;
import * as _ from "lodash";

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.css']
})
export class EmployersListComponent implements OnInit {
    
    @ViewChildren('list') listItems: any;
    
    urlImg:any = environment.endpoint + '/personDocument/wDownload?storeGuid=';
    
    public maxSize: number = 8;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = false;
    public config: PaginationInstance = {
        id: 'server',
        itemsPerPage: 20,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };
    
    currentUserData:any;
    employersData:any = {};
    employersList:any = [];
    activeFiltersList:any = [];
    currentActiveItemInEmployersList:any;

    constructor(private globalVar:GlobalVariablesService, private api:ApiService, private spinner: NgxSpinnerService, private search:SearchService) {
        this.employersData = {
            total:0,
            hits:[] 
        }
        this.currentActiveItemInEmployersList = {
            id:null
        }
    }

    ngOnInit() {
        this.currentUserData = this.globalVar.getCookieCurrentUser();
        this.globalVar.employersListEvent.subscribe((list:any) => {
            this.employersData = list.data;
            this.activeFiltersList = list.data.aggregations;
            this.employersList = this.employersData.hits;
            this.config.currentPage = this.globalVar.getCurrentPageEmployers();
        });
        
        $('#employersDetailsModal').on('hide.bs.modal', (e=> {
            for (var i = 0; i < this.listItems._results.length; i++) {
                this.listItems._results[i].nativeElement.className = "employers-list-td";
            }
        }));
    }
    
    updateEmployersList(start:any) {
        this.globalVar.setRequestBodyEmployers('', start, 'relevancy');
        this.globalVar.employersListChanged();
    }
    
    onPageChange(number: number) {
        this.config.currentPage = number;
        this.globalVar.setCurrentPageEmployers(this.config.currentPage);
        var start = this.calcFromWhichItem(number);
        this.updateEmployersList(start);
        this.globalVar.scrollContentToTopEmployers();
    }
    
    calcFromWhichItem(page: number):any {
        return (page - 1) * this.config.itemsPerPage;
    }
    
    openDetailsModal(item:any) {
        this.currentActiveItemInEmployersList = item;
    }
    
    checkActiveItem(id:any) {
        if(this.currentActiveItemInEmployersList.id === id)
            return 'active';
        return '';
    }

}
