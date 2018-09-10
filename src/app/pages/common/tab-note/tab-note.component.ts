import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-note',
  templateUrl: './tab-note.component.html',
  styleUrls: ['./tab-note.component.css']
})
export class TabNoteComponent implements OnInit {

	@Input() itemData;

	note = {
        id : null,
        note: '',
        isShared: true,
        isSharedEveryone: false
    }
    ckeConfig = {
    	allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    }

	constructor() { }

	ngOnInit() {
	}

	changeNote(event) {
		this.note.note = event.target.value;
	}

}
