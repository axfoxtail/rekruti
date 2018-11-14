import {Component, OnInit, Input} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-jobs-detail-modal',
  templateUrl: './jobs-detail-modal.component.html',
  styleUrls: ['./jobs-detail-modal.component.css']
})
export class JobsDetailModalComponent implements OnInit {

  @Input() chosenItem;
  @Input() chosenTab1;
  @Input() modalType;

    constructor() {

    }

    ngOnInit() {

    }

}
