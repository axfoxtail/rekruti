import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-medicare-ambulatory',
  templateUrl: './medicare-ambulatory.component.html',
  styleUrls: ['./medicare-ambulatory.component.css']
})
export class MedicareAmbulatoryComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Medicare Ambulatory';
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
