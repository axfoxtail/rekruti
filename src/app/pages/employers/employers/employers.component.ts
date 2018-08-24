import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { ApiService } from '../../../services/api/api.service';
import { UtilsService } from '../../../services/utils/utils.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
    
    @ViewChild('top') topContent:ElementRef;
    
    _opened: boolean;
    _sidebarMode:string = 'push';
    _autoCollapseWidth:any = 1100;
    windowWidth:any = window.innerWidth;
    
    employersData:any = {};

    constructor(private globalVar:GlobalVariablesService, private api:ApiService, private spinner: NgxSpinnerService, private utils:UtilsService) {
        if(this.windowWidth <= this._autoCollapseWidth) {
            this._opened = false;
        } else this._opened = true;
    }

    ngOnInit() {
        this.globalVar.setRequestBodyEmployers('', 0, 'relevancy');
        this.globalVar.setUrlFacetsEmployers([]);
        this.getEmployersList();
        
        this.globalVar.sidebarStateChangedEmployersEvent.subscribe(() => {
            this._toggleSidebar();
        });
        this.globalVar.scrollContentToTopEmployersEvent.subscribe(() => {
            this.scrollToTop();
        });
        
        this.globalVar.employersListChangedEvent.subscribe(() => {
            this.getEmployersList();
        });
    }
    
    getEmployersList() {
        this.spinner.show();
        var body = this.globalVar.getRequestBodyEmployers();
        this.api.getEmployersList(body.keyword, body.from, this.globalVar.getUrlFacetsEmployers(), body.sort).then(reply => {
            this.employersData = reply;
            this.globalVar.setHasFacetSelectedEmployers(this.utils.countFacetSelected(reply.data.aggregations));
            this.globalVar.employersList(this.employersData);
            this.scrollToTop();
            this.spinner.hide();
        });
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.globalVar.windowWidthChangedEmployers(this.windowWidth);
        if(this.windowWidth <= this._autoCollapseWidth) {
            this._opened = false;
        } else this._opened = true;
    }
    
    _toggleSidebar() {
        this._opened = !this._opened;
    }
    
    scrollToTop() {
        this.topContent.nativeElement.scrollIntoView({ behavior: "instant", block: "start" });
    }

}
