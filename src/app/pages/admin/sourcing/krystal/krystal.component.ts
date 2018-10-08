import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-krystal',
  templateUrl: './krystal.component.html',
  styleUrls: ['./krystal.component.css']
})
export class KrystalComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Krystal';
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
