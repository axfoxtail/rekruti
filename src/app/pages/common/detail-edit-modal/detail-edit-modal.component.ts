import {Component, OnInit, HostListener, ViewChild, ElementRef, Input} from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';
import {RekrutiApiService} from '../../../services/api/api.service';
import {SearchService} from '../../../services/search/search.service';
import {UtilsService} from '../../../services/utils/utils.service';
import {NotificationsService} from '../../../services/notifications/notifications.service';


@Component({
  selector: 'app-detail-edit-modal',
  templateUrl: './detail-edit-modal.component.html',
  styleUrls: ['./detail-edit-modal.component.css']
})
export class DetailEditModalComponent implements OnInit {

  // @Input() itemData;
  // @Input() modalForJobReq;
  // @Input() colleagues;
  // @Input() cityList = ['d'];
  // @Output() saveOrDeleteJobReq: EventEmitter<any> = new EventEmitter;
  // @Output() saveOrDeleteDocument: EventEmitter<any> = new EventEmitter;
  // @Output() saveOrDeleteEmail: EventEmitter<any> = new EventEmitter;
  
  // @Output() saveOrDeletePhone: EventEmitter<any> = new EventEmitter;
  // @Output() saveOrDeleteWebLink: EventEmitter<any> = new EventEmitter;
  // @Output() saveOrDeleteAddress: EventEmitter<any> = new EventEmitter;
  // @Output() saveOrDeleteExperience: EventEmitter<any> = new EventEmitter;
  // @Output() saveOrDeleteEducation: EventEmitter<any> = new EventEmitter;
  // @Output() saveOrDeleteLicense: EventEmitter<any> = new EventEmitter;
  // @Output() saveOrDeleteSource: EventEmitter<any> = new EventEmitter;

  // @Output() initCityLists: EventEmitter<any> = new EventEmitter;

  @ViewChild('btn_cancel') btnCancel;

  file: File = null;
  ckeConfig: any;
  months: any;

  colleagues: any;
  urlTypes: any;
  
  @Input() modalType;
  forModal: any;
  sourceData: any;
  descriptionData: any;
  emailData: any;
  phoneData: any;
  weblinkData: any;
  bioData: any;
  addressData: any;
  documentData: any;

  constructor(private globalVar: GlobalVariablesService,
              private api: RekrutiApiService,
              private spinner: NgxSpinnerService,
              private search: SearchService,
              private notifications: NotificationsService) { }

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

