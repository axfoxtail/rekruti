import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {RekrutiApiService} from '../../../services/api/api.service';
import {NotificationsService} from '../../../services/notifications/notifications.service';
import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';


@Component({
  selector: 'app-people-full',
  templateUrl: './people-full.component.html',
  styleUrls: ['./people-full.component.css']
})
export class PeopleFullComponent implements OnInit {

	chosenPeople: any;
  chosenJobReq: any;
  chosenJobReqColleagues: any;
  modalForJobreqOrDocument: any;

	constructor( private route: ActivatedRoute, private router: Router, private api: RekrutiApiService, private notifications: NotificationsService, private globalVar: GlobalVariablesService) { }

	ngOnInit() {
		let id = this.route.snapshot.paramMap.get('id');

		this.loadDetailData(id);

    this.globalVar.openPeopleJobReqEditEvent.subscribe((data: any) => {
        this.modalForJobreqOrDocument = true;
        this.loadPeopleEdit(data);
    })

    this.globalVar.openPeopleDocumentEvent.subscribe((data: any) => {
        this.modalForJobreqOrDocument = false;
        this.loadPeopleEdit(data);
    })
	}

	loadDetailData(personId) {
		this.api.person_wRead(personId)
        .then(response => {
            
                if (response.result > 0) {
                    
                    this.chosenPeople = response.data;
                } 
            },
            err => {
                console.log(err);
            }
        )
	}

  loadPeopleEdit(data: any) {
        this.chosenJobReq = data;

        this.api.account_nListColleagues()
        .then(response => {
                
                console.log(response);
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

}
