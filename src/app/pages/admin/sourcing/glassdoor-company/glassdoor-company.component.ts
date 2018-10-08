import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-glassdoor-company',
  templateUrl: './glassdoor-company.component.html',
  styleUrls: ['./glassdoor-company.component.css']
})
export class GlassdoorCompanyComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Glassdoor Company';
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
