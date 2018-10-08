import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-medicare-nursing-home',
  templateUrl: './medicare-nursing-home.component.html',
  styleUrls: ['./medicare-nursing-home.component.css']
})
export class MedicareNursingHomeComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = 'Medicare Nursing Home';
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
