import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-us-companies-list',
  templateUrl: './us-companies-list.component.html',
  styleUrls: ['./us-companies-list.component.css']
})
export class UsCompaniesListComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> US Companies List';
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
