import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-pipl',
  templateUrl: './pipl.component.html',
  styleUrls: ['./pipl.component.css']
})
export class PiplComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Pipl';
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
