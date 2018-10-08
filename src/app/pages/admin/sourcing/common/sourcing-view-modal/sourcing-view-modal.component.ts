import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sourcing-view-modal',
  templateUrl: './sourcing-view-modal.component.html',
  styleUrls: ['./sourcing-view-modal.component.css']
})
export class SourcingViewModalComponent implements OnInit {

  @Input() jsonObj;

  constructor() { }

  ngOnInit() {
  }

}
