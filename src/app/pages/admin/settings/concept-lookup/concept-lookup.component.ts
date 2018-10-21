import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-concept-lookup',
  templateUrl: './concept-lookup.component.html',
  styleUrls: ['./concept-lookup.component.css']
})
export class ConceptLookupComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Concept Lookup';

  @Input() settingsData;

  constructor() { }

  ngOnInit() {
  }

}
