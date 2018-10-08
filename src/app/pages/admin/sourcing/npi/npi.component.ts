import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-npi',
  templateUrl: './npi.component.html',
  styleUrls: ['./npi.component.css']
})
export class NpiComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> NPI';
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
