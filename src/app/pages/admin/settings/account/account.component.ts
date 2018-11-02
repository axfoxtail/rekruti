import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  _opened: boolean = true;
  pageTitle = '> Accounts';
  _searchSortArray: any = '';

  @Input() settingsData;

  constructor() { }

  ngOnInit() {
  }

}
