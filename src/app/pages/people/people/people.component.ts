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
    chosenTab: any;
    chosenJobReq: any;
    chosenJobReqColleagues: any;
    modalForJobreqOrDocument: any;
    cityList: any;

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

        this.globalVar.openPeopleJobReqEditEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'jobreq';
            this.loadPeopleEdit(data);
        })

        this.globalVar.openPeopleDocumentEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'document';
            this.loadPeopleEdit(data);
        })

        this.globalVar.openPeopleContactEmailEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'email';
            this.loadPeopleEdit(data);
        })

        this.globalVar.openPeopleContactPhoneEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'phone';
            //this.loadPeopleEdit(data);
            this.phoneType_Qbe(data);
        })

        this.globalVar.openPeopleContactWebLinkEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'weblink';
            this.loadPeopleEdit(data);
        })

        this.globalVar.openPeopleContactAddressEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'address';
            this.loadPeopleEdit(data);
        })

        this.globalVar.openPeopleExperienceEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'experience';
            this.loadPeopleEdit(data);
        })

        this.globalVar.openPeopleEducationEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'education';
            this.loadPeopleEdit(data);
        })

        this.globalVar.openPeopleLicenseEvent.subscribe((data: any) => {
            this.modalForJobreqOrDocument = 'license';
            this.loadPeopleEdit(data);
        })


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

    selectedPeople(event: any){
        this.chosenPeople = event;
        this.chosenTab = "";
        this.loadDetailData(this.chosenPeople.id, event.pictureKey)
        
    }

    selectedByTab(event: any) {
        this.chosenPeople = event.item;
        this.chosenTab = event.tab;

        this.loadDetailData(this.chosenPeople.id, event.pictureKey);
    }

    loadDetailData(personId, pictureKey) {
        this.api.person_wRead(personId)
        .then(response => {
            
                if (response.result > 0) {
                    
                    this.chosenPeople = response.data;
                    this.chosenPeople.pictureKey = pictureKey;
                    
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

    loadPeopleEdit(data: any) {
        this.chosenJobReq = data;

        this.api.account_nListColleagues()
        .then(response => {
                
                console.log('reload.res:',response);
                if (response.result > 0) {
                    this.chosenJobReqColleagues = response.data; 
                } 
            },
            err => {
                console.log(err);
                
            }
        )
    }

    saveOrDeleteJobReq(data: any) {
        this.api.saveOrDeleteJobReq(data)
        .then(response => {
                
                if (response.result > 0) {
                    this.notifications.success('Updated successfully!', 10000);
                    this.globalVar.refreshJobReqEvent();
                } 
            },
            err => {
                console.log(err);
                
            }
        )
    }

    saveOrDeleteDocument(data: any) {
        this.api.saveOrDeleteDocument(data)
        .then(response => {
                
                console.log(response);
                if (response.result > 0) {
                    this.notifications.success('Successed!', 10000);
                    this.globalVar.refreshDocumentEvent();
                } 
            },
            err => {
                console.log(err);
                
            }
        )
    }

    // ===== People Contact Tab

    loadPeopleEmailEdit(data: any) {
        this.chosenJobReq = data;
        console.log(data);
    }

    refreshPeople(personId, isrefresh) {
        this.api.person_wRead(personId, isrefresh)
        .then(response => {
            
                if (response.result > 0) {
                    
                    this.chosenPeople = response.data;
                    
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

    saveOrDeleteEmail(data: any) {
        this.api.saveOrDeleteEmail(data)
        .then(response => {
                
                console.log('res',response);
                if (response.result > 0) {
                    this.notifications.success('Successed!', 10000);
                    this.refreshPeople(data.itemData.personID, true);
                } 
            },
            err => {
                console.log('err:', err);
                
            }
        )
    }

    phoneType_Qbe(data: any) {
        this.chosenJobReq = data;

        this.api.phoneType_Qbe()
        .then(response => {
                
                if (response.result > 0) {
                    this.chosenJobReqColleagues = response.data;
                    console.log(this.chosenJobReqColleagues);
                } 
            },
            err => {
                console.log(err);
                
            }
        )
    }

    // ----------- 

    saveOrDeletePhone(data: any) {
        this.api.saveOrDeletePhone(data)
        .then(response => {
               
                if (response.result > 0) {
                    this.notifications.success('Successed!', 10000);
                    this.refreshPeople(data.itemData.personID, true);
                } 
            },
            err => {
                console.log('err:', err);
                
            }
        )
    }

    saveOrDeleteWebLink(data: any) {
        this.api.saveOrDeleteWebLink(data)
        .then(response => {
                
                console.log('res',response);
                if (response.result > 0) {
                    this.notifications.success('Successed!', 10000);
                    this.refreshPeople(data.itemData.personID, true);
                } 
            },
            err => {
                console.log('err:', err);
                
            }
        )
    }

    saveOrDeleteAddress(data: any) {
        this.api.saveOrDeleteAddress(data)
        .then(response => {
                
                console.log('res',response);
                if (response.result > 0) {
                    this.notifications.success('Successed!', 10000);
                    this.refreshPeople(data.itemData.personID, true);
                } 
            },
            err => {
                console.log('err:', err);
                
            }
        )
    }

    saveOrDeleteExperience(data: any) {
        this.api.saveOrDeleteExperience(data)
        .then(response => {
                
                console.log('res',response);
                if (response.result > 0) {
                    this.notifications.success('Successed!', 10000);
                    this.refreshPeople(data.itemData.personID, true);
                } 
            },
            err => {
                console.log('err:', err);
                
            }
        )
    }

    saveOrDeleteEducation(data: any) {
        this.api.saveOrDeleteEducation(data)
        .then(response => {
                
                console.log('res',response);
                if (response.result > 0) {
                    this.notifications.success('Successed!', 10000);
                    this.refreshPeople(data.itemData.personID, true);
                } 
            },
            err => {
                console.log('err:', err);
                
            }
        )
    }

    saveOrDeleteLicense(data: any) {
        this.api.saveOrDeleteLicense(data)
        .then(response => {
                
                console.log('res',response);
                if (response.result > 0) {
                    this.notifications.success('Successed!', 10000);
                    this.refreshPeople(data.itemData.personID, true);
                } 
            },
            err => {
                console.log('err:', err);
                
            }
        )
    }

    initCityLists(data: any) {
    console.log('aa -',data);
        this.api.initCityLists(data)
        .then(response => {
                
                console.log('res - query',response);
                if (response.result > 0) {
                    this.cityList = response.data;
                    
                } 
            },
            err => {
                console.log('err:', err);
                
            }
        )
    }

}
