import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people-edit-modal',
  templateUrl: './people-edit-modal.component.html',
  styleUrls: ['./people-edit-modal.component.css']
})
export class PeopleEditModalComponent implements OnInit {

	@Input() itemData;
	@Input() modalForJobReq;
	@Input() colleagues;
	@Output() saveOrDeleteJobReq: EventEmitter<any> = new EventEmitter;
  	constructor() { }

  	ngOnInit() {
  	}


  	saveJobReq() {
  		this.saveOrDeleteJobReq.emit({itemData: this.itemData, forSave: true});
  	}

  	deleteJobReq() {
  		this.saveOrDeleteJobReq.emit({itemData: this.itemData, forSave: false});
  	}

  	cancel() {

  	}
}
