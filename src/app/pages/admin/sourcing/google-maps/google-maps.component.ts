import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Google Maps';
  @Input() sourcingData;
  @Input() sourcingJson;
  @Input() mapObj;

  constructor() {
   }

  ngOnInit() {
  	
  }

  openViewModal(data: any) {
  	this.sourcingJson = data;
  }

  openMapsModal(data: any) {
    this.mapObj = data;
  }

}
