import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    
    @ViewChild('top') topContent:ElementRef;
    
    _opened: boolean;
    _sidebarMode:string = 'push';
    _autoCollapseWidth:any = 1100;
    windowWidth:any = window.innerWidth;
    
    peopleData:any = {};

    constructor(private globalVar:GlobalVariablesService, private api:ApiService, private spinner: NgxSpinnerService) {
        if(this.windowWidth <= this._autoCollapseWidth) {
            this._opened = false;
        } else this._opened = true;
    }

    ngOnInit() {
        this.getPeopleList();
        this.globalVar.sidebarStateChangedEvent.subscribe(() => {
            this._toggleSidebar();
        });
        this.globalVar.scrollPeopleContentToTopEvent.subscribe(() => {
            this.scrollToTop();
        });
    }
    
    getPeopleList() {
        this.spinner.show();
        this.api.getPeopleList().then(reply => {
            console.log(reply);
            this.peopleData = reply;
            this.globalVar.peopleList(this.peopleData);
            this.spinner.hide();
        });
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.globalVar.windowWidthChanged(this.windowWidth);
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
