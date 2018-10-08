import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-sovren-resume',
  templateUrl: './sovren-resume.component.html',
  styleUrls: ['./sovren-resume.component.css']
})
export class SovrenResumeComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Sovren';
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
