import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-glassdoor-job',
  templateUrl: './glassdoor-job.component.html',
  styleUrls: ['./glassdoor-job.component.css']
})
export class GlassdoorJobComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = 'Glassdoor Job';
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
