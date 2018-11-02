import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import {RekrutiApiService} from '../../../services/api/api.service';

@Component({
  selector: 'app-people-edit-modal',
  templateUrl: './people-edit-modal.component.html',
  styleUrls: ['./people-edit-modal.component.css']
})
export class PeopleEditModalComponent implements OnInit {

  	@Input() itemData;
  	@Input() modalForJobReq;
    @Input() colleagues;
  	@Input() cityList = ['d'];
  	@Output() saveOrDeleteJobReq: EventEmitter<any> = new EventEmitter;
    @Output() saveOrDeleteDocument: EventEmitter<any> = new EventEmitter;
    @Output() saveOrDeleteEmail: EventEmitter<any> = new EventEmitter;
    
    @Output() saveOrDeletePhone: EventEmitter<any> = new EventEmitter;
    @Output() saveOrDeleteWebLink: EventEmitter<any> = new EventEmitter;
    @Output() saveOrDeleteAddress: EventEmitter<any> = new EventEmitter;
    @Output() saveOrDeleteExperience: EventEmitter<any> = new EventEmitter;
    @Output() saveOrDeleteEducation: EventEmitter<any> = new EventEmitter;
    @Output() saveOrDeleteLicense: EventEmitter<any> = new EventEmitter;
    @Output() saveOrDeleteSource: EventEmitter<any> = new EventEmitter;

    @Output() initCityLists: EventEmitter<any> = new EventEmitter;

    @ViewChild('btn_cancel') btnCancel;

    file: File = null;
    ckeConfig: any;
    months: any;
    

    constructor(private api: RekrutiApiService) { }

    ngOnInit() {
      this.ckeConfig = {
        allowedContent: false,
        extraPlugins: 'divarea',
        forcePasteAsPlainText: true,
        toolbar: [['Bold', 'Italic', 'Underline']]
      };
      this.months = [
        { "name": "January", "id": 1, },
        { "name": "February", "id": 2, },
        { "name": "March", "id": 3, },
        { "name": "April", "id": 4, },
        { "name": "May", "id": 5, },
        { "name": "June", "id": 6, },
        { "name": "July", "id": 7, },
        { "name": "August", "id": 8, },
        { "name": "September", "id": 9, },
        { "name": "October", "id": 10, },
        { "name": "November", "id": 11, },
        { "name": "December", "id": 12, }
      ];
    }

    // -------------------- 
    handleSearch(e){
      this.initCityLists.emit({query: this.itemData.itemData.cityName});
    }

    chosenCity(item) {
      this.itemData.itemData.cityName = item.name;
      this.itemData.itemData.geoCityId = item.id
      this.cityList = null;
    }
    // ---------------------
    
  	saveJobReq() {
  		this.saveOrDeleteJobReq.emit({itemData: this.itemData, forSave: true, btnObj: this.btnCancel.nativeElement});
  	}

  	deleteJobReq() {
  		this.saveOrDeleteJobReq.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
  	}

    saveDocument() {

      if (this.itemData.forAdd) {
        this.saveOrDeleteDocument.emit({itemData: this.itemData, forSave: true, forAdd: true, file: this.file, btnObj: this.btnCancel.nativeElement});
      } else {
        this.saveOrDeleteDocument.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
      }
    }

    deleteDocument() {
      this.saveOrDeleteDocument.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement})
    }

  	cancel() {

  	}

    saveEmail() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteEmail.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
      } else {
        this.saveOrDeleteEmail.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
      }
    }

    deleteEmail() {
      this.saveOrDeleteEmail.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
    }

    savePhone() {
      if(this.itemData.forAdd) {
        this.saveOrDeletePhone.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
      } else {
        this.saveOrDeletePhone.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
      }
    }

    deletePhone() {
      this.saveOrDeletePhone.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
    }

    saveWebLink() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteWebLink.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
      } else {
        this.saveOrDeleteWebLink.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
      }
    }

    deleteWebLink() {
      this.saveOrDeleteWebLink.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
    }

    saveAddress() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteAddress.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
      } else {
        this.saveOrDeleteAddress.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
      }
    }

    deleteAddress() {
      this.saveOrDeleteAddress.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
    }

    saveExperience() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
      } else {
        this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
      }
    }

    deleteExperience() {
      this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
    }

    saveEducation() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
      } else {
        this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
      }
    }

    deleteEducation() {
      this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
    }

    saveLicense() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
      } else {
        this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
      }
    }

    deleteLicense() {
      this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
    }

    deleteSource(personId, objId) {
      this.saveOrDeleteSource.emit({personId: personId, forSave: false, objId: objId, btnObj: this.btnCancel.nativeElement});
    }

}
