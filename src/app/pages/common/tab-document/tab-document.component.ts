import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-document',
  templateUrl: './tab-document.component.html',
  styleUrls: ['./tab-document.component.css']
})
export class TabDocumentComponent implements OnInit {

	@Input() itemData;

	constructor() { }

	ngOnInit() {
	}

	openAddDocument(position, backdrop, personId) {

	}

	openEditDocument(position, backdrop, obj) {
		
	}

}
