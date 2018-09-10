import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-job-req',
  templateUrl: './tab-job-req.component.html',
  styleUrls: ['./tab-job-req.component.css']
})
export class TabJobReqComponent implements OnInit {

	@Input() jobReq;
	@Input() itemData;

 	constructor() { }

 	ngOnInit() {

 	}

 	setJobReqIsAdding(value) {

 		this.jobReq.isAdding = value; 
 	}

 	addNewJobReq(personID, newName) {
 		return true;
 	}

 	
}
