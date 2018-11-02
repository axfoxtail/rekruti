import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-us-companies-list2',
  templateUrl: './us-companies-list2.component.html',
  styleUrls: ['./us-companies-list2.component.css']
})
export class UsCompaniesList2Component implements OnInit {

  _opened: boolean = true;
  pageTitle = '> US Companies List2';
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
