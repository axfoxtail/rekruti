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

	constructor(private globalVar: GlobalVariablesService) { }

	ngOnInit() {

		this.currentUser = this.globalVar.getCookieCurrentUser().currentUser;
	}

	
}
