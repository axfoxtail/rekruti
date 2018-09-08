import {Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../services/api/api.service';
import {SearchService} from '../../../services/search/search.service';
import {NotificationsService} from '../../../services/notifications/notifications.service';

declare var $: any;

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    @ViewChild('top') topContent: ElementRef;

    _opened: boolean;
    _sidebarMode: any = 'push';
    _autoCollapseWidth: any = 1100;
    windowWidth: any = window.innerWidth;
    chosenPeople: any;

    constructor(private globalVar: GlobalVariablesService,
                private api: RekrutiApiService,
                private spinner: NgxSpinnerService,
                private search: SearchService,
                private notifications: NotificationsService) {

        this._opened = this.windowWidth > this._autoCollapseWidth;
        this.globalVar.setSearchConditionsPeople([]);
        this.chosenPeople = null;
    }

    ngOnInit() {
        this.globalVar.setSearchConditionsPeople(this.search.buildQuery(this.globalVar.getSearchConditionsPeople()));
        this.getPeopleList(this.globalVar.getSearchConditionsPeople());

        this.globalVar.sidebarStateChangedPeopleEvent.subscribe(() => {
            this._toggleSidebar();
        });
        this.globalVar.scrollContentToTopPeopleEvent.subscribe(() => {
            this.scrollToTop();
        });
        this.globalVar.peopleListChangedEvent.subscribe((data: any) => {
            this.getPeopleList(data);
        });
    }

    getPeopleList(queryJson: any) {
        this.spinner.show();
        this.globalVar.setSearchQueryPeople(queryJson);

        this.api.person_wSearch(queryJson).then(
            response => {
                if (response.result > 0) {
                    // save conditions globally
                    let conditions = this.globalVar.getSearchConditionsPeople();
                    conditions = response.data.aggregations;
                    conditions.sort = response.data.sort;
                    conditions.from = response.data.from;
                    conditions.size = response.data.size;
                    this.globalVar.setSearchConditionsPeople(conditions);
                    // that is to get the templates to work
                    this.globalVar.setCurrentPagePeople(this.search.getPage(response.data.from, response.data.size));
                    this.globalVar.peopleList(response);
                } else {
                    this.notifications.warning(response.message, 10000);
                }
                this.hideSpinnerScrollToTop();
            },
            err => {
                console.log(err);
                this.notifications.warning('', 10000);
                this.hideSpinnerScrollToTop();
            });
    }

    hideSpinnerScrollToTop() {
        this.scrollToTop();
        this.spinner.hide();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.globalVar.windowWidthChangedPeople(this.windowWidth);
        this._opened = this.windowWidth > this._autoCollapseWidth;
    }

    _toggleSidebar() {
        this._opened = !this._opened;
    }

    scrollToTop() {
        this.topContent.nativeElement.scrollIntoView({behavior: 'instant', block: 'start'});
    }

    selectedPeople(event){
        this.chosenPeople = event;

        this.api.person_wRead(this.chosenPeople.id)
        .then(response => {
            
                if (response.result > 0) {
                    
                    console.log(response);
                    this.chosenPeople = response.data;
                    this.chosenPeople.pictureKey = event.pictureKey;
                    
                } else {
                    this.notifications.warning(response.message, 10000);
                }
            },
            err => {
                console.log(err);
                this.notifications.warning('', 10000);
                this.hideSpinnerScrollToTop();
            }
        )
    }

}
