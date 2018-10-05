import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

    @Output() initCityLists: EventEmitter<any> = new EventEmitter;

    file: any;
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
      console.log(item);
      this.itemData.itemData.cityName = item.name;
      this.itemData.itemData.geoCityId = item.id
      console.log(this.itemData);
      this.cityList = null;
    }
    // ---------------------
    
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

    saveEmail() {
    console.log('111 - email:', this.itemData);
      if(this.itemData.forAdd) {
        this.saveOrDeleteEmail.emit({itemData: this.itemData, forSave: true, forAdd: true});
      } else {
        this.saveOrDeleteEmail.emit({itemData: this.itemData, forSave: true, forAdd: false});
      }
    }

    deleteEmail() {
      this.saveOrDeleteEmail.emit({itemData: this.itemData, forSave: false});
    }

    savePhone() {
      if(this.itemData.forAdd) {
        this.saveOrDeletePhone.emit({itemData: this.itemData, forSave: true, forAdd: true});
      } else {
        this.saveOrDeletePhone.emit({itemData: this.itemData, forSave: true, forAdd: false});
      }
    }

    deletePhone() {
      this.saveOrDeletePhone.emit({itemData: this.itemData, forSave: false});
    }

    saveWebLink() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteWebLink.emit({itemData: this.itemData, forSave: true, forAdd: true});
      } else {
        this.saveOrDeleteWebLink.emit({itemData: this.itemData, forSave: true, forAdd: false});
      }
    }

    deleteWebLink() {
      this.saveOrDeleteWebLink.emit({itemData: this.itemData, forSave: false});
    }

    saveAddress() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteAddress.emit({itemData: this.itemData, forSave: true, forAdd: true});
      } else {
        this.saveOrDeleteAddress.emit({itemData: this.itemData, forSave: true, forAdd: false});
      }
    }

    deleteAddress() {
      this.saveOrDeleteAddress.emit({itemData: this.itemData, forSave: false});
    }

    saveExperience() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: true, forAdd: true});
      } else {
        this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: true, forAdd: false});
      }
    }

    deleteExperience() {
      this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: false});
    }

    saveEducation() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: true, forAdd: true});
      } else {
        this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: true, forAdd: false});
      }
    }

    deleteEducation() {
      this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: false});
    }

    saveLicense() {
      if(this.itemData.forAdd) {
        this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: true, forAdd: true});
      } else {
        this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: true, forAdd: false});
      }
    }

    deleteLicense() {
      this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: false});
    }


}
