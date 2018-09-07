import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-modal-content',
  templateUrl: './detail-modal-content.component.html',
  styleUrls: ['./detail-modal-content.component.css']
})
export class DetailModalContentComponent implements OnInit {

	@Input() type = 'people';
	@Input() itemData;

	selectedTabStatus = [true, false, false, false, false];

	constructor() { }

	ngOnInit() {
	}

	setTab(event) {

		console.log(event.nextId);
	}

}
