import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-full-contact-company',
  templateUrl: './full-contact-company.component.html',
  styleUrls: ['./full-contact-company.component.css']
})
export class FullContactCompanyComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Full Contac Company';
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
