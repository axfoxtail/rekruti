import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-database-usa',
  templateUrl: './database-usa.component.html',
  styleUrls: ['./database-usa.component.css']
})
export class DatabaseUsaComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> DatabaseUSA';
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
