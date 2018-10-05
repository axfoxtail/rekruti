import { Component, OnInit, Input } from '@angular/core';
import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-tab-contact',
  templateUrl: './tab-contact.component.html',
  styleUrls: ['./tab-contact.component.css']
})
export class TabContactComponent implements OnInit {

	@Input() type = 'people';
	@Input() itemData;

	currentUser: any;

	constructor( private globalVar: GlobalVariablesService ) { }

	ngOnInit() {
		this.currentUser = this.globalVar.getCookieCurrentUser().currentUser;
	}

	openAddEmail(personId) {
		this.globalVar.showPeopleContactEmailModal({forAdd: true, personID: personId, itemData: {isBusiness: false, email: ''}});
	}

	openEditEmail(psersonId, obj) {
		this.globalVar.showPeopleContactEmailModal({forAdd: false, personID: psersonId, itemData: obj});
	}

	openAddPhone(personId) {
	console.log('phone:', personId);
		this.globalVar.showPeopleContactPhoneModal({forAdd: true, personID: personId, itemData: {isBusiness: false, phone: '', extension: '', phoneTypeId: 1}});
	}

	openEditPhone(psersonId, obj) {
		this.globalVar.showPeopleContactPhoneModal({forAdd: false, personID: psersonId, itemData: obj});
	}

	openAddUrl(personId) {
		this.globalVar.showPeopleContactWebLinkModal({forAdd: true, personID: personId, itemData: {url: ''}});
	}

	openEditUrl(psersonId, obj) {
		this.globalVar.showPeopleContactWebLinkModal({forAdd: false, personID: psersonId, itemData: obj});
	}

	openAddAddress(personId) {
		this.globalVar.showPeopleContactAddressModal({forAdd: true, personID: personId, itemData: {address1: '', address2: '', cityName: '', zipCode: '', isBusiness: false}});
	}

	openEditAddress(psersonId, obj) {
		this.globalVar.showPeopleContactAddressModal({forAdd: false, personID: psersonId, itemData: obj});
	}
}
