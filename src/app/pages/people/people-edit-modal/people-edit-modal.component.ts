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
    @Output() saveOrDeleteDocument: EventEmitter<any> = new EventEmitter;

    file: any;

  	constructor() { }

  	ngOnInit() {
  	}


  	saveJobReq() {
  		this.saveOrDeleteJobReq.emit({itemData: this.itemData, forSave: true});
  	}

  	deleteJobReq() {
  		this.saveOrDeleteJobReq.emit({itemData: this.itemData, forSave: false});
  	}

    saveDocument() {

      if (this.itemData.forAdd) {
        this.saveOrDeleteDocument.emit({itemData: this.itemData, forSave: true, forAdd: true, file: this.file});
      } else {
        this.saveOrDeleteDocument.emit({itemData: this.itemData, forSave: true, forAdd: false});
      }
      
    }

    deleteDocument() {
      this.saveOrDeleteDocument.emit({itemData: this.itemData, forSave: false})
    }

  	cancel() {

  	}
}
