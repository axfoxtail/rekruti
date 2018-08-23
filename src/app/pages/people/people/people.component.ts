import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';

import { GlobalVariablesService } from '../../../services/global-variables/global-variables.service';
import { ApiService } from '../../../services/api/api.service';

declare var $:any;

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
    
    test: FormGroup;

    constructor(private globalVar:GlobalVariablesService, private api:ApiService, private spinner: NgxSpinnerService, private formBuilder: FormBuilder) {
        if(this.windowWidth <= this._autoCollapseWidth) {
            this._opened = false;
        } else this._opened = true;
    }

    ngOnInit() {
        var body = {
            from: 0,
            sort: "lastUpdate"
        };
        this.globalVar.setCurrentSearchFiltersPeople(body);
        this.getPeopleList(body);
        
        this.globalVar.sidebarStateChangedEvent.subscribe(() => {
            this._toggleSidebar();
        });
        this.globalVar.scrollPeopleContentToTopEvent.subscribe(() => {
            this.scrollToTop();
        });
        this.globalVar.peopleListChangedEvent.subscribe(() => {
            this.getPeopleList(this.globalVar.getCurrentSearchFiltersPeople());
        });
        this.test = this.formBuilder.group({
            t1: ['past'],
            t2: ['not'],
            t3: [3],
            t4: [4],
            t5: [5]
        });
    }
    
    getPeopleList(body:any) {
        console.log(body);
        this.spinner.show();
        this.api.getPeopleList(body).then(reply => {
            this.peopleData = reply;
            console.log(reply);
            this.globalVar.peopleList(this.peopleData);
            this.spinner.hide();
            $('ng-sidebar-container').click();
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
