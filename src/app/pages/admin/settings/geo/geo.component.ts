import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Clients';

  @Input() settingsData;

  constructor() { }

  ngOnInit() {
  }

}
