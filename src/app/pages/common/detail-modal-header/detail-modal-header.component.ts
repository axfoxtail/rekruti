import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-detail-modal-header',
  templateUrl: './detail-modal-header.component.html',
  styleUrls: ['./detail-modal-header.component.css']
})
export class DetailModalHeaderComponent implements OnInit {

	@Input() type;
	@Input() modalType;
	@Input() itemData;


	urlImg: string = environment.endpoint + '/personDocument/wDownload?storeGuid=';

	constructor() {

	}

	ngOnInit() {
		if (this.type == 'jobs' || this.type == 'company') {
			this.urlImg = environment.endpoint + '/geoDocument/wDownload?storeGuid=';
		} else {
			this.urlImg = environment.endpoint + '/personDocument/wDownload?storeGuid=';
		}
	}

	openSetPicture(position, backdrop, personId){

	}

}
