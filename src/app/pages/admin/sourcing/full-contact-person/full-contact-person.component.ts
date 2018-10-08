import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-full-contact-person',
  templateUrl: './full-contact-person.component.html',
  styleUrls: ['./full-contact-person.component.css']
})
export class FullContactPersonComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Full Contact Person';
  @Input() sourcingData;
  @Input() sourcingJson;

  constructor() {
   }

  ngOnInit() {
  	
  }

  openViewModal(data: any) {
  	this.sourcingJson = data;
  }

}
