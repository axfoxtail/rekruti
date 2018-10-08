import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-medicare-home-health',
  templateUrl: './medicare-home-health.component.html',
  styleUrls: ['./medicare-home-health.component.css']
})
export class MedicareHomeHealthComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Medicare Home Health';
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
