import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-npi-officer',
  templateUrl: './npi-officer.component.html',
  styleUrls: ['./npi-officer.component.css']
})
export class NpiOfficerComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> NPI Officer';
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
