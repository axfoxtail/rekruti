import { Component, OnInit, ViewChildren } from '@angular/core';

import {PaginationInstance} from 'ngx-pagination';
import { NgxSpinnerService } from 'ngx-spinner';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { ApiService } from '../../../services/api/api.service';

declare var $:any;

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.css']
})
export class EmployersListComponent implements OnInit {
    
    @ViewChildren('list') listItems: any;
    
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

    constructor(private globalVar:GlobalVariablesService, private api:ApiService, private spinner: NgxSpinnerService) {
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
            this.employersList = this.employersData.hits.slice(0, this.config.itemsPerPage);
        });
        
        $('#employersDetailsModal').on('hide.bs.modal', (e=> {
            for (var i = 0; i < this.listItems._results.length; i++) {
                this.listItems._results[i].nativeElement.className = "employers-list-td";
            }
        }));
    }
    
    onPageChange(number: number) {
        this.spinner.show();
        this.config.currentPage = number;
        
        var start = this.calcFromWhichItem(number);
        var end = start + this.config.itemsPerPage;
        
        this.api.getEmployersList(start).then(reply => {
            console.log(reply);
            this.employersList = reply.data.hits;
            this.globalVar.scrollEmployersContentToTop();
            this.spinner.hide();
        });
        
//        this.employersList = this.employersData.hits.slice(start, end);
        
        
        
    }
    
    calcFromWhichItem(page: number):any {
        return (page - 1) * this.config.itemsPerPage;
    }
    
    openDetailsModal(item:any) {
        this.currentActiveItemInEmployersList = item;
        console.log(item.id);
    }
    checkActiveItem(id:any) {
        if(this.currentActiveItemInEmployersList.id === id)
            return 'active';
        return '';
    }

}
