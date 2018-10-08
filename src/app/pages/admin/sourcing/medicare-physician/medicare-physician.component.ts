import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-medicare-physician',
  templateUrl: './medicare-physician.component.html',
  styleUrls: ['./medicare-physician.component.css']
})
export class MedicarePhysicianComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Medicare Physician';
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
