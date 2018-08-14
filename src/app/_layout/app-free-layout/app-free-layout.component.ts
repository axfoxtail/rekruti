import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-free-layout',
  templateUrl: './app-free-layout.component.html',
  styleUrls: ['./app-free-layout.component.css']
})
export class AppFreeLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    onDeactivate() {
        document.body.scrollTop = 0;
    }

}
