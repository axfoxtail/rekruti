import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-detail-modal-header',
  templateUrl: './detail-modal-header.component.html',
  styleUrls: ['./detail-modal-header.component.css']
})
export class DetailModalHeaderComponent implements OnInit {

	@Input() type = 'people';
	@Input() itemData;


	urlImg: string = environment.endpoint + '/personDocument/wDownload?storeGuid=';

	constructor() {

	}

	ngOnInit() {

	}

	openSetPicture(position, backdrop, personId){

	}

}
