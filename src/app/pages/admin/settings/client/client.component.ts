import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Clients';

  @Input() settingsData;

  constructor() { }

  ngOnInit() {
  }

}
