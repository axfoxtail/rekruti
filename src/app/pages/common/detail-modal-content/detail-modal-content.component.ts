import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RekrutiApiService} from '../../../services/api/api.service';
import {NotificationsService} from '../../../services/notifications/notifications.service';

declare var $: any;

@Component({
  selector: 'app-detail-modal-content',
  templateUrl: './detail-modal-content.component.html',
  styleUrls: ['./detail-modal-content.component.css']
})
export class DetailModalContentComponent implements OnInit, AfterViewInit {

	@Input() type = 'people';
	@Input() itemData;
    @Input() chosenTab;

    @ViewChild('tab') ngbTabSet;

	jobReq: any = {
		list: [],
        sharedList: '',
        isAdding: false,
        newName: ''
	}
	selectedTabStatus = [false, false, false, false, false];
    

	constructor( private api: RekrutiApiService, private notifications: NotificationsService, private cdRef:ChangeDetectorRef ) { }

	ngOnInit() {
        console.log(this.chosenTab);
	}

    ngAfterViewInit() {
        if (this.chosenTab != null && this.chosenTab !== "") {
            
            switch (this.chosenTab) {
                case "contact":
                    this.ngbTabSet.select('tab1');
                    break;
                case "note":
                    this.loadJobNotes(this.itemData.id);
                    this.ngbTabSet.select('tab3');
                    break;
                case "jobReq":
                    this.loadJobReqs(this.itemData.id);
                    this.ngbTabSet.select('tab2');
                    break;
                default:
                    this.ngbTabSet.select('tab0');
                    break;
            }

            this.cdRef.detectChanges();
        }
    }

	setTab(event) {

		console.log(event.nextId);

		switch (event.nextId) {
			case "tab2":
				this.loadJobReqs(this.itemData.id);
				break;
			case "tab3" : 
				this.loadJobNotes(this.itemData.id);
				break;
            case "tab4" :
                this.loadDocument(this.itemData.id);
                break;
			default:
				// code...
				break;
		}
	}

	openFullPage(personId) {
		
	}

    saveJobNote(event) {
        this.api.person_saveJobNote(event)
        .then(response => {
            
                if (response.result > 0) {
                    
                    this.notifications.success('Saved!', 5000);
                    this.loadJobNotes(event.personID);
                    
                } else {
                    this.notifications.warning(response.message, 10000);
                }
            },
            err => {
                console.log(err);
                this.notifications.warning('Error', 10000);
            }
        )
    }

	loadJobReqs(personId) {
		this.api.person_jobList(personId)
        .then(response => {
            
                if (response.result > 0) {
                    
                    console.log(response);
                    this.jobReq.list = response.data.data;
                    
                } else {
                    this.notifications.warning(response.message, 10000);
                }
            },
            err => {
                console.log(err);
               
            }
        )

        this.loadJobSharedList(personId);
	}

	loadJobSharedList(personId) {

		this.api.person_jobList(personId)
        .then(response => {
            
                if (response.result > 0) {
                    
                    console.log(response);
                    this.jobReq.sharedList = response.data.data;
                    
                } else {
                    this.notifications.warning(response.message, 10000);
                }
            },
            err => {
                console.log(err);
                
            }
        )
	}

	loadJobNotes(personId) {
		this.api.person_jobNote(personId)
        .then(response => {
            
                if (response.result > 0) {
                    
                    console.log(response);
                    this.itemData.notes = response.data;
                    
                } else {
                    this.notifications.warning('error', 10000);
                }
            },
            err => {
                console.log(err);
                
            }
        )
	}

    loadDocument(personId) {
        this.api.person_document(personId)
        .then(response => {
            
                if (response.result > 0) {
                    
                    console.log(response);
                    this.itemData.documents = response.data;
                    
                } else {
                    this.notifications.warning('error', 10000);
                }
            },
            err => {
                console.log(err);
                
            }
        )
    }

    deleteJobNote(event: any) {
        this.api.person_deleteNOte(event)
        .then(response => {
            
               if (response.result > 0) {
                    
                    this.notifications.success('Deleted!', 5000);
                    this.loadJobNotes(this.itemData.id);
                    
                } else {
                    this.notifications.warning(response.message, 10000);
                }
            },
            err => {
                console.log(err);
                this.notifications.warning('Error', 10000);
            }
        )
    }

}
