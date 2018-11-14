import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-detail-modal',
  templateUrl: './company-detail-modal.component.html',
  styleUrls: ['./company-detail-modal.component.css']
})
export class CompanyDetailModalComponent implements OnInit {

  @Input() chosenItem;
  @Input() chosenTab1;
  @Input() modalType;

    constructor() {

    }

    ngOnInit() {

    }

}
