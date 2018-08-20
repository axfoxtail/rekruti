import { Component, OnInit, ViewChildren } from '@angular/core';

import {PaginationInstance} from 'ngx-pagination';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';

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

    constructor(private globalVar:GlobalVariablesService) {
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
        this.config.currentPage = number;
        
        var start = this.calcFromWhichItem(number);
        var end = start + this.config.itemsPerPage;
        this.employersList = this.employersData.hits.slice(start, end);
        
        this.globalVar.scrollEmployersContentToTop();
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
