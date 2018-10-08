import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-medicare-dialysis',
  templateUrl: './medicare-dialysis.component.html',
  styleUrls: ['./medicare-dialysis.component.css']
})
export class MedicareDialysisComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Medicare Dialysis';
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
