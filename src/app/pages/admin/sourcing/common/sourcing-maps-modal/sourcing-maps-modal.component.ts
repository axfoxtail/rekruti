import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sourcing-maps-modal',
  templateUrl: './sourcing-maps-modal.component.html',
  styleUrls: ['./sourcing-maps-modal.component.css']
})
export class SourcingMapsModalComponent implements OnInit {
  
  @Input() mapsObj;

  constructor() { }

  ngOnInit() {
  }

}
