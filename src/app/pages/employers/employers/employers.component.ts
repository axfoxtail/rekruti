import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { ApiService } from '../../../services/api/api.service';

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

    constructor(private globalVar:GlobalVariablesService, private api:ApiService, private spinner: NgxSpinnerService) {
        if(this.windowWidth <= this._autoCollapseWidth) {
            this._opened = false;
        } else this._opened = true;
    }

    ngOnInit() {
        this.getEmployersList();
        this.globalVar.employersSidebarStateChangedEvent.subscribe(() => {
            this._toggleSidebar();
        });
        this.globalVar.scrollEmployersContentToTopEvent.subscribe(() => {
            this.scrollToTop();
        });
    }
    
    getEmployersList() {
        this.spinner.show();
        this.api.getEmployersList(0).then(reply => {
            console.log(reply);
            this.employersData = reply;
            this.globalVar.employersList(this.employersData);
            this.spinner.hide();
        });
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.globalVar.employersWindowWidthChanged(this.windowWidth);
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
