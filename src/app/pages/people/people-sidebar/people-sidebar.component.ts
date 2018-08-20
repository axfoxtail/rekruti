import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';

declare var $:any;

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
    popoverBlock:boolean = false;
    
    @ViewChild('rrr') rrr:ElementRef;

    constructor(private globalVar:GlobalVariablesService) {
        this.currentActiveFilter = null;
        this.currentActiveFilterOption = null;
    }

    ngOnInit() {
        this.globalVar.peopleListEvent.subscribe((list:any) => {
            this.peopleData = list;
            this.filtersList = list.data.aggregations;
            console.log(this.filtersList);
        });
    }
    
    ngAfterViewInit() {
        var popOverSettings = {
            placement: 'right',
            container: 'body',
            html: true,
            selector: '[rel="popover"]', //Sepcify the selector here
            content: function () {
                return $('#popover-content').html();
            },
            trigger: 'focus',
            boundary: 'window',
            delay: { "show": 200, "hide": 100 }
        }
        $('body').popover(popOverSettings).on("show.bs.popover", (e=>{
            this.currentActiveFilter = null;
            this.currentActiveFilterOption = null;
            // hide all other popovers
//            $("[rel=popover]").not(e.target).popover("hide");
//            $(".popover").remove();                    
        }));
    }
    
    openOptionsPopover(key:any, id:any, filter:any): void {
//        console.log(id);
//        console.log(filter);
        console.log('1');
        this.currentActiveFilter = filter;
        this.currentActiveFilterOption = id;
    }
}