    this.globalVar.openSourceModalEvent.subscribe((data: any) => {
      this.forModal = 'source';
      this.getSourceData(data);
    });
    this.globalVar.openDescriptionModalEvent.subscribe((data: any) => {
      this.descriptionData = data;
      this.forModal = 'description';
    });
    this.globalVar.openPeopleContactEmailEvent.subscribe((data: any) => {
      this.forModal = 'email';
      this.emailData = data;
    });
    this.globalVar.openPeopleContactPhoneEvent.subscribe((data: any) => {
      this.forModal = 'phone';
      this.phoneData = data;
    });
    this.getColleagues();
    this.globalVar.openPeopleContactWebLinkEvent.subscribe((data: any) => {
      this.forModal = 'weblink';
      this.weblinkData = data;
    });
    this.getUrlTypes();
    this.globalVar.openBioModalEvent.subscribe((data: any) => {
      this.bioData = data;
      this.forModal = 'bio';
    });
    this.globalVar.openPeopleContactAddressEvent.subscribe((data: any) => {
      this.forModal = 'address';
      this.addressData = data;
    });
    this.globalVar.openPeopleDocumentEvent.subscribe((data: any) => {
      this.documentData = data;
      this.forModal = 'document';
    });
  }

  getColleagues() {
    this.api.phoneType_Qbe()
        .then(response => {
                
                if (response.result > 0) {
                    this.colleagues = response.data;
                } 
            },
            err => {
                console.log(err);
                
            }
        );
  }

  getUrlTypes() {
    this.api.urlType_Qbe().then(
      response => {
        if (response.result > 0) {
          this.urlTypes = response.data;
        }
      },
      err => {
        console.log(err);
      });
  }

  // -------------------- 
  // handleSearch(e){
  //   this.initCityLists.emit({query: this.itemData.itemData.cityName});
  // }

  // chosenCity(item) {
  //   this.itemData.itemData.cityName = item.name;
  //   this.itemData.itemData.geoCityId = item.id
  //   this.cityList = null;
  // }
  // // ---------------------
  
  // saveJobReq() {
  //   this.saveOrDeleteJobReq.emit({itemData: this.itemData, forSave: true, btnObj: this.btnCancel.nativeElement});
  // }

  // deleteJobReq() {
  //   this.saveOrDeleteJobReq.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
  // }  itemData: this.itemData, forSave: true, forAdd: true, file: this.file


  saveDocument() {
    this.api.saveDocument({itemData: this.documentData, file: this.file}).then(
      response => {
        if (response.result > 0) {
          this.notifications.success('Saved successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.documentData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }

  deleteDocument() {
    this.api.deleteDocument(this.documentData).then(
      response => {
        if (response.result > 0) {
          this.notifications.success('Deleted successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.documentData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }

  cancel() {

  }

  saveEmail() {
    this.api.saveEmail(this.emailData).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Saved successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.emailData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
        this.globalVar.refreshContactEvent();
      }, 
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }

  deleteEmail() {
    this.api.deleteEmail(this.emailData).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Deleted successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.emailData.personID, isrefresh: true});
          this.btnCancel.nativeElement.click();
        } else {
          this.notifications.warning('Can not delete!', 1000);
        }
      },
      err => {
        console.log('err:', err);
        this.notifications.warning('Error!', 1000);
      });
  }

  savePhone() {
    this.api.savePhone(this.phoneData, this.modalType).then(
      respnose => {
        if (respnose.result > 0) {
          this.notifications.success('Saved successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.phoneData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        console.log('err:', err);
        this.notifications.warning('Error!', 1000);
      })
  }

  deletePhone() {
    this.api.deletePhone(this.phoneData, this.modalType).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Deleted successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.phoneData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not delete!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }

  saveWebLink() {
    this.api.saveWebLink(this.weblinkData, this.modalType).then(
      response => {
        if (response.result > 0) {
          this.notifications.success('Saved successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.weblinkData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }

  deleteWebLink() {
    this.api.deleteWebLink(this.weblinkData, this.modalType).then(
      response => {
        if(response.result > 0) {
          this.notifications.success('Deleted successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.weblinkData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not delete!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }

  saveAddress() {
    this.api.saveAddress(this.addressData).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Saved successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.addressData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
      });
  }

  deleteAddress() {
    this.api.deleteAddress(this.addressData).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Deleted successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.addressData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElemet.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
      });
  }

  // saveExperience() {
  //   if(this.itemData.forAdd) {
  //   this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
  //   } else {
  //   this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
  //   }
  // }

  // deleteExperience() {
  //   this.saveOrDeleteExperience.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
  // }

  // saveEducation() {
  //   if(this.itemData.forAdd) {
  //   this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
  //   } else {
  //   this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
  //   }
  // }

  // deleteEducation() {
  //   this.saveOrDeleteEducation.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
  // }

  // saveLicense() {
  //   if(this.itemData.forAdd) {
  //   this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: true, forAdd: true, btnObj: this.btnCancel.nativeElement});
  //   } else {
  //   this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: true, forAdd: false, btnObj: this.btnCancel.nativeElement});
  //   }
  // }

  // deleteLicense() {
  //   this.saveOrDeleteLicense.emit({itemData: this.itemData, forSave: false, btnObj: this.btnCancel.nativeElement});
  // }

  // ----------- for profile ----------- //
  saveDescription() {
    this.api.saveDescription(this.descriptionData).then(
      response => {
        if (response.result > 0) {
          this.notifications.success('Saved successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.descriptionData.id, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }

  getSourceData(data) {
    this.api.getSourceData(data.obj, this.modalType).then(
      response => {
        if (response.result > 0) {
          this.sourceData = response.data;
        } else {
          this.notifications.warning('Can not get source!', 1000);
        }
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }

  deleteSource(data) {
    this.api.deleteSource(data.id).then(
      response => {
        if (response.result > 0) {
          this.notifications.success('Deleted successfully!', 1000);
          // this.globalVar.refreshDetailData({personId: data.itemData.personID, isrefresh: true});
        } else {
          this.notifications.warning('Can not delete!', 1000);
        }
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }
  
  saveBio() {
    console.log('bio-', this.bioData);
    this.api.saveBio(this.bioData).then(
      response => {
        if(response.result > 0){
          this.notifications.success('Saved successfully!', 1000);
          this.globalVar.refreshDetailData({personId: this.bioData.id, isrefresh: true});
        } else {
          this.notifications.warning('Can not save!', 1000);
        }
        this.btnCancel.nativeElement.click();
      },
      err => {
        this.notifications.warning('Error!', 1000);
        console.log('err:', err);
      });
  }



}
