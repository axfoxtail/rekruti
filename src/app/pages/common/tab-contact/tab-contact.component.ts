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

}
