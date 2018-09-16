import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';


@Component({
  selector: 'app-tab-job-req',
  templateUrl: './tab-job-req.component.html',
  styleUrls: ['./tab-job-req.component.css']
})
export class TabJobReqComponent implements OnInit {

	@Input() jobReq;
	@Input() itemData;
	@Output() addNewJob: EventEmitter<any> = new EventEmitter;
	@Output() setJobReq: EventEmitter<any> = new EventEmitter;
 	constructor( private globalVar: GlobalVariablesService ) { }

 	ngOnInit() {
 		console.log(this.jobReq);
 	}

 	setJobReqIsAdding(value) {

 		this.jobReq.isAdding = value; 
 	}

 	addNewJobReq(personID, newName) {
 		
 		this.addNewJob.emit({personID: personID, newName: newName});
 	}

 	changeJobReq(personID, jobReqID, check) {

 		this.setJobReq.emit({personID: personID, jobReqID: jobReqID, check: check});
 	}

 	openEditJobReq(obj) {
 		this.globalVar.showPeopleJobReqEditModal(obj);
 	}
 	
}
