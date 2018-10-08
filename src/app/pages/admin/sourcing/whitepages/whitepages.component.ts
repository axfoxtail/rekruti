import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-whitepages',
  templateUrl: './whitepages.component.html',
  styleUrls: ['./whitepages.component.css']
})
export class WhitepagesComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Whitepages';
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
