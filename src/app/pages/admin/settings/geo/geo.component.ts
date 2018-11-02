import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Geo';
  _searchSortArray: any = [
    { value: 'relevancy', label: 'Relevancy' },
    { value: 'occurrences', label: 'Occurrences' },
    { value: 'population', label: 'Population' },
  ];

  @Input() settingsData;

  constructor() { }

  ngOnInit() {
  }

}
