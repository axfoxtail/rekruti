import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-medicare-hospital',
  templateUrl: './medicare-hospital.component.html',
  styleUrls: ['./medicare-hospital.component.css']
})
export class MedicareHospitalComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Medicare hospital';
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
