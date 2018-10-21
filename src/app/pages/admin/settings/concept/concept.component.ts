import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Concepts';

  @Input() settingsData;

  constructor() { }

  ngOnInit() {
  }

}
