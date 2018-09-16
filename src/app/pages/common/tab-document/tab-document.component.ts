import { Component, OnInit, Input } from '@angular/core';
import {GlobalVariablesService} from '../../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-tab-document',
  templateUrl: './tab-document.component.html',
  styleUrls: ['./tab-document.component.css']
})
export class TabDocumentComponent implements OnInit {

	@Input() itemData;

	currentUser: any;
	urlImage: any = '/entity/personDocument/wDownload?storeGuid=';

	constructor( private globalVar: GlobalVariablesService ) { }

	ngOnInit() {
		this.currentUser = this.globalVar.getCookieCurrentUser().currentUser;
	}

	openAddDocument(personId) {
		this.globalVar.showPeopleDocumentModal({forAdd: true, personID: personId, itemData: {isShared: true, isSharedEveryone: false, accountId: this.itemData.id}});
	}

	openEditDocument(obj) {
		this.globalVar.showPeopleDocumentModal({forAdd: false, itemData: obj});
	}

	getExtension(type) {
		switch (type) {
			case "doc":
				return 'doc';
				
			case "docx":
				return 'doc';
				
			case "png":
				return 'pic';
				
			case "pdf":
				return 'pdf';
				
			
			default:
				return type;
				
		}
	}

}
