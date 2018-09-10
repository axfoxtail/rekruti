import { Component, OnInit, Input } from '@angular/core';
import {RekrutiApiService} from '../../../services/api/api.service';
import {NotificationsService} from '../../../services/notifications/notifications.service';

@Component({
  selector: 'app-detail-modal-content',
  templateUrl: './detail-modal-content.component.html',
  styleUrls: ['./detail-modal-content.component.css']
})
export class DetailModalContentComponent implements OnInit {

	@Input() type = 'people';
	@Input() itemData;


	jobReq: any = {
		list: [],
        sharedList: '',
        isAdding: false,
        newName: ''
	}
	selectedTabStatus = [true, false, false, false, false];

	constructor( private api: RekrutiApiService, private notifications: NotificationsService ) { }

	ngOnInit() {
	}

	setTab(event) {

		console.log(event.nextId);

		switch (event.nextId) {
			case "tab2":
				this.loadJobReqs(this.itemData.id);
				break;
			
			default:
				// code...
				break;
		}
	}

	openFullPage(personId) {
		
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

}
