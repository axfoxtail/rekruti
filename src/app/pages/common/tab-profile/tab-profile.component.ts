import { Component, OnInit, Input } from '@angular/core';
import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.component.html',
  styleUrls: ['./tab-profile.component.css']
})



export class TabProfileComponent implements OnInit {

	@Input() type = 'people';
	@Input() itemData;

	currentUser: any;
	ckeConfig: any;
	
	constructor(private globalVar: GlobalVariablesService) { }

	ngOnInit() {
		this.currentUser = this.globalVar.getCookieCurrentUser().currentUser;
		this.ckeConfig = {
	      allowedContent: false,
	      extraPlugins: 'divarea',
	      forcePasteAsPlainText: true,
	      toolbar: [['Bold', 'Italic', 'Underline']]
	    }
	}

	openAddExperience(personId) {
		this.globalVar.showPeopleExperienceModal({forAdd: true, personID: personId, itemData: {company: '', geoId: '', cityName: '', startMonth: '', startYear: '', endMonth: '', endYear: '', isCurrent: false, summary: ''}});
	}

	openEditExperience(personId, obj) {
		this.globalVar.showPeopleExperienceModal({forAdd: false, personID: personId, itemData: obj});
	}

	openAddEducation(personId) {
		this.globalVar.showPeopleEducationModal({forAdd: true, personID: personId, itemData: {title: '', company: '', geoId: '', cityName: '', endYear: '', summary: ''}});
	}

	openEditEducation(personId, obj) {
		this.globalVar.showPeopleEducationModal({forAdd: false, personID: personId, itemData: obj});
	}

	openAddLicense(personId) {
		this.globalVar.showPeopleLicenseModal({forAdd: true, personID: personId, itemData: {title: '', number: '', state: '', startingDate: '', expirationDate: ''}});
	}

	openEditLicense(personId, obj) {
		this.globalVar.showPeopleLicenseModal({forAdd: false, personID: personId, itemData: obj});
	}
	
	openSource(personId, objId)  {
		this.globalVar.showPeopleSourceModal({personID: personId, objId: objId});
	}
}
