import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geo-lookup',
  templateUrl: './geo-lookup.component.html',
  styleUrls: ['./geo-lookup.component.css']
})
export class GeoLookupComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Geo Lookup';

  @Input() settingsData;

  constructor() { }

  ngOnInit() {
  }

}
