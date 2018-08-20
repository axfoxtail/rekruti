import { Component, OnInit, ViewChildren } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import {PaginationInstance} from 'ngx-pagination';

import { ApiService } from '../../../services/api/api.service';
import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';

declare var $:any;

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    
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
    peopleData:any = {};
    peopleList:any = [];
    activeFiltersList:any = [];
    currentActiveItemInPeopleList:any;

    constructor(private globalVar:GlobalVariablesService, private spinner: NgxSpinnerService, private api:ApiService) {
        this.peopleData = {
            total:0,
            hits:[] 
        }
        this.currentActiveItemInPeopleList = {
            id:null
        }
    }

    ngOnInit() {
        this.currentUserData = this.globalVar.getCookieCurrentUser();
        console.log(this.currentUserData);
//        this.getPeopleList(0, "");
        
        this.globalVar.peopleListEvent.subscribe((list:any) => {
            this.peopleData = list.data;
            this.activeFiltersList = list.data.aggregations;
            this.peopleList = this.peopleData.hits.slice(0, this.config.itemsPerPage);
        });
        
//        $('#detailsModal').on('show.bs.modal', (e=> {
//            console.log('show.bs.modal');
//        }));
        $('#detailsModal').on('hide.bs.modal', (e=> {
//            console.log('hide.bs.modal');
            for (var i = 0; i < this.listItems._results.length; i++) {
                this.listItems._results[i].nativeElement.className = "people-list-td";
            }
        }));
        
    }
    
//    getPeopleList(fromVar:any, sortBy:any) {
//        this.globalVar.peopleListEvent.subscribe((list:any) => {
//            this.peopleData = list;
//            this.peopleList = this.peopleData.data.hits.slice(0, this.config.itemsPerPage);
//        });
//        this.spinner.show();
//        this.api.getPeopleList().then(reply => {
////            console.log(reply);
//            this.peopleData = reply;
//            this.peopleList = this.peopleData.data.hits.slice(0, this.config.itemsPerPage);
////            console.log(this.peopleList);
//            this.spinner.hide();
//        });
//    }
    
    onPageChange(number: number) {
//        console.log('change to page', number);
        this.config.currentPage = number;
//        console.log(this.calcFromWhichItem(number));
        
        var start = this.calcFromWhichItem(number);
        var end = start + this.config.itemsPerPage;
        this.peopleList = this.peopleData.hits.slice(start, end);
        
        this.globalVar.scrollPeopleContentToTop();
    }
    
    calcFromWhichItem(page: number):any {
        return (page - 1) * this.config.itemsPerPage;
    }
    
    openDetailsModal(item:any) {
//        console.log(id);
        this.currentActiveItemInPeopleList = item;
        console.log(item.id);
    }
    checkActiveItem(id:any) {
        if(this.currentActiveItemInPeopleList.id === id)
            return 'active';
        return '';
    }
}
